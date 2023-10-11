//Check if data is pulled correctly by logging it into the console. 
console.log(taylorData);
 

 //Initiating the data and creating the song dropdown
function init() {
    //selects the dropdown id on the webpage
    let dropdownMenu = d3.select("#selDatasetSong");

        //assign the array of songs to a variable
        let songs = taylorData.songs;

        //Append each song in names to the dropdown menu
        songs.forEach((song) => {
            dropdownMenu.append("option").text(song).property("value", song);
        });

        //Assign the first item in names as the default value
        let song = songs[0];

        //initiate the charts with the first song.
        scatterpolarChart(song);
        bulletChart(song);
        demoChart(song);
};

//Update all data on the page when a different song on the dropdown menu is selected. This updates based on "optionChanged" in the HTML and the value slected in "optionChanged"
function optionChanged(song) {
    scatterpolarChart(song);
    bulletChart(song);
    demoChart(song);
};

//Creating the scatter polar chart
function scatterpolarChart(song) {
//assign the metadata to a variable
      let songData = taylorData.metadata

        //filter the data based on the song name from the dropdown
        let songName = songData.filter((name) => name.name == song)
        //access the first case in the data
        let result = songName[0];
        //assign features of the song to variables
        let ac = result.acousticness
        let d = result.danceability
        let e = result.energy
        let ins = result.instrumentalness
        let li = result.liveness
        let sp = result.speechiness
        let v = result.valence

        //create the trace data
        let chartData = [{
            type: 'scatterpolar',
            r: [ac, d, e, ins, li, sp, v],
            theta: ['Acousticness','Danceability','Energy', 'Instrumentalness', 'Liveness', 'Speechiness', 'Valence','Acousticness'],
            fill: 'toself'
        }]
        //set the layout
        let layout = {
            margin: {autoexpand: true},
            polar: {
            radialaxis: {
                visible: true,
                range: [0, 1]
            }
            },
            showlegend: false
        }
        //plot the chart
        Plotly.newPlot("scatterpolar", chartData, layout); 
};

//create the bullet chart that shows the popularity rating
function bulletChart(song) {
    //assign the metadata to a variable
    let songData = taylorData.metadata

    //filter the data based on the song name from the dropdown
    let songName = songData.filter((name) => name.name == song)
    //access the first case in the data
    let result = songName[0];
    //set the song popularity to a variable
    let popularity = result.popularity

    // set the trace data
    var data = [
        {
            type: "indicator",
            mode: "number+gauge+delta",
            value: popularity,
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
    var layout = {width: 600, height: 250, title: "<b>Song Popularity</b>"};
    var config = { responsive: true };

    Plotly.newPlot('bullet', data, layout, config);
};

//maket the demochart
function demoChart(song) {
    //assign the metadata to a variable 
      let songData = taylorData.metadata

        //filter the data based on the id numer from the droptdown
        let songName = songData.filter((name) => name.name == song)
        //access the first case in the data
        let result = songName[0];

        //clear any existing data
        d3.select("#song-info").html("");

        //assign the demo box of the page to a variable
        let demotable = d3.select("#song-info")
        //add each piece of information
        demotable.append("h6").text(`Album Name: ${result.album}`)
        demotable.append("h6").text(`Track Number: ${result.track_number}`)
        demotable.append("h6").text(`Release Date: ${result.release_date}`); 
};

//Initiate all charts and data on the page
init();
