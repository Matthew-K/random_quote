$(document).ready(function() {

var getQuote = function(){
	$.ajax({
	    headers: {
	      "X-Mashape-Key": "rN5svBBLrXmshBjyfGqbrToUTAmMp1O6xFujsnuNkyvK1rG049",
	      "Content-Type": "application/x-www-form-urlencoded",
	      "Accept": "application/json"
	    },
		url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
		success: function(info){
			console.log(info);
		}
	});
};

$("#generate").on("click", function(){
	getQuote();
});

}); // end of document.ready