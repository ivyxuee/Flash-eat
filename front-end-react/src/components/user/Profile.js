import React from 'react';
import logo from "../../assets/logo.png";
import EditProfile from "./EditProfile";


class Profile extends React.Component {
    state = {
        currentUser: null,
        users: [],
        reviews: [],
        loggedIn: false
    };

    componentDidMount() {
        this.props.findAllUsers().then(users => {
            this.setState ({
                users: users
            });
            for(const user of users.users) {
                this.props.findReviewsByUsername(user.userName)
                .then(reviews => {
                    this.setState({
                        reviews: [...this.state.reviews, ...reviews.reviews]
                    })
                })
            }
        });

        fetch("http://localhost:3000/api/currentuser", {
            method: 'GET',
            credentials: "include"
        }).then(response => response.json())
            .then(user => {
                if(user) {
                    this.setState({loggedIn: true})
                    this.setState({currentUser: user})
                    // this.props.history.push(`/profile/${user.userName}`)
                    console.log("loggedIn in fetch is ", this.state.loggedIn)
                }
            }
        ).catch(err => console.log(err));
    }

    checkDetailedProfile = (userId) => {
        fetch(`http://localhost:3000/api/users/${userId}`, {
            method: 'GET',
            credentials: "include"
        }).then(response => response.json())
        .then(user => {
            if(user) {
                this.props.history.push(`/profile/${user._id}`)
            }
        })

    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className=" mt-5">
                        <h1 className="text-center">Profile</h1>
                        { this.state.currentUser &&
                            <EditProfile
                                user={this.state.currentUser}
                                updateUser={this.props.updateUser}/>
                        }

                        {
                            this.state.reviews.map( (review, i) =>
                                <div className="content-wrapper mb-2"
                                     key={i}
                                     onClick={() => this.checkDetailedProfile(review.userId)}>

                                    {this.state.loggedIn &&
                                        <div>
                                            <div className="form-group row cs5500-field cs5500-username">
                                                <label htmlFor="username"
                                                       className="col-sm-3 col-form-label">
                                                    UserId
                                                </label>
                                                <a className="col-sm-9">
                                                    {review.userId} : [visible to users logged in]
                                                </a>

                                            </div>

                                        </div>
                                    }
                                    <div
                                        className="form-group row cs5500-field cs5500-username">
                                        <label htmlFor="username"
                                               className="col-sm-3 col-form-label">
                                            RestaurantId
                                        </label>
                                        <div className="col-sm-9">
                                            {review.restaurantId}
                                        </div>
                                    </div>

                                    <div
                                        className="form-group row cs5500-field cs5500-phone">
                                        <label htmlFor="phone"
                                               className="col-sm-3 col-form-label">
                                            Reviews:
                                        </label>
                                        <div className="col-sm-9">
                                            {review.review}
                                        </div>
                                    </div>

                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;

