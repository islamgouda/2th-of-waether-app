# Weather-Journal App Project

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Instructions
This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.

## Extras
If you are interested in testing your code as you go, you can use `tests.js` as a template for writing and running some basic tests for your code.

/*********************************************************************************/

1-if you want to check tests add <script src="tests.js" type="text/javascript"></script> to index file
2-i made weather application with api from "https://openweathermap.org/api"
3- user will enter zip code of city and his feelings about weather and click on generate button
that calls function generateData that calls async function called getWeatherData passing zip cod to it
 this function calles web api that return the object to it and because this function is synchronus it will return promises
we use then method and passing returned data from it then unpack returned object and git city ,temprature ,description
data put them in info object that will send to server to save it server will save and send data back with post,get methods
we will receive savedData from server and print it in index html doument if 
4-if enterd zip code is wrong alert will display asking user to enter right zip code