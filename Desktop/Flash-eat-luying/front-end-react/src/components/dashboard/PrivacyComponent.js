import React, {Component} from 'react';

class PrivacyComponent extends Component {
  render() {
    return (
        <div className='container'>
          <div className="row">
            <div className="row">
              <h2 className="col-12">Privacy Policy</h2>
            </div>
            <br/>
            <div className="row content-wrapper">
              <h3 className="col-12">What is our website?</h3>
              <h6 className="col-12">Our website is an Online Food Ordering system that brings restaurants and customers together. On our website you can browse thousands of restaurants near you, place an order, leave a review or manage your own restaurant. </h6>
              <br/>
              <h6 className="col-12">The closest offline equivalent to our website is the restaurant. Restaurant has some strict privacy norms; personal information like payment, address can only be used for payment or billing purposes. Our website will be best facilitated by strict norms, people will be more likely to make online reviews and orders if their personal information can be protected properly. </h6>
            </div>
            <div className="row content-wrapper">
              <h3 className="col-12">What information will we collect?</h3>
              <h6 className="col-12">We will collect information such as your First Name, Last Name, Phone Number, Email, Address, Location, Credit Card Number, Expiration Date, Your reviews and orders, for the necessary functionalities right now.</h6>
              <br/>
              <h6 className="col-12">And also there is more information that is good to have for better services. For example, your frequent visits, orders or reviews on some certain kind of restaurants. And your demographic data for targeting ads. </h6>
            </div>
            <div className="row content-wrapper">
              <h3 className="col-12">Why do we need to collect your information?</h3>
              <h6 className="col-12">We collect your Personal Data for a variety of purposes, including:</h6>
              <h6 className="col-12">Those information we collected will be used for create and update user’s accounts</h6>
              <h6 className="col-12">The processing of your first name, last name, credit card number, expiration date is used for payment verification when you place an order</h6>
              <h6 className="col-12">The processing of your phone number, email allow us or restaurants can communicate with you when necessary, those information will also be used for identity verification and customer support, and will be used as your account’s unique identifier</h6>
              <h6 className="col-12">The processing of location allow us to find the restaurants around you and provide the best service</h6>
              <h6 className="col-12">knowing which kinds of restaurants that always tend to visit or make orders will allow us to give some recommendations about similar ones. </h6>
              <h6 className="col-12">Next, tracking demographic data will allow us to target restaurants’ advertisements based on where you are. We may also integrate external api like Google ads to monetize the website, which has the privacy policy itself. </h6>
              <h6 className="col-12">We know that customers' information will be exposed to more tracking mechanisms if we add other services. However, this would be the only way for us to make profit. And we will make sure to let customers know about these tracking in our privacy policy. We will legitimately collect data to improve services for customers and help us with our website, instead of making money by selling user data.</h6>
            </div>
            <div className="row content-wrapper">
              <h3 className="col-12">Data Sharing</h3>
              <h6 className="col-12">We may share the data we collect:<br/></h6>
              <h6 className="col-12">With restaurants and riders, this includes sharing your username, phone number, address.</h6>
              <h6 className="col-12">With the general public, this includes your reviews for specific restaurants</h6>
              <h6 className="col-12">We will contact you on behalf of external business partners about some services they provide that may be interesting to you. In this case, your personal information will be transferred to the third party, however, we will still guarantee that they are prohibited from making use of your private information except to provide their basic services, and they are required to maintain the confidentiality of your information. </h6>
            </div>
          </div>
        </div>
    )
  }
}

export default PrivacyComponent;
