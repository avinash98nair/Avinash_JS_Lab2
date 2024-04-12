function Question(questionId, questionText){
  this.questionId = questionId;
  this.questionText = questionText;
}

const question1 = new Question(1,'Which class has the largest number of animals?');
const question2 = new Question(2,'Which group does not contain polyp?');
const question3 = new Question(3,'Salamander belongs to the class');
const question4 = new Question(4,'Flame cells are the excretory structures for');
const question5 = new Question(5,'The canal system in sponges develops due to');

function CorrectAnswer(correctAnswer){
  this.correctAnswer = correctAnswer;
}
const correctAnswer1 = new CorrectAnswer('insects');
const correctAnswer2 = new CorrectAnswer('Calcarea');
const correctAnswer3 = new CorrectAnswer('Amphibian');
const correctAnswer4 = new CorrectAnswer('Platyhelminthes');
const correctAnswer5 = new CorrectAnswer('Folding of inner walls');

const answerOptions1 = ['Fishes','Reptiles','Insects','Mammals'];
const answerOptions2 = ['Anthozoa','Hydrozoa','Scyphozoa','Calcarea'];
const answerOptions3 = ['Pisces','Aves','Reptiles','Amphibian'];
const answerOptions4 = ['Annelida','Coelenterates','Platyhelminthes','Echinodermata'];
const answerOptions5 = ['Porous walls','Gastrovascular system','Reproduction','Folding of inner walls'];

function QACombination(question, correctAnswer, answerOptions){
  this.question = question;
  this.correctAnswer = correctAnswer;
  this.answerOptions = answerOptions;
}

function verifyUserAnswerFromQACombinations(qaCombination){
  this.qaCombination = qaCombination;
  this.verifyUserAnswer(userSuppliedAnswer) = function(){
    if(userSuppliedAnswer == qaCombination.CorrectAnswer){
      return true;
    }
    else{
      return false;
    }
  }
}


const qaCombination1 = new QACombination(question1, correctAnswer1, answerOptions1);
const qaCombination2 = new QACombination(question2, correctAnswer2, answerOptions2);
const qaCombination3 = new QACombination(question3, correctAnswer3, answerOptions3);
const qaCombination4 = new QACombination(question4, correctAnswer4, answerOptions4);
const qaCombination5 = new QACombination(question5, correctAnswer5, answerOptions5);

function QuizApp(qaCombinations){
  this.qaCombinations = qaCombinations;

  this.pageIndex = 0;
  this.score = 0;
  this.getScore = function(){
    return this.score;
  }
  this.incrementScore = function(){
    ++this.score;
  }
  this.calculateScorePercentage = function(){
    const totalNoOfQuestions = qaCombinations.length;
    const scorePercentage = (this.getScore()/totalNoOfQuestions)*100;
    return scorePercentage;
  }
  this.isLastQACombination = function(){
    const totalNoOfQuestions = qaCombinations.length;
    if(this.pageIndex == totalNoOfQuestions-1){
      return true;
    }
    else{
      return false;
    }
  }
  this.updateFooter = function(){
    const progressElement = document.getElementById('progress');
    const qaCombination = qaCombinations[this.pageIndex];
    const questionId = qaCombination.Question.questionId;
    const totalNoOfQuestions = qaCombinations.length;
    const content = `Question ${questionId} of ${totalNoOfQuestions}`;
    progressElement.innerHTML = content;
  }

  this.addListeners = function(){
    for(let index=0; index<4; index++){
      const buttonId = 'btn' + index;
      const buttonObj = document.getElementById(buttonId);
      buttonObj.onclick = function(event){
        const target = event.currentTarget;
        console.log('Target is ' + JSON.stringify(target));
      }
    }
  }

  this.displayQuizPage = function(){
    this.displayQACombinationSelection();
    this.displayFooter();
  }

  this.displayQACombinationSelection = function(){
    const qaCombination = this.qaCombinations[this.pageIndex];
    const questionHtmlElement = document.getElementById('question');
    questionHtmlElement.innerHTML = qaCombination.question.questionText;
    for(let index=0; index<4; index++){
      const answerOptionValue = qaCombination.answerOptions[index];
      const answerOptionId = 'choice' + index;
      const answerOptionHtmlElement = document.getElementById('answerOptionId');
      answerOptionHtmlElement.innerHTML = answerOptionValue;
    }
  }

  this.displayFooter = function(){

  }

  this.load = function(){
    this.addListeners();
    this.displayQuizPage();
  }
}

const quizApp = new QuizApp([qaCombination1,qaCombination2,qaCombination3,qaCombination4,qaCombination5]);
quizApp.load();
/*this.verifyUserAnswer = function(userSuppliedAnswer){
  if(userSuppliedAnswer == correctAnswer){
    return true;
  }
  else{
    return false;
  }
}*/
index = 0;
const answerOptionValue = qaCombination.answerOptions[index];
console.log(answerOptionValue)