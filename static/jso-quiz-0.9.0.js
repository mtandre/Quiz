var createQuiz = function(quizData) {
  'use strict';  //browser >= ie9
  //store answers in localstorage
  function storeAnswer(num,ans) {
    var data = {};
    if (localStorage.getItem('answers-' + quizID)) {
      data = JSON.parse(localStorage.getItem('answers-' + quizID));
    }
    data[num] = ans;
    localStorage.setItem('answers-' + quizID,JSON.stringify(data));
  }

  //retrieve answers from localstorage
  function loadAnswer(num) {
    var data = {};
    if (localStorage.getItem('answers-' + quizID)) {
      data = JSON.parse(localStorage.getItem('answers-' + quizID));
      if(data[num]){
        return data[num];
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  //mark answer
  function markAnswers(el, review){
    //get element of question
    var el = el;
    var parent = el.parentElement;
    var photo =  parent.parentElement.parentElement.getElementsByTagName('img')[0];
    var more = parent.parentElement.parentElement.getElementsByClassName('answer-details')[0];

    //store answer
    if (!review) {
      var ans = el.getElementsByClassName('value')[0].getAttribute('data-key');
      storeAnswer(currentQuestion,ans);
    }
    //show answer details
    if (more) {
      if (photo && photo.style.opacity == 0) {
        photo.style.opacity = 1;
        more.style.opacity = 1;
      } else {
        more.style.opacity = 1;
      }
    }

    //enable next btn
    next.style.color = '#2F2F2F';

    //mark answers
    if (parent.className.indexOf('answered') === -1) {
      parent.className += ' answered';
      if (el.className.indexOf('correct') === -1) {
        el.className += ' incorrect';
      }
    }
  }

  function includeStyles(){
    var styles = document.createElement('link')
    styles.type = 'text/css'
    styles.rel = 'stylesheet'
    styles.href = 'jso-quiz.css';
    document.head.appendChild(styles);
  }

  try {
    if(quizData.constructor !== Array) throw 're-export quiz data';
    if(quizData <= 1) throw 'quiz must have more than 1 question';
    if(!_.VERSION) throw 'requires underscorejs';

    includeStyles();

    var quizID = pageId;
    var quiz = document.getElementById('quiz');

    // render questions
    var template = _.template(document.getElementById('questions-template').innerHTML);
    _.each(quizData, function(question){
      quiz.innerHTML = quiz.innerHTML + template(question);
    });

    //question state
    var questions = document.getElementsByClassName('questions');
    var currentQuestion = 0;

    //prev/next btns
    quiz.innerHTML = quiz.innerHTML + '<div class="quiz-footer"><button id="next-question" class="button">Next question</button><div class="progress"><span id="number">1</span>of<span id="total">10</span></div><button id="previous-question" class="button">Previous question</button></div>';
    var next = document.getElementById('next-question');
    var prev = document.getElementById('previous-question');

    //set progress
    document.getElementById('total').textContent = questions.length;
    document.getElementById('number').textContent = currentQuestion + 1;

    //show next button for first question
    next.style.display = 'block';

    //next question
    next.addEventListener('click', function(){
      questions[currentQuestion].style.display = "none";
      currentQuestion++;
      document.getElementById('number').textContent = currentQuestion + 1;
      next.style.color = '';
      questions[currentQuestion].style.display = 'block';

      //check for existing answer
      if(loadAnswer(currentQuestion)) {
        var opts = document.getElementsByClassName("options")[currentQuestion];
        var el;
        var ans = loadAnswer(currentQuestion);
        _.each(opts.getElementsByClassName("option"), function(opt) {
          var key = opt.getElementsByClassName('value')[0].getAttribute('data-key');
          if (key == ans) {
            el = opt;
          }
        });
        try {
          markAnswers(el, true);
        } catch (err) {
          console.log(err);
        }
      }

      //toggle prev/next btns
      if (currentQuestion === 0) {
        prev.style.display = 'none';
        next.style.display = 'block';
      } else if (currentQuestion > 0 && currentQuestion < (questions.length - 1)) {
        prev.style.display = 'block';
        next.style.display = 'block';
      } else if (currentQuestion === (questions.length - 1)) {
        prev.style.display = 'block';
        next.style.display = 'none';
      }
    });

    //prev question
    prev.addEventListener('click', function(){
      questions[currentQuestion].style.display = "none";
      currentQuestion--;
      document.getElementById('number').textContent = currentQuestion + 1;
      questions[currentQuestion].style.display = 'block';

      //check for existing answer
      if(loadAnswer(currentQuestion)) {
        var opts = document.getElementsByClassName("options")[currentQuestion];
        var el;
        var ans = loadAnswer(currentQuestion);
        _.each(opts.getElementsByClassName("option"), function(opt) {
          var key = opt.getElementsByClassName('value')[0].getAttribute('data-key');
          if (key == ans) {
            el = opt;
          }
        });
        try {
          markAnswers(el, true);
        } catch (err) {
          console.log(err);
        }
      }

      //toggle prev/next btns
      if (currentQuestion === 0) {
        prev.style.display = 'none';
        next.style.display = 'block';
      } else if (currentQuestion > 0 && currentQuestion < (questions.length - 1)) {
        prev.style.display = 'block';
        next.style.display = 'block';
      } else if (currentQuestion === (questions.length - 1)) {
        prev.style.display = 'block';
        next.style.display = 'none';
      }
    });

    // apply quiz functionality to each set of options
    var options = document.getElementsByClassName('option');
    _.each(options,function(option) {

      //add click event to each option
      option.addEventListener('click', function(){
        markAnswers(this,false);
      });
    });

    //display first question
    quiz.getElementsByClassName('questions')[0].style.display = 'block';

    if(loadAnswer(currentQuestion)) {
      var opts = document.getElementsByClassName("options")[currentQuestion];
      var el;
      var ans = loadAnswer(currentQuestion);
      _.each(opts.getElementsByClassName("option"), function(opt) {
        var key = opt.getElementsByClassName('value')[0].getAttribute('data-key');
        if (key == ans) {
          el = opt;
        }
      });
      try {
        markAnswers(el, true);
      } catch (err) {
        console.log('JSO Quiz error: ' + err);
      }
    }
  } catch (err) {
    console.log(err);
  }
};