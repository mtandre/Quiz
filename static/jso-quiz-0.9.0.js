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

    if (currentQuestion === (questions.length - 1)) {
      results.style.color = '#2F2F2F';
      results.addEventListener('click', function(){
        showResults();
      });
    } else {
      results.style.color = 'azure';
    }

    //mark answers
    if (parent.className.indexOf('answered') === -1) {
      parent.className += ' answered';
      if (el.className.indexOf('correct') === -1) {
        el.className += ' incorrect';
      } else {
        correct++;
      }
    }
  }

  // include stylesheet
  function includeStyles(){
    var styles = document.createElement('link')
    styles.type = 'text/css'
    styles.rel = 'stylesheet'
    styles.href = 'http://graphics.jsonline.com/jsi_news/javascripts/quiz/jso-quiz.css';
    document.head.appendChild(styles);
  }

  //generate and show results screen
  function showResults() {
    var facebook = '<a href="https://www.facebook.com/sharer/sharer.php?u=' + window.location.origin + window.location.pathname + '?qs=fb&title=I+scored+' + correct + '/' + questions.length + '+on+the+JSOnline.com+News+Quiz."><button class="quiz-button shareBtn facebook">facebook</button></a>';
    var twitter = '<a href="http://twitter.com/share?url=' + window.location.origin + window.location.pathname + '?qs=fb&text=I+scored+' + correct + '/' + questions.length + '+on+the+JSOnline.com+News+Quiz."><button class="quiz-button twitter">Twitter</button></a>';
    var score = '<div class="quiz-overlay"></div><div class="results-overlay"><p>You got ' + correct + ' of ' + questions.length + ' questions correct.<br><span>Share and challenge your friends</span></p><div class="quiz-share">' + facebook + twitter + '</div><button id="quiz-close" class="quiz-button">Back to quiz</button></div>';
    var wrap = document.createElement('div');
    wrap.innerHTML = score;
    var cores = wrap.childNodes;
    quiz.appendChild(cores[0]);
    quiz.appendChild(cores[0]);
    var close = document.getElementById('quiz-close');
    var overlay = document.getElementsByClassName('quiz-overlay')[0];
    var share = document.getElementsByClassName('results-overlay')[0];
    close.addEventListener('click', function(){
      var removed1 = share.parentNode.removeChild(share);
      var removed2 = overlay.parentNode.removeChild(overlay);
    });
  }

  try {
    if(quizData.constructor !== Array) throw 're-export quiz data';
    if(!_.VERSION) throw 'requires underscorejs';

    includeStyles();

    var quizID = pageId;
    var quiz = document.getElementById('quiz');
    var correct = 0;

    // render questions
    _.each(quizData, function(question){
      quiz.innerHTML = quiz.innerHTML + JST.generateQuestion(question);
    });

    //question state
    var questions = document.getElementsByClassName('questions');
    var currentQuestion = 0;

    //prev/next btns
    quiz.innerHTML = quiz.innerHTML + '<div class="quiz-footer"><button id="next-question" class="quiz-button">Next question</button><button id="quiz-results" class="quiz-button">Results</button><div class="progress"><span id="number">1</span>of<span id="total">10</span></div><button id="previous-question" class="quiz-button">Previous question</button></div>';
    var next = document.getElementById('next-question');
    var prev = document.getElementById('previous-question');
    var results = document.getElementById('quiz-results');

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
        results.style.display = 'block';
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
        results.style.display = 'none';
      } else if (currentQuestion === (questions.length - 1)) {
        prev.style.display = 'block';
        next.style.display = 'none';
        results.style.display = 'none';
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
//
// pre-compiled questions template
//
this["JST"] = this["JST"] || {};
this["JST"]["generateQuestion"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="questions">\n  <div class="main">\n    <h5 class="question">' +
((__t = ( question )) == null ? '' : __t) +
'</h5>\n    <ul class="options">\n      ';
 _.each(options, function(value, key){ ;
__p += '\n        <li class="option';
 if(key == answer) print(' correct') ;
__p += '">\n          <span class="value" data-key="' +
((__t = ( key )) == null ? '' : __t) +
'">' +
((__t = ( value )) == null ? '' : __t) +
'</span>\n        </li>\n      ';
 }) ;
__p += '\n    </ul>\n  </div>\n  ';
 if(imgsrc !== '') { ;
__p += '\n    <div class="meta">\n      ';
 if(imgsrc !== '') { ;
__p += '\n        <img src="' +
((__t = ( imgsrc )) == null ? '' : __t) +
'" ' +
((__t = ( hidePhoto ? 'style="opacity:0;"' : '')) == null ? '' : __t) +
'>\n      ';
 } ;
__p += '\n      ';
 if(articleUrl !== '') { ;
__p += '\n        <div class="answer-details">\n          ' +
((__t = ( answerDetails )) == null ? '' : __t) +
'\n          <a target="_blank" href="' +
((__t = ( articleUrl )) == null ? '' : __t) +
'">Read more</a>\n        </div>\n      ';
 } ;
__p += '\n    </div>\n  ';
 } ;
__p += '\n</div>\n';

}
return __p
};
