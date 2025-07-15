
//var canvas;

//tabla

let myTable;
let collectedDataTable;
let dataTable = [];
let bSave;

let pbutton;


//interface variable
let myButton;
let saveCsvButton;
let myInput;
let myText;
let stuff;
let bgColor;

// geolocation variables
let lat;
let lon;
let alt;
let acc;
let altacc;
let heading;
let speed;
let tstamp;


function preload(){
    myTable = loadTable('data.csv', 'csv', 'header');
    console.log(myTable);
 //  myTable = loadTable('data.csv');    
}


function getposition(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    alt = position.coords.altitude;
    acc = position.coords.accuracy;
    altacc = position.coords.altitudeAccuracy;
    heading = position.coords.heading;
    speed = position.coords.speed;
    tstamp = position.timestamp;

    // timestamp is defined as the number of seconds since the beginning of the Unix epoch, which is January 1st, 1970, at midnight (UTC). To change it to time:

    /*
      let unix_timestamp = 1549312452;

      // Create a new JavaScript Date object based on the timestamp
      // multiplied by 1000 so that the argument is in milliseconds, not seconds
      var date = new Date(unix_timestamp * 1000);

      // Hours part from the timestamp
      var hours = date.getHours();

      // Minutes part from the timestamp
      var minutes = "0" + date.getMinutes();

      // Seconds part from the timestamp
      var seconds = "0" + date.getSeconds();

      // Will display time in 10:30:23 format
      var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

      console.log(formattedTime);
    */
    
}

/*
function drawButton() {
  Fill();
  stroke(4);
  rect(150, 200, 100, 50);
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text("Presiona aquí", 200, 235);
}
*/

function setup() {
   
    canvas = createCanvas(800, 700);
    fill(70, 203,31);	
    stroke(100);
/*
    collectedDataTable = new p5.Table();
    collectedDataTable.addColumn('id');
    collectedDataTable.addColumn('feel');
    collectedDataTable.addColumn('lat');
    collectedDataTable.addColumn('lon');
    collectedDataTable.addColumn('alt');
    collectedDataTable.addColumn('acc');
    collectedDataTable.addColumn('altacc');
    collectedDataTable.addColumn('head');
    collectedDataTable.addColumn('speed');
    collectedDataTable.addColumn('tstamp');
*/
  //  print(myTable.getColumn("tstamp"));

    //read data in the table

    for (let i = 0; i < myTable.getRowCount(); i++) {
	for (let j = 0; j < myTable.getColumnCount(); j++) {
	    print(myTable.get(i, j));
	}
    }
    
    //geodata initialization
 
    lat = 0;
    lon = 0;
    alt = 0;
    acc = 0;
    altacc = 0;
    heading = 0
    speed = 0;
    tstamp = 0;

    myButton = createButton('Add Data');
    myInput = createInput('Enter a feeling');
    saveCsvButton = createButton('Save data')
    myInput.position(30, 220);
    myButton.position(35 + myInput.width, 220);
    saveCsvButton.position(35 + myInput.width, 250);

    // what is the callback for the button?
    myButton.mousePressed(adddata);
//    bSave = false;

    saveCsvButton.mousePressed(savedata);
    
    // .input() is a calback for something is being entered
    myInput.input(typing);
    
    // store the text to reuse and display realtime
    myText = '';
    stuff='';

 //   drawButton();

    //noLoop();
}

function draw() {
    background(0);
    sleep(5000);
   // console.log('.');
    navigator.geolocation.getCurrentPosition(getposition);
  //  console.log(lat, lon, alt, acc, altacc, heading, speed, tstamp);


//    if(lat != nill && lon != nill){
//	let la = nf(lat);
//	let lo = nf(lon);
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

   // text('real time input: ' + stuff, 30, 270);
    // text(myText, 30, 295);

    text(myTable.getRowCount() + ' set de datos agregados.', 30, 300);

}

function mouseClicked() {
    // Code to run.
  //  bSave = true;
}

function sleep(millisecondsDuration){
  return new Promise((resolve) => {
    setTimeout(resolve, millisecondsDuration);
  })
}

function typing() {
    stuff = this.value();
}

function adddata() {
    // cast as a color when assigning it to the variable
    //bgColor = color(myInput.value());
//    bSave = true;
 //   dataTable = [];
 //   dataTable.push(myInput.value(), lat, lon, alt, acc, altacc, heading, speed, tstamp);

    let newRow = myTable.addRow();
    newRow.setNum('id', myTable.getRowCount() - 1);
    newRow.setString('feel', myInput.value());
    newRow.setNum('lat', lat);
    newRow.setNum('lon', lon);
    newRow.setNum('alt', alt);
    newRow.setNum('acc', acc);
    newRow.setNum('accalt', altacc);
    newRow.setNum('head', heading);
    newRow.setNum('speed', speed);
    newRow.setNum('tstamp', tstamp);

    //saveTable(myTable, 'new.csv');
    
}

function savedata(){

saveTable(myTable, 'data.csv');

    
}





/*
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
