$(document).ready(function() {

/*==========   MODEL   ==========*/

// Will contain data once controller.getQuote is called. Example shown within {}
quoteData = {
  // "quote": "Once you eliminate the impossible, whatever remains, no matter how improbable, must be the truth.",
  // "author": "Sherlock Holmes",
  // "category": "Famous",
};


/*==========   CONTROLLER   ==========*/
controller = {

	// initializes app
	init: function(){
		controller.getQuote();
		view.init();
	},

	// sets quoteData to be whatever info parameter is
	setQuoteData: function(info){
		quoteData = info;
	},

	// returns current quoteData
	getData: function(){
		return quoteData;
	},

	// makes ajax call
	getQuote: function(){
		$.ajax({
		    headers: {
		      "X-Mashape-Key": "",
		      "Content-Type": "application/x-www-form-urlencoded",
		      "Accept": "application/json"
		    },
			url: '',
			success: function(info){
				console.log("called");
				var data = JSON.parse(info);	
				controller.setQuoteData(data);
			}
		});
	}

}; // end of controller


/*==========   View   ==========*/
var view = {

	// runs when app initialized
	init: function(){
		view.renderQuote();
		view.setGenerateButton();
		view.setTweetButton();
	},

	// displays quote and author on screen, 
	// once called, will run after each ajax call
	renderQuote: function(){
		$(document).ajaxStop(function() {
			var data = controller.getData();
			$("#quote").html("<p>" + data.quote +"</p>");
			$("#author").html("<p>" + "-" + data.author + "</p>" );
			$("#randomQuote").animate({'opacity': 1}, 800);
		});
	},

	// creates click handler for button
	setGenerateButton: function(){
		$("#generate").on("click", function(){
			$("#randomQuote").animate({'opacity': 0}, 800, function(){
				controller.getQuote();
			});
		});
	},

	setTweetButton: function(){
		$("#tweet").on("click", function(){
			var text = $("#quote").text() + " " + " " + $("#author").text();
			text = encodeURI(text);
			window.open("https://twitter.com/intent/tweet?text=" + text + "&hashtags=randomQuote",'_blank');
		});
	}

};	// end of view


// initializes app
controller.init();
$(".buttons").animate(1000);
}); // end of $(document).ready