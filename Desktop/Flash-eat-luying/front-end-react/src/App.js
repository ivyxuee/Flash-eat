import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
import NavBarComponent from "./components/layout/Navbar";
import DashboardComponent from './components/dashboard/DashboardComponent'
import PrivacyComponent from './components/dashboard/PrivacyComponent'
import ZomatoCities from "./components/zomato-cities";
import ZomatoRestaurants from "./components/zomato-city-restaurants";
import ZomatoRestaurantDetail from "./components/zomato-restaurant-detail";
import SignInContainer from "./containers/SignInContainer";
import DriverSignInContainer from "./containers/DriverSignInContainer";
import SignUpContainer from "./containers/SignUpContainer";
import ProfilesContainer from "./containers/ProfilesContainer";
import PersonalProfileContainer from "./containers/PersonalProfileContainer";
import GenericProfile from "./components/user/GenericProfile";
import RetriveContainer from "./containers/RetrieveContainer";

function App() {
  return (
      <Router>
        <div className="App">
          <NavBarComponent />
          <Switch>
            <Route path='/' exact component={SignInContainer}></Route>
            <Route path="/search" exact component={ZomatoCities}/>
            <Route path="/search/:cityID" exact
                render={(props) =>
                    <ZomatoRestaurants
                        cityID={props.match.params.cityID}/>}/>
            <Route path="/cities/restaurant/:restaurantID" exact
                render={(props) =>
                    <ZomatoRestaurantDetail
                        restaurantID={props.match.params.restaurantID}/>}/>
            <Route path="/login" exact component={SignInContainer}/>
            <Route path="/driver" exact component={DriverSignInContainer}/>
            <Route path="/signup" exact component={SignUpContainer}/>
            <Route path="/retrivepassword" exact component={RetriveContainer}/>
            <Route path="/privacy" exact component={PrivacyComponent}/>
            <Route path="/profile"
                   exact component={ProfilesContainer}/>
            <Route path="/profile/username/:userName"
                   exact
                   render={(props) =>
                       <GenericProfile
                           userName={props.match.params.userName}/>}/>
            <Route path="/profile/:userId" exact
                   render={(props) =>
                       <PersonalProfileContainer
                           userId={props.match.params.userId}/>}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
