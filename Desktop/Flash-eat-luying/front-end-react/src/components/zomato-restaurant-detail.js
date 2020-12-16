import React from "react";
import '../styles/styles.css'
import {connect} from "react-redux";

class ZomatoRestaurantDetail extends React.Component {
    state = {
        restaurant: {},
        location:[],
        dishes:[],
        // user: {
        //     admin:{adminLevel: "NONE"},
        //     id:'5e96a8f49265e4b2ca232d7b'
        // },
        review: String,
        reviews:[],

        items:[],
        newItem:{
            itemName: String,
            price: Number
        },
        menuId:'',
        dishesAdmin:[]
    }
    componentDidMount() {
        fetch(`https://developers.zomato.com/api/v2.1/restaurant?res_id=${this.props.restaurantID}&apikey=8410dcfb67f3253d684c344327ccef10`)
            .then(response => response.json())
            .then(results => this.setState({
                restaurant: results,
                location:results.location
            }))
        fetch(`https://developers.zomato.com/api/v2.1/dailymenu?res_id=${this.props.restaurantID}&apikey=8410dcfb67f3253d684c344327ccef10`)
            .then(response => response.status === 200 ? response.json() : {daily_menus: []})
            // .then(results => (results.daily_menus.length === 0) ? this.getDefaultMenus() : this.extractMenus(results.daily_menus))
            .then(results => this.generateResults(results))
            .then(results => this.setState({
                dishes: results
            }))
        fetch(`http://localhost:3000/api/reviews/restaurants/${this.props.restaurantID}`)
            .then(response => response.json())
            .then(results => this.setState({
                reviews: results,
            }))
        fetch(`http://localhost:3000/api/menus/restaurants/${this.props.restaurantID}`)
            .then(response => response.json())
            .then(results => (results.length === 0) ? this.createMenu(this.props.restaurantID) : this.setState({
                items: results[0].items,
                menuId: results[0]._id
            }))

    }

    generateResults = async (results) => {
        let returnResults = []
        await fetch(`http://localhost:3000/api/menus/restaurants/${this.props.restaurantID}`)
            .then(response => response.json())
            .then(results => results.length !== 0 ? this.setState({
                dishesAdmin: results[0].items
            }) : this.setState({
                dishesAdmin: []
            })).then(x => console.log(this.state.dishesAdmin.length))
        if (results.daily_menus.length === 0) {
            if (this.state.dishesAdmin.length > 0) {
                for (let i = 0; i < this.state.dishesAdmin.length; i++) {
                    let tmp = {name : this.state.dishesAdmin[i].itemName, price: this.state.dishesAdmin[i].price}
                    this.state.dishesAdmin[i] = tmp
                }
                returnResults = this.state.dishesAdmin
            } else {
                returnResults = this.getDefaultMenus()
            }
        } else {
            returnResults = this.extractMenus(results.daily_menus)
        }
        return returnResults
    }

    getDefaultMenus = () => {
        return [{name : "French Fries", price: 2, amount : 0 }, {name : "Fried rice", price : 3, amount : 0}];
    }

