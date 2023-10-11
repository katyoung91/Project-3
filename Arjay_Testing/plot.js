// Fetch data from the JSON file
fetch('./taylor-json.json')
    .then(response => response.json())
    .then(songs => {
        // Get the popularity value of the first song
        const popularity = songs[0].popularity;

        // Create the bullet point chart
        var data = [
            {
                type: "indicator",
                mode: "number+gauge+delta",
                value: popularity,
                domain: { x: [0, 1], y: [0, 1] },
                title: { text: "<b>Popularity</b>" },
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

        var layout = { width: 600, height: 250 };
        var config = { responsive: true };

        Plotly.newPlot('myDiv', data, layout, config);
    });