$(document).ready(function() {
	
	var score;
	var myScore;
	
	doIntro();
	startGame();
	previousQuestion();
	nextQuestion();
	submitScore();
	
});
/*-- fadeIn Main Screen --*/
	function doIntro() {
		$('.intro').fadeIn(3500);
	}

/*-- fadeIn Question1 --*/
	function startGame() {
		$('.begin').click(function() {
			$('.intro').fadeOut(2500);
			$('#q1').fadeIn(2500);
		});
	}
	
/*-- previousQuestion --*/
	function previousQuestion() {
		$('.question2 .left').click(function() {
			$('#q2').fadeOut(2500);
			$('#q1').fadeIn(2500);
		});
		$('.question3 .left').click(function() {
			$('#q3').fadeOut(2500);
			$('#q2').fadeIn(2500);
		});
		$('.question4 .left').click(function() {
			$('#q4').fadeOut(2500);
			$('#q3').fadeIn(2500);
		});
		$('.question5 .left').click(function() {
			$('#q5').fadeOut(2500);
			$('#q4').fadeIn(2500);
		});
		$('.question6 .left').click(function() {
			$('#q6').fadeOut(2500);
			$('#q5').fadeIn(2500);
		});
		$('.question7 .left').click(function() {
			$('#q7').fadeOut(2500);
			$('#q6').fadeIn(2500);
		});
		$('.question8 .left').click(function() {
			$('#q8').fadeOut(2500);
			$('#q7').fadeIn(2500);
		});
		$('.question9 .left').click(function() {
			$('#q9').fadeOut(2500);
			$('#q8').fadeIn(2500);
		});
		$('.question10 .left').click(function() {
			$('#q10').fadeOut(2500);
			$('#q9').fadeIn(2500);
		});
	}

/*-- nextQuestion --*/	
	function nextQuestion() {
		$('.question1 .right').click(function() {
			$('#q1').fadeOut(2500);
			$('#q2').fadeIn(2500);
		});
		$('.question2 .right').click(function() {
			$('#q2').fadeOut(2500);
			$('#q3').fadeIn(2500);
		});
		$('.question3 .right').click(function() {
			$('#q3').fadeOut(2500);
			$('#q4').fadeIn(2500);
		});
		$('.question4 .right').click(function() {
			$('#q4').fadeOut(2500);
			$('#q5').fadeIn(2500);
		});
		$('.question5 .right').click(function() {
			$('#q5').fadeOut(2500);
			$('#q6').fadeIn(2500);
		});
		$('.question6 .right').click(function() {
			$('#q6').fadeOut(2500);
			$('#q7').fadeIn(2500);
		});
		$('.question7 .right').click(function() {
			$('#q7').fadeOut(2500);
			$('#q8').fadeIn(2500);
		});
		$('.question8 .right').click(function() {
			$('#q8').fadeOut(2500);
			$('#q9').fadeIn(2500);
		});
		$('.question9 .right').click(function() {
			$('#q9').fadeOut(2500);
			$('#q10').fadeIn(2500);
		});
	}
	
/*-- submit score--*/
	
	function submitScore() {
		$('#submit').click(function() {
			score = [];
			//alert("click!");
			//alert($('input[name=guess1]:checked').val());
			score.push($('input[name=guess1]:checked').val());
			score.push($('input[name=guess2]:checked').val());
			score.push($('input[name=guess3]:checked').val());
			score.push($('input[name=guess4]:checked').val());
			score.push($('input[name=guess5]:checked').val());
			score.push($('input[name=guess6]:checked').val());
			score.push($('input[name=guess7]:checked').val());
			score.push($('input[name=guess8]:checked').val());
			score.push($('input[name=guess9]:checked').val());
			score.push($('input[name=guess10]:checked').val());
			console.log(score);
			myScore = 0;
			for (var i = 0; i < score.length; i++) {
					myScore += score[i] << 0;
			}
			//alert("Your Score Is: " + myScore);
			calculateScore();
						
		});
	}
	
	function calculateScore() {
		if (myScore == 0) {
			$('#q10').fadeOut(2500);
			$('.finish-sad').fadeIn(2500);
			response("Did you answer anything?");
			countScore(myScore);
		} else if (myScore <= 5) {
			$('#q10').fadeOut(2500);
			$('.finish-sad').fadeIn(2500);
			response("You really don't know too many guitarists.");
			countScore(myScore);
		} else if (myScore >= 6) {
			$('#q10').fadeOut(2500);
			$('.finish-excited').fadeIn(2500);
			response("You know quite a few famous guitarits!");
			countScore(myScore);
		} else if (myScore >= 9) {
			$('#q10').fadeOut(2500);
			$('.finish-excited').fadeIn(2500);
			response("Wow you really know your guitarists!");
			countScore(myScore);
		}
	}
	
	/*-- response --*/
	function response(response) {
		$('.response').text(response);
	}
	
	/*-- count score--*/
	function countScore(count) {
		$('.count').text(count);
	}
		