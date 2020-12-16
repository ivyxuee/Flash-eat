import React from 'react';
import {connect} from "react-redux";
import EditProfile from "./EditProfile";


class Profile extends React.Component {
    _isMounted = false;

    state = {
        userName : this.props.userName,
        reviews: null,
        orders: null,
        currentUser: null,
        user: null,
        userId: '',
        loggedIn: false
    };

    componentDidMount() {
        this._isMounted = true;
        fetch("http://localhost:3000/api/currentuser", {
            method: 'GET',
            credentials: "include"
        }).then(response => response.json())
        .then(user => {
                console.log("currentUser in profile is ", user)
                if(user) {
                    this.setState((prevState) => ({
                        ...prevState,
                        loggedIn: true,
                        currentUser: user
                    }));
                    console.log("loggedIn in fetch is ", this.state.loggedIn)
                }
            }
        ).catch(err => console.log(err))
        .then(() => {
            this.props.findReviewsByUserId(this.props.userId).then(reviews => {
                console.log("reviews is ", reviews, "userId is ", this.props.userId)
                this.setState((prevState) => ({
                    ...prevState,
                    reviews: reviews.reviews,
                    userId: this.props.userId
                }))
            }).then(
                () =>
                    fetch(
                        `http://localhost:3000/api/users/${this.state.userId}`,
                        {
                            method: 'GET',
                            credentials: "include"
                        }).then(response => response.json())
                    .then(user => {
                        this.setState((prevState) => ({
                            ...prevState,
                            user: user
                        }))
                    })
            ).then (
                () => this.props.findOrdersByUserId(this.state.userId).then(orders => {
                        this.setState((prevState) => ({
                            ...prevState,
                            orders: orders
                        }))
                    }
                )
            )
        })



    }

    componentWillUnmount() {
        this._isMounted = false;
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.userId !== prevProps.userId) {
            this.props.findReviewsByUserId(this.props.userId).then(reviews => {
                console.log("reviews is ", reviews)
                this.setState( (prevState) => ({
                    ...prevState,
                    reviews: reviews,
                    userId: reviews.userId
                }))
            }).then(
                () => this.props.findUserById(this.state.currentUser._id).then(user => {

                    this.setState((prevState) => ({
                       ...prevState,
                        user: user
                    }))
                })
            )
        }
    }


    render() {
        return(
            <div>

                    <div className="container">
                        <div className=" mt-5">
                            {/* <div className="text-center mb-3">
                                <img src={logo} className="form-logo"/>
                            </div> */}
                            <h1 className="text-center font-italic text-success">Profile</h1>

                            { this.state.user &&
                            <div className="content-wrapper mb-3">
                                <div className="form-group row cs5500-field cs5500-username">
                                    <label htmlFor="username"
                                           className="col-sm-3">
                                        Username
                                    </label>
                                    <div className="col-sm-9">
                                        {this.state.user.userName}
                                    </div>
                                </div>

                                <div className="form-group row cs5500-field cs5500-phone">
                                    <label htmlFor="phone"
                                           className="col-sm-3">
                                        PhoneNumber
                                    </label>
                                    <div className="col-sm-9">
                                        {this.state.user.phone}
                                    </div>
                                </div>

                                <div className="form-group row cs5500-field cs5500-email">
                                    <label htmlFor="email"
                                           className="col-sm-3">
                                        Email
                                    </label>
                                    <div className="col-sm-9">
                                        {this.state.user.email}
                                    </div>
                                </div>
                                <div className="form-group row cs5500-field cs5500-address">
                                    <label htmlFor="address"
                                           className="col-sm-3">
                                        Address
                                    </label>
                                    <div className="col-sm-9">
                                        {this.state.user.address}
                                    </div>
                                </div>

                            </div>
                            }

                          {
                            this.state.user == null &&
                            <h3>User Not found.</h3>
                          }
                        </div>
                    </div>
                <div className='container-fluid'>
                    <div className='row'>

                        <div className="col-6">
                          {this.state.reviews !== null && <h2 className="text-center font-italic text-success">Reviews</h2>}
                          {
                                this.state.reviews && this.state.reviews.map((review,i)=>
                                    <div className="content-wrapper mb-2" key={i}>

                                        {this.state.loggedIn &&
                                        <div className="form-group row cs5500-field cs5500-username">
                                            <label htmlFor="username"
                                                   className="col-sm-3">
                                                UserId
                                            </label>
                                            <a className="col-sm-9">
                                                {review.userId} Visible to user Logged In
                                            </a>

                                        </div>

                                        }

                                        <div
                                            className="form-group row cs5500-field cs5500-username">
                                            <label htmlFor="username"
                                                   className="col-sm-3">
                                                RestaurantId
                                            </label>
                                            <div className="col-sm-9">
                                                {review.restaurantId}
                                            </div>
                                        </div>

                                        <div
                                            className="form-group row cs5500-field cs5500-phone">
                                            <label htmlFor="phone"
                                                   className="col-sm-3 ">
                                                Reviews:
                                            </label>
                                            <div className="col-sm-9">
                                                {review.review}
                                            </div>
                                        </div>

                                    </div>)
                            }
                        </div>

                        <div className="col-6">
                            <h2 className="text-center font-italic text-success">Orders</h2>
                            {
                                this.state.orders && this.state.orders.map((order,i) =>
                                    <div className="content-wrapper mb-2" key={i}>

                                        {this.state.loggedIn &&
                                        <div className="form-group row cs5500-field cs5500-username">
                                            <label htmlFor="username"
                                                   className="col-sm-3">
                                                OrderStatus
                                            </label>
                                            <a className="col-sm-9">
                                                {order.orderStatus}
                                            </a>
                                        </div>
                                        }

                                        <div
                                            className="form-group row cs5500-field cs5500-username">
                                            <label htmlFor="username"
                                                   className="col-sm-3">
                                                RestaurantId
                                            </label>
                                            <div className="col-sm-9">
                                                {order.restaurantId}
                                            </div>
                                        </div>

                                        <div
                                            className="form-group row cs5500-field cs5500-phone">
                                            <label htmlFor="phone"
                                                   className="col-sm-3">
                                                Orders
                                            </label>
                                            <div className="col-sm-9">
                                                {this.state.loggedIn ?
                                                    order.items && order.items.map((item,i) =>
                                                        <p key={i}>
                                                            {item.itemName} x {item.quantity}
                                                        </p>
                                                    )
                                                    :
                                                    order.items.length
                                                }
                                            </div>
                                        </div>

                                    </div>)
                            }
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        users: state.user.users,
        currentUser: state.user.currentUser
    }
}
export default connect(mapStateToProps)(Profile);

