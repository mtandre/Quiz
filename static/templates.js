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
