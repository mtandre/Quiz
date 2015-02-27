this["JST"] = this["JST"] || {};

this["JST"]["static/questions-template.tpl"] = function(obj) {
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