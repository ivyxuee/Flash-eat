##API Overview:
Our service provides restaurant searching by city feature based on Zomato API. Specifically, we are exposing three APIs for customers. 

###1. /cities 
To search for cities that matches the customer query string in the input form. Each search result contains cityId which can be used to fetch more detailed info about this city, such as search for all restaurants by cityId.

###2. /cities/cityId 
To search for all available restaurants by cityId. Each search result contains primary key restauranId, which can be used to fetch detailed info about this restaurant.

###3. /cities/restaurant/restaurantId 
To fetch for detailed information about a restaurant by restaurantId, which includes cuisine types this restaurant offers, menu, photos, operating time and etc.

####Example queries and results:
* Qeury: 
http://cs5610-sp20-team18.herokuapp.com/cities/280 => search restaurants by cityId/280

* Expected Result: 
![](./image/Restaurants%20in%20New%20York.png)

##Heroku Link to the API:
http://cs5610-sp20-team18.herokuapp.com/cities
