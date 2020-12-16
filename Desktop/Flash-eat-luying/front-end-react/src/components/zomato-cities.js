import React from "react";
import {Link} from "react-router-dom";

export default class ZomatoCities extends React.Component {
    state = {
        cities: [],
        title: ''
    }
    componentDidMount() {
        fetch("https://developers.zomato.com/api/v2.1/cities?q=NewYork&apikey=8410dcfb67f3253d684c344327ccef10")
            .then(response => response.json())
            .then(results => this.setState({
                    cities: results.location_suggestions
                })
            )
            }
    searchCity = (title) =>
        fetch(`https://developers.zomato.com/api/v2.1/cities?q=${title}&apikey=8410dcfb67f3253d684c344327ccef10`)
            .then(response => response.json())
            .then(results => this.setState({
                cities: results.location_suggestions
            }))

    render() {
        return(
            <div className="container">
                <ul className="list-group">
                    <li className="list-group-item">
                        <input
                            value={this.state.title}
                            onChange={(e) => this.setState({
                                title: e.target.value
                            })}
                            className="form-control"/>
                        <button
                            onClick={() => this.searchCity(this.state.title)}
                            className="btn btn-primary btn-block">
                            Search
                        </button>
                    </li>

                    {
                        this.state.cities.map(city =>
                            <li className="list-group-item"
                            key = {city.id}>
                                <Link to={`/search/${city.id}`}>
                                    {city.name}
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}
