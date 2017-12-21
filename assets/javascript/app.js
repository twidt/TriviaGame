/* What I'm attempting to do because I suck at this :D
Set variables
Show Questions/with answers
Start the game ???
Sumbit or Time runs out
Check Answers ???
Show Results
*/

// hides end game text & button (I saw this on google somewhere)
$(document).ready(function(){
	$(".endGame").hide();
	$("#submitResult").hide();

var correctAnswers = 0;
var incorrectAnswers =0;
var timer ;

var	questions= [
	{question:"What type of Queen is Marciline?",
	answers:["Ice Queen", "Clown Queen", "Bubblegum Queen", "Vampire Queen"],
	correctAnswer: "Vampire Queen"},

	{question:"What is the name of the royal city?",
	answers:["Goo", "Poo", "Ooo", "Chicago"],
	correctAnswer: "Ooo"}, 

	{question:"What language does Rainicorn and Jake speak?",
	answers: ["English", "French", "Korean", "Spanish"],
	correctAnswer: "Korean"},

	{question: "Who delivered the royal tarts to the party?",
	answers:["Finn", "Jake", "Marciline", "The Royal Tart tooter", "Princess Bubblegum"],
	correctAnswer: "Princess Bubblegum"},

	{question: "Who is the only candy Princess Bubblegum regrets making?",
	answers: ["Lemongrab", "Peppermint Buttler", "Gumdrop kids", "Candy Cane King"],
	correctAnswer: "Lemongrab"} 
];	
 
var startGame = {

	viewQuestions: function() {

		for (var i=0; i < questions.length; i++) {
			var question = $("<div id='q"+ i + "' class='spacing'>");
			question.html(questions[i].question);
			question.attr("questions-id", i);
			$('#question').append(question);

			for (ctr = 0; ctr < questions[i].answers.length; ctr++) {
    		var answers = questions[i].answers[ctr];
    		console.log(answers);
    		$('#question').append('<input type="radio" name="question' + '-' + i + '" value="'+ questions[i].answers[ctr] + '"> '+ questions[i].answers[ctr] );
       		};
    	};
	},

	checkAnswers: function () {
		console.log("checking the answers");
		for (var i=0; i < questions.length; i++) {
			var userAnswers = $("input[name='question-" + i +"']:checked");
			if (userAnswers.val() == questions[i].correctAnswer) {
				correctAnswers++;
			} else {
				incorrectAnswers++;
			}
		} 
			startGame.results();
	},


	results: function(){
		clearInterval(timer);	
		$("#question").hide();
		$("#submitResult").hide();
		$("#startClock").hide();
		$(".timeLeft").hide();
		$(".endGame").show();
		$('#correctGuesses').append(correctAnswers);
	},



	startTimer: function(){
	  var counter = 60;
	  timer= setInterval(function() {
	    counter--;
	    if (counter >= 0) {
	      span = document.getElementById("count");
	      span.innerHTML = counter;
	    }
	    if (counter === 0) {
	        alert('Time is Up!');
	        startGame.results();
	        clearInterval(timer);

	    }
	  }, 1000);
	},

};

$("#startClock").click(function(){
    startGame.startTimer();
    startGame.viewQuestions();
    $("#startClock").hide();
    $("#submitResult").show();
 });

$("#submitResult").click(function(){
    startGame.checkAnswers();
 });


});

 

//HAVE NO CLUE WHAT I AM DOING :D

