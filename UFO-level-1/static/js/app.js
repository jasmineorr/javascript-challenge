// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

// Use `Object.entries` to console.log each date report value
data.forEach(function(dateReport) {
    console.log(dateReport);
    var row = tbody.append("tr");
  
    Object.entries(dateReport).forEach(function([key, value]) {
      console.log(key, value);
    });
  });

// Use d3 to update each cell's text with date report values
function buildtable(data) {
    tbody.html("");
    data.forEach(function(dateReport) {
        console.log(dateReport);
        var row = tbody.append("tr");
        Object.entries(dateReport).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        // in the date report object
        var cell = row.append("td");
        cell.text(value);
        });
    });
}

// Function to filter through table date/time & display values matching input
function buttonclick() {
    d3.event.preventDefault();
    var inputselect = d3.select("#datetime").property("value");
    var filterbutton = d3.select("button");
    var filterdata = tableData;
    if(inputselect) {
        filterdata = filterdata.filter((row) => row.datetime === inputselect);
    }
    buildtable(filterdata);
    // alert('Its working');
};

// Tell page how to handle button click
d3.selectAll("#filter-btn").on("click", buttonclick);

// Display table data
buildtable(tableData);

