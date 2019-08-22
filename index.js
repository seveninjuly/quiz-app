'use strict'

const STORE = [
  {
      question: 'Which is a wide angle lens?',
  choice: [
          '70-200mm',
          '50mm',
          '135mm',
          '16-35mm'
      ],
    correctAnswer: 3,
  },
  {
      question: `What's the sensor's size of a full-frame camera ?`,
  choice: [
          '36x24mm',
          '22x15mm',
          '32x15mm',
          '16x36mm'
      ],
    correctAnswer: 0,
  },
  {
      question: 'Which is a standard lens for a full-frame camera?',
  choice: [
          '24mm',
          '35mm',
          '50mm',
          '85mm'
      ],
    correctAnswer: 2,
  },
  {
      question: 'Which is the largest fstop?',
  choice: [
          '2.8',
          '1.2',
          '7.0',
          '11.0'
      ],
    correctAnswer: 1,
  },
  {
      question: 'What is ISO?',
  choice: [
          'Aperture',
          'Exposure',
          'Isometric sound option',
          'Shutter speed'
      ],
    correctAnswer: 2,
  },
  {
      question: 'Where does "the decisive moment" come from?',
  choice: [
          'Annie Leibovitz',
          'Robert Capa',
          'Don McCullin',
          'Henri Cartier-Bresson'
      ],
    correctAnswer: 3,
  },
  {
      question: 'Which is the fastest shutter speed?',
  choice: [
          '1/60',
          '1/1000',
          '1/125',
          '1/8'
      ],
    correctAnswer: 1,
  },
  {
      question: 'The balancing of light within a photograph is known as:',
  choice: [
          'White balance',
          'The aperture',
          'The exposure',
          'The shutter speed'
      ],
    correctAnswer: 0,
  },
  {
      question: 'What does TV mode stand for?',
  choice: [
          'Shutter priority',
          'Aperture priority',
          'ISO priority',
          'none of the above'
      ],
    correctAnswer: 0,
  },
  {
      question: 'When we use the rule of thirds, how do we break the image?',
  choice: [
          'Horizontally',
          'Vertically',
          'Horizontally and vertically',
          'According to the golden ratio'
      ],
    correctAnswer: 2,
  },
]

let current = 0;
let score = 0;

function initQuiz (){
current = 0;
score = 0;
$('#counter').text(0);
$('#score').text(0);
$('.questionNumber').text(STORE.length);

$('#startText').show();
$('#finalScore').hide();
$('#js-button-start').show();
$('#js-button-start').text('Go!');

$('.hidden').hide();
$('#js-button-submit').text('SUBMIT');
}

function handleStartButton() {
$('#js-button-start').on('click', function() {
  if(current === STORE.length) {					
          $('.hidden').hide();
          $('#finalScore').show();
          $('#finalScore').html(`Your score is ${score}.`);
          $('#js-button-start').hide();
          $('#js-button-submit').show();
          $('#js-button-submit').text('RESTART');
          current++;
  }
  else {
    $('.hidden').show();
    $('#startText').hide();		
    $('#js-button-start').text('NEXT');
    $('#js-button-start').hide();
    $('#js-answer-feedback').hide();	
    displayQuestion(current); 
    } 
 });
}

function handleSubmitButton() {
$('#js-button-submit').on('click', function() {
  if (current > STORE.length) {
    initQuiz();
  }
  else {
    $('#js-button-submit').hide();
    $('#js-button-start').show();
    $('.option').hide();
    answerFeedback(current);
    current++;
  }
});
}

function displayQuestion(questionIndex) { 
    $('#counter').text(questionIndex + 1);
    let currentQuestion = STORE[questionIndex];
    $('#questionContent').text(currentQuestion.question);
    let choice = currentQuestion.choice;
    for(let i = 0; i < choice.length; i++) {	
      $('#choice'+i).html(choice[i]);
      $('#option'+i).show();
    }
    $('#js-answer-feedback').hide();
    //$('input').show();
  }

function answerFeedback(questionIndex) {
    let currentQuestion = STORE[questionIndex];
    let selected = $('input:checked');
    let answer = parseInt(selected.data('answer-index'));
    let correctAnswer = currentQuestion.correctAnswer;
    
    if(answer === correctAnswer) {
      $('#js-answer-feedback').text(`You're right!`);
      score++;
      $('#score').text(score);
    }
    else{
      $('#js-answer-feedback').text(`Nope! The correct answer is ${currentQuestion.choice[currentQuestion.correctAnswer]}.`)
    }		
    //$('input').hide();   			
    $('#js-answer-feedback').show();
  }
  
function quiz() { 
initQuiz();
handleStartButton();
handleSubmitButton();
}

quiz();