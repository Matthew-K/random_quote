$(document).ready(function() {

/*==========   MODEL   ==========*/

// Will contain data once controller.getQuote is called. Example shown within {}
quoteData = {
  // "quote": "Once you eliminate the impossible, whatever remains, no matter how improbable, must be the truth.",
  // "author": "Sherlock Holmes",
  // "category": "Famous",
  // "cat": ""
};



/*==========   CONTROLLER   ==========*/
controller = {

	init: function(){
		controller.getQuote();
		view.generate();
	},

	setQuoteData: function(info){
		quoteData = info;
	},

	currentData: quoteData,

	getQuote: function(){
		$.ajax({
		    headers: {
		      "X-Mashape-Key": "rN5svBBLrXmshBjyfGqbrToUTAmMp1O6xFujsnuNkyvK1rG049",
		      "Content-Type": "application/x-www-form-urlencoded",
		      "Accept": "application/json"
		    },
			url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
			success: function(info){
				console.log(info);
				controller.setQuoteData(info);
			}
		});
	}
};



/*==========   View   ==========*/

var view = {
	generate: function(){
		$("#generate").on("click", function(){
			controller.getQuote();
		});
	}	



};



controller.init();

}); // end of document.ready