import React, {Component} from 'react';
import ZomatoCities from "../zomato-cities";
import {connect} from 'react-redux';

class DashboardComponent extends Component {
  render() {
    return (
        <div className='dashboard container mt-5'>
          <div className="row">
            <ZomatoCities/>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    restaurants: state.restaurant.restaurants
  }
}
export default connect(mapStateToProps)(DashboardComponent);
