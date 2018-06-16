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
