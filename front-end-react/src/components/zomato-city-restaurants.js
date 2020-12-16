import React from "react";
import {Link} from "react-router-dom";

export default class ZomatoRestaurants extends React.Component {
    state = {
        restaurants:[]
    }
    componentDidMount() {
        fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=${this.props.cityID}&entity_type=city&apikey=8410dcfb67f3253d684c344327ccef10`)
            .then(response => response.json())
            .then(results => this.setState({
                restaurants: results.restaurants
            }))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.cityID !== prevProps.cityID) {
            fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=${this.props.cityID}&entity_type=city&apikey=8410dcfb67f3253d684c344327ccef10`)
                .then(response => response.json())
                .then(results => this.setState({
                    restaurants: results.restaurants
                }))
        }
    }
    render() {
        return(
            <div className="container">
                <ul className="z-depth-0 list-group">
                    {
                        this.state.restaurants.map(restaurant =>
                            <li className="card-content list-group-item"
                                key = {restaurant.restaurant.id}>
                                <Link className="card-title grey-text text-darken-3" to={`/cities/restaurant/${restaurant.restaurant.id}`}>
                                    {restaurant.restaurant.name}
                                </Link>

                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }

}
