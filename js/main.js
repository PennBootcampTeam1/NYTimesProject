console.log('connected');
var searchInput = $("search");
var recordCountInput = $("numRecords");
var startInput = $("startYear");
var endInput = $("endYear");
var searchBtn = $("search_button");
var clearBtn = $("clearResults");
var ResultsDiv = $("results");
var apiKey = 'd9e270cb22be4bbb948370c965cb462d';
var queryUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=';
var paramSort = '?sort=newest';
var paramHighlight = '?hl=true';
var paramPagination = '?page=20';


function getSearch()


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
