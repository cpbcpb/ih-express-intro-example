//first we did npm init in this folder express-hello-world 
//to make package json
//then in console did: npm install express --save
//then created this app.js file to be a server

//always need these to lines to use express
const express = require('express');
// we create our own server named app
//express server handling requests and responses
const app = express();
//to make stuff in public available
//static assets are files that don't need to be processed by the application
//but simply sent to the user
//also dont need to type /public/ to get to these now
app.use(express.static('public'));


//in back end we only consider the part
//of the URL that comes after the domain.

//this is a route

//app is the server
// '/' the / is the actual route
//request is an object containing information about the request
//such as the headers 
//response is an object containing information like headers and data
//next for errors
//=> is the callback function
// the response object has methods like send()
app.get('/', (request, response, next)=>{
    console.log(request);
    response.sendFile(__dirname + '/views/home-page.html');
})
//Start the server by typing node app.js into console
//bt can npm install nodemon --global 
app.listen(3000, () => {
    console.log('The server for this express app is listening')
})
//i got the image in the folder using terminal command as follows:
//curl -o public/images/mymadeupfilename.jpg completeurltodownloadfrom

app.get('/cat', (request, response, next) => {
    response.sendFile(__dirname + '/views/cat-page.html');
  });
  //when linking static files in Express
  //leave out the public part
  //always start link with /
