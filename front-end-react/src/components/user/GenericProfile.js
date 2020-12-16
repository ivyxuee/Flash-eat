import React from 'react';

class GenericProfile extends React.Component {

  state = {
    reviews: null,
    user: []
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/users/username/${this.props.userName}`, {
      method: 'GET',
      credentials: "include"
    }).then(response => response.json()).then(user => this.setState({user: user}));

    fetch(`http://localhost:3000/api/profile/${this.props.userName}`,{
      method: 'GET',
      credentials: "include"
    }).then(response => response.json()).then(reviews => this.setState({reviews: reviews}));
  }

  render() {
    return(
          <div className="container">
            <br/><br/><br/>
            {
              this.state.user.length != 0 &&
              <div className="content-wrapper mb-3">
                <div className="form-group row cs5500-field cs5500-username">
                  <label htmlFor="username"
                         className="col-sm-3 col-form-label">
                    Username
                  </label>
                  <div className="col-sm-9">
                    {this.state.user[0].userName}
                  </div>
                </div>

                <div className="form-group row cs5500-field cs5500-email">
                  <label htmlFor="email"
                         className="col-sm-3 col-form-label">
                    Email
                  </label>
                  <div className="col-sm-9">
                    {this.state.user[0].email}
                  </div>
                </div>

              </div>
            }
            {
              this.state.user.length == 0 &&
              <h3>User Not found.</h3>
            }
            <div className='row'>

              <div className="col-6">
                {this.state.reviews && <h2>Reviews</h2>}
                {
                  this.state.reviews && this.state.reviews.map(review =>
                      <div className="content-wrapper mb-2">

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
            </div>
          </div>
    )
  }
}

export default GenericProfile;
