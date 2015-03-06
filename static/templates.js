this["JST"] = this["JST"] || {};
this["JST"]["generateQuestion"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="q-questions">\n  <div class="q-main">\n    <h5 class="q-question">' +
((__t = ( question.question )) == null ? '' : __t) +
'</h5>\n    <ul class="q-options">\n      ';
 _.each(question.options, function(value, key){ ;
__p += '\n        <li class="q-option';
 if(key == question.answer) print(' q-correct') ;
__p += '">\n          <span class="q-value" data-key="' +
((__t = ( key )) == null ? '' : __t) +
'">' +
((__t = ( value )) == null ? '' : __t) +
'</span>\n        </li>\n      ';
 }) ;
__p += '\n    </ul>\n  </div>\n  ';
 if(question.imgsrc !== '' || question.answerDetails !== '') { ;
__p += '\n    <div class="q-meta">\n      ';
 if(question.imgsrc !== '') { ;
__p += '\n        <img src="' +
((__t = ( question.imgsrc )) == null ? '' : __t) +
'" ' +
((__t = ( question.hidePhoto ? 'style="opacity:0;"' : '')) == null ? '' : __t) +
'>\n      ';
 } ;
__p += '\n      ';
 if(question.articleUrl !== '' || question.answerDetails !== '') { ;
__p += '\n        <div class="q-answer-details">\n          ' +
((__t = ( question.answerDetails )) == null ? '' : __t) +
'\n          ';
 if(question.articleUrl !== '') { ;
__p += '\n          <a target="_blank" onclick="if(typeof sendGAevents == \'function\') {sendGAevents(\'JSO Quiz\', \'Read More\', \'' +
((__t = ( (index+1) )) == null ? '' : __t) +
'\');};" href="' +
((__t = ( question.articleUrl )) == null ? '' : __t) +
'">Read more</a>\n          ';
 } ;
__p += '\n        </div>\n      ';
 } ;
__p += '\n    </div>\n  ';
 } ;
__p += '\n</div>\n';

}
return __p
};
this["JST"]["generateFooter"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="q-quiz-footer">\n  <button id="q-next-question" class="q-quiz-button">Next question</button>\n  <button id="q-quiz-results" class="q-quiz-button">Results</button>\n  <div class="q-progress">\n    <span id="q-number">' +
((__t = ( first )) == null ? '' : __t) +
'</span>\n    of\n    <span id="q-total">' +
((__t = ( total )) == null ? '' : __t) +
'</span>\n  </div>\n  <button id="q-previous-question" class="q-quiz-button">Previous question</button>\n</div>\n';

}
return __p
};
this["JST"]["generateResults"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="q-quiz-overlay"></div>\n<div class="q-results-overlay">\n  <p>\n    <span>You got ' +
((__t = ( correct )) == null ? '' : __t) +
' of ' +
((__t = ( total )) == null ? '' : __t) +
' questions correct.</span>\n    <br>\n    <button id="q-quiz-close" class="q-quiz-button">Review quiz</button>\n    <button id="q-quiz-reset" class="q-quiz-button">Retake quiz</button>\n    <br>\n    <span>Share and challenge your friends</span>\n    <br>\n    <a href="https://www.facebook.com/dialog/feed?display=popup&app_id=227386193957280&link=' +
((__t = ( url )) == null ? '' : __t) +
'?qs=fb&picture=http://media.jrn.com/images/js-for-social-200-final.jpg&name=&description=I+scored+' +
((__t = ( correct )) == null ? '' : __t) +
'/' +
((__t = ( total )) == null ? '' : __t) +
'+on+the+JSOnline.com+News+Quiz.&redirect_uri=' +
((__t = ( url )) == null ? '' : __t) +
'?qs=fb" onclick="if(typeof sendGAevents == \'function\') {sendGAevents(\'JSO Quiz\', \'Results - Facebook Share\', \'' +
((__t = ( correct )) == null ? '' : __t) +
'\');};"><button class="q-quiz-button q-shareBtn q-facebook">facebook</button></a>\n    <a href="http://twitter.com/share?url=' +
((__t = ( url )) == null ? '' : __t) +
'?qs=tw&text=I+scored+' +
((__t = ( correct )) == null ? '' : __t) +
'/' +
((__t = ( total )) == null ? '' : __t) +
'+on+the+JSOnline.com+News+Quiz" onclick="if(typeof sendGAevents == \'function\') {sendGAevents(\'JSO Quiz\', \'Results - Twitter Share\', \'' +
((__t = ( correct )) == null ? '' : __t) +
'\');};"><button class="q-quiz-button q-shareBtn q-twitter">Twitter</button></a>\n    <a href="mailto:?body=I%20scored%20' +
((__t = ( correct )) == null ? '' : __t) +
'/' +
((__t = ( total )) == null ? '' : __t) +
'%20on%20the%20JSOnline.com%20News%20Quiz.%0D%0A' +
((__t = ( url )) == null ? '' : __t) +
'?qs=em" onclick="if(typeof sendGAevents == \'function\') {sendGAevents(\'JSO Quiz\', \'Results - Email Share\', \'' +
((__t = ( correct )) == null ? '' : __t) +
'\');};"><button class="q-quiz-button q-shareBtn q-email">Email</button></a>\n  </p>\n</div>\n';

}
return __p
};
