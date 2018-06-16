console.log('connected');
var searchInput = $("#search");
var recordCountInput = $("#numRecords");
var startInput = $("#startYear");
var endInput = $("#endYear");
var searchBtn = $("#search_button");
var clearBtn = $("#clearResults");
var ResultsDiv = $("#results");


function displayArticles(response) {
    
    console.log(response);
}
    

function makeCall() {
    var queryURL = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=apple&api-key=491ffd3e66c94f8ba2eaa87512012d3d'
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(displayArticles);
    }


searchBtn.on("click", makeCall);