    extractMenus = (results) => {
        let dishes = []
        for (let i = 0; i < results.length; i++) {
            for (let j = 0; j < results[i].daily_menu.dishes.length; j++) {
                let name = results[i].daily_menu.dishes[j].dish.name;
                let price = results[i].daily_menu.dishes[j].dish.price;
                price = price.substring(0, price.length - 3);
                let amount = 0;
                dishes.push({name : name, price : price, amount : amount});
            }
        }

        console.log(dishes)
        return dishes
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.restaurantID !== prevProps.restaurantID) {
            fetch(`https://developers.zomato.com/api/v2.1/restaurant?res_id=${this.props.restaurantID}&apikey=8410dcfb67f3253d684c344327ccef10`)
                .then(response => response.json())
                .then(results => this.setState({
                    restaurant: results,
                    location:results.location
                }))
        }
    }

    updateDishes = (dishes, index, value) =>
    {
        for (let i = 0; i < dishes.length; i++) {
            if (i == index) {
                dishes[i].amount = value;
            }
        }

        return dishes;
    }

    createOrder = () => {
        console.log(this.state.dishes)
        let order = {items:[]}
        for (let i = 0; i < this.state.dishes.length; i++) {
            if (this.state.dishes[i].amount > 0) {
                order.items.push({itemName : this.state.dishes[i].name, price : this.state.dishes[i].price, quantity: this.state.dishes[i].amount})
            }
        }

        if (order.items.length === 0) {
            alert("Please add at least one dish")
            return;
        }

        fetch(`http://localhost:3000/api/orders/restaurants/${this.props.restaurantID}/users/${this.props.user._id}`, {
            method: "POST",
            body: JSON.stringify(order),
            headers: {
                'content-type': "application/json"
            }
        }).then(response => response.status === 200 ? alert("Order made successfully!") : alert("Please try again."))

    }

    createReview = (rid, userId) => {
        if (!this.state.review){
            alert("Please add at least one dish")
            return;
        }
        fetch(`http://localhost:3000/api/reviews/users/${this.props.user._id}/restaurants/${this.props.restaurantID}`, {
            method: "POST",
            body: JSON.stringify({review: this.state.review}),
            headers: {
                'content-type': "application/json"
            }
        }).then(response => fetch(`http://localhost:3000/api/reviews/restaurants/${this.props.restaurantID}`)
            .then(response => response.json())
            .then(results => this.setState({
                reviews: results,
                review:""
            })))
    }
    createMenu = (rid) => {

        fetch(`http://localhost:3000/api/menus`, {
            method: "POST",
            body: JSON.stringify({restaurantId: rid, items : []}),
            headers: {
                'content-type': "application/json"
            }
        }).then(response => response.json())

    }

    addItemToMenu = () => {
        fetch(`http://localhost:3000/api/menus/${this.state.menuId}`, {
            method: "PUT",
            body: JSON.stringify({itemName : this.state.newItem.itemName, price : this.state.newItem.price}),
            headers: {
                'content-type': "application/json"
            }
        })
            .then(response => fetch(`http://localhost:3000/api/menus/restaurants/${this.props.restaurantID}`)
            .then(response => response.json())
            .then(results => this.setState(prevState =>
                ({

                    ...prevState.items,
                    items: results[0].items,
                    newItem: {itemName: "", price: ""}
                })
            ))
            )

    }

    render() {
        console.log("this.state.restaurant.menu_url", this.state.restaurant.menu_url);
        console.log(this.state)
        return(
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        {/*<h1>Details for {this.state.restaurant.location}</h1>*/}
                        <span className="card-title black text-white">Restaurant: {this.state.restaurant.name}</span>

                        <div className="card-action grey lighten-2 grey-text">
                            <p>Cuisines: {this.state.restaurant.cuisines}</p>
                            <p>Timings: {this.state.restaurant.timings}</p>
                            <p>Location: {this.state.location.address}</p>
                        </div>

                        <img className="featured-image" src={this.state.restaurant.featured_image}/>
                        {this.props.user !== null && this.props.user.admin.adminLevel !== "NONE" && <div>
                            <h1>Menu</h1>
                            {this.state.items.map(item =>

                                <li className="list-group-item item">{item.itemName}   {item.price}</li>
                           )}

                            <form>
                                <div className="form-group">
                                    <h5 htmlFor="formGroupExampleInput">item name</h5>
                                    <input type="text" className="form-control" id="formGroupExampleInput"
                                           placeholder="Enter item name"
                                           onChange={(e) => {
                                               const newValue = e.target.value
                                               this.setState(
                                                   prevState => ({
                                                       newItem: {
                                                           ...prevState.newItem,
                                                           itemName: newValue
                                                       }
                                                   })
                                               )
                                           }}
                                    value = {this.state.newItem.itemName}/>
                                </div>
                                <div className="form-group">
                                    <h5 htmlFor="formGroupExampleInput2">item price ($)</h5>
                                    <input type="text" className="form-control" id="formGroupExampleInput2"
                                           placeholder="Enter item price"
                                           onChange={(e) => {
                                               const newValue = e.target.value
                                               this.setState(
                                                   prevState => ({
                                                       newItem: {
                                                           ...prevState.newItem,
                                                           price: newValue
                                                       }
                                                   })
                                               )
                                           }}
                                           value = {this.state.newItem.price}/>
                                </div>
                            </form>
                            <button className="btn btn-primary mb-2"
                                                                onClick={() => this.addItemToMenu()}>Add item</button>

                        </div>}
                        { this.props.user !== null && this.props.user.admin.adminLevel === "NONE" &&
                            <div>
                                <h1>Menus</h1>
                                <div className="row">
                                    <div className="col-2">Item Name</div>
                                    <div className="col-4">Item price($)</div>
                                </div>
                                {this.state.dishes.map((dish, index) =>
                                    <form className="form-inline">
                                        <div className="form-group mb-2">
                                            <label htmlFor="staticEmail2" className="sr-only">Email</label>
                                            <input type="text" readOnly className="form-control-plaintext"
                                                   id="staticEmail2"
                                                   value={dish.name}
                                            />
                                        </div>
                                        <div className="form-group mb-2">
                                            <label htmlFor="staticEmail2" className="sr-only">Email</label>
                                            <input type="text" readOnly className="form-control-plaintext"
                                                   id="staticEmail2"
                                                   value={dish.price}/>
                                        </div>
                                        <div className="form-group mx-sm-3 mb-2">

                                            <input className="form-control"
                                                   placeholder="Order Number"
                                                   onChange={(e) => {
                                                       const newValue = e.target.value
                                                       this.setState(prevState => ({
                                                           dishes: this.updateDishes(prevState.dishes, index, newValue)
                                                       }))
                                                   }}
                                            />
                                        </div>
                                    </form>
                                )}
                                <button type="submit" className="btn btn-primary mb-2"
                                        onClick={() => this.createOrder()}
                                >Submit Order
                                </button>
                                <br/>
                                <h1>Reviews</h1>
                                {this.state.reviews.map(review => <li className="list-group-item review">
                                    {review.review}
                                </li>)}
                                <input onChange={(e) => {
                                const newReview = e.target.value
                                this.setState(prevState => ({review: newReview}))}
                                }
                                value = {this.state.review}/>
                                <button type="submit" className="btn btn-primary mb-2"
                                    onClick={() => this.createReview()}>Create Your Review</button>
                            </div>
                        }
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.user.currentUser
    }
}
export default connect(mapStateToProps)(ZomatoRestaurantDetail);
