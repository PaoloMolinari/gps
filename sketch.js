
// Options for map

/*
var options = {
  lat: 0,
  lng: 0,
  zoom: 4,
  style: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
}

var mappa = new Mappa('Leaflet');
var myMap;
*/

var canvas;



let lat;
let lon;
let alt;
let acc;
let altacc;
let heading;
let speed;
let tstamp;

let data = [];

let table;

function getposition(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    alt = position.coords.altitude;
    acc = position.coords.accuracy;
    altacc = position.coords.altitudeAccuracy;
    heading = position.coords.heading;
    speed = position.coords.speed;
    tstamp = position.timestamp;    
}

function setup() {    
    canvas = createCanvas(800, 700);
    fill(70, 203,31);	
    stroke(100);

    table = new p5.Table();

    lat = 0;
    lon = 0;
    alt = 0;
    acc = 0;
    altacc = 0;
    heading = 0
    speed = 0;
    tstamp = 0;

    // noLoop();
}

function draw() {
    background(0);
    sleep(5000);
    console.log('.');
    navigator.geolocation.getCurrentPosition(getposition);
    console.log(lat, lon, alt, acc, altacc, heading, speed, tstamp);


//    if(lat != nill && lon != nill){
	let la = nf(lat);
	let lo = nf(lon);
  //  }
    
    textSize(22);
    fill('yellow');
    text('latitud: ' + nf(lat), 30, 20);
    text('longitud: ' + nf(lon), 30, 45);
    text('altitud: ' + nf(alt), 30, 70);
    text('accuracy: ' + nf(acc), 30, 95);
    text('altutud accuracy: ' +  nf(altacc), 30, 120);
    text('heading: ' +  nf(heading), 30, 145);
    text('speed: ' +  nf(speed), 30, 170);
    text('time stamp: ' +  nf(tstamp), 30, 195);

}

function mouseClicked() {
  // Code to run.
}

function sleep(millisecondsDuration)
{
  return new Promise((resolve) => {
    setTimeout(resolve, millisecondsDuration);
  })
}

/*

	navigator.geolocation.getCurrentPosition(

    // Success callback
    function(position) {
			background(220);
			textSize(32);
			text("latitude: " + position.coords.latitude, 5, 100);
			text("longitude: " + position.coords.longitude, 5, 200);

        
	position is an object containing various information about
	the acquired device location:

	position = {
	    coords: {
		latitude - Geographical latitude in decimal degrees.
		longitude - Geographical longitude in decimal degrees. 
		altitude - Height in meters relative to sea level.
		accuracy - Possible error margin for the coordinates in meters. 
		altitudeAccuracy - Possible error margin for the altitude in meters. 
		heading - The direction of the device in degrees relative to north. 
		speed - The velocity of the device in meters per second.
	    }
	    timestamp - The time at which the location was retrieved.
	}
        

	 // Optional error callback
    function(error){

        
	In the error object is stored the reason for the failed attempt:

	error = {
	    code - Error code representing the type of error 
		    1 - PERMISSION_DENIED
		    2 - POSITION_UNAVAILABLE
		    3 - TIMEOUT

	    message - Details about the error in human-readable format.
	}
        

    }
);
	*/
