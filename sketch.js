
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
//let text;








function getposition(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    //console.log(lat, lon);
}

function setup() {    

canvas = createCanvas(800, 700);

  // Create a tile map and overlay the canvas on top.
  //  myMap = mappa.tileMap(options);
  //  myMap.overlay(canvas);

    fill(70, 203,31);	
  stroke(100);


    table = new p5.Table();

    // noLoop();

    lat = 0;
    lon = 0;

}

function draw() {
    background(0);
    sleep(5000);
    console.log('.');
    navigator.geolocation.getCurrentPosition(getposition);
    console.log(lat, lon);


//    if(lat != nill && lon != nill){
	let la = nf(lat);
	let lo = nf(lon);
  //  }
    
    textSize(22);
    fill('yellow');
    text(nf(lat), width/2 - 30, height/2 -22);
    text(nf(lon), width/2 - 30, height/2 + 22);
 //   print(lat);
  //  print(lon);
}


function drawmap(){

    clear();
     if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
	 let pos = myMap.latLngToPixel(lat, lon);
	 console.log(pos);
      // Get the size of the meteorite and map it. 60000000 is the mass of the largest
      // meteorite (https://en.wikipedia.org/wiki/Hoba_meteorite)
//      var size = meteorites.getString(i, 'mass (g)');
      let size = map(size, 558, 60000000, 1, 25) + myMap.zoom();
	 ellipse(pos.x, pos.y, size, size);

     }


    
}


function sleep(millisecondsDuration)
{
  return new Promise((resolve) => {
    setTimeout(resolve, millisecondsDuration);
  })
}

/*
function storeData(){

    storeItem()
    
}
*/

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
