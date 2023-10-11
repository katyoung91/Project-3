//Check if data is pulled correctly by logging it into the console. 
console.log(taylorData);
 

 //Initiating the data and creating the album dropdown
function init() {
    //selects the dropdown id on the webpage
    let dropdownMenu = d3.select("#selDatasetAlbum");

        //assign the array of albums to a variable
        let albums = taylorData.albums;

        //Append each album to the dropdown menu
        albums.forEach((album) => {
            dropdownMenu.append("option").text(album).property("value", album);
        });

        //Assign the first item in albums as the default value
        let album = albums[0];

       //initiate the demo chart and bubble chart with the first album.
        demoChart(album);
        bubbleChart(album);
        bulletChart(album);
};

//Update all data on the page when a different album on the dropdown menu is selected. This updates based on "optionChanged" in the HTML and the value slected in "optionChanged"
function optionChanged(album) {  
    demoChart(album);
    bubbleChart(album);
    bulletChart(album);
};

//Creating the bubblechart
function bubbleChart(album) {

    //assign the metadata to a variable
    let albumData = taylorData.metadata
    //filter the data based on the album from the dropdown
    let albumFilter = albumData.filter((name) => name.album == album)
    //create empty lists to store the data for the chart
    let songArray = []
    let energyArray = []
    let danceArray = []
    let popArray = []


    //loop through each song from the album and add the data to each array
    for (let i=0; i< albumFilter.length; i++){
        songArray.push(albumFilter[i].name)
        energyArray.push(albumFilter[i].energy)
        popArray.push(albumFilter[i].popularity)
        danceArray.push(albumFilter[i].danceability)
    };


    //Assign the trace data for the bubble chart
    let trace = [{
        x: danceArray,
        y: energyArray,
        text: songArray,
        type: "bubble",
        mode:"markers",
        marker: {
            size: popArray,
            color: popArray,
            colorscale: "YlGnBu",
            line:{color:"black"}
        },
    }];

    //Set a layout
    let layout = {
        height: 800,
        width: 800,
        title: {
            text:`Popularity, Energy, and Danceability of Songs from "${album}"`},
        xaxis: {
            title: {text:"Dancability"}
        },
        yaxis: {
            title: {text:"Energy"}
        }
    };

        //Plot the data in the bar chart. 
        Plotly.newPlot("bubble",trace, layout)
};

//create the bullet chart that shows the popularity rating
function bulletChart(album) {

    //assign the metadata to a variable
    let albumData = taylorData.metadata
    //filter the data based on the album from the dropdown
    let albumFilter = albumData.filter((name) => name.album == album)
    //access the first case in the data
    let popArray = [];

     //loop through each song from the album and add the data to each array
     for (let i=0; i< albumFilter.length; i++){
        popArray.push(albumFilter[i].popularity)
    };

    var total = 0;
    for(var i = 0; i < popArray.length; i++) {
        total += popArray[i];
    }
    var popAvg = total / popArray.length;

    // set the trace data
    var data = [
        {
            type: "indicator",
            mode: "number+gauge+delta",
            value: popAvg,
            domain: { x: [0, 1], y: [0, 1] },
            delta: { reference: 64 },
            gauge: {
                shape: "bullet",
                axis: { range: [null, 100] },
                threshold: {
                    line: { color: "red", width: 2 },
                    thickness: 0.75,
                    value: 64
                },
                steps: [
                    { range: [0, 20], color: "#033f63" },
                    { range: [20, 40], color: "#28666e" },
                    { range: [40, 60], color: "#7c9885" },
                    { range: [60, 80], color: "#b5b682" },
                    { range: [80, 100], color: "#fedc97" }
                ],
                bar: { color: "#f2f2f2" }
            }
        }
    ];
    //set the layout and configuration
    var layout = {width: 600, height: 250, title: "<b>Album Popularity</b>"};
    var config = { responsive: true };

    Plotly.newPlot('bullet', data, layout, config);
};

//maket the demochart
function demoChart(album) {

    //assign the metadata to a variable
      let albumData = taylorData.metadata

        //filter the data based on the album from the dropdown
        let albumName = albumData.filter((name) => name.album == album)
        //access the first case in the data
        let result = albumName[0];
        //collect the number of songs in the album based on how many entries were pulled
        let tracks = albumName.length;

        //clear any existing data
        d3.select("#album-info").html("");

        //assign the demo box of the page to a variable
        let demotable = d3.select("#album-info")
        //add each key-value pair to the demo box 
        demotable.append("h6").text(`Release Date: ${result.release_date}`);
        demotable.append("h6").text(`Number of tracks: ${tracks}`);
};

//Initiate all charts and data on the page
init();
