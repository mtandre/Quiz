var questionsArray = [];
var temp1 = {
  question: "Which Milwaukee Brewer injured his hamstring this week?",
  options: {
    0: "Ryan Braun",
    1: "Jonathan Lucroy",
    2: "Rob Deer",
    3: "Hank the dog"
  },
  answer: 1,
  cid: "291522811",
  answerDetails: "The Milwaukee Brewers didn't make it to spring training before suffering their first injury of 2015. The team announced Wednesday morning that catcher Jonathan Lucroy, one of the key players on the club, is expected to be sidelined four to six...",
  //imgsrc: "http://media.jsonline.com/images/38106706-mjs_477588083hh00007_milwaukee_.jpg",
  imgsrc: '',
  hidePhoto: false,
  articleUrl: "http://www.jsonline.com/blogs/sports/291522811.html"
};
var temp2 = {
  question: "To which country did Gov. Scott Walker travel this week?",
  options: {
    0: "South Africa",
    1: "Canada",
    2: "UK",
    3: "German"
  },
  answer: 2,
  cid: "291532721",
  answerDetails: "In a speech short on policy and long on restraint, Wisconsin Gov. Scott Walker addressed Great Britain's most prominent think tank Wednesday, avoiding questions on foreign affairs and evolution while emphasizing the \"special...",
  imgsrc: "http://media.jsonline.com/images/b99443152z.1_20150211214203_000_gd19tv6a.1-1.jpg",
  hidePhoto: false,
  articleUrl: "http://www.jsonline.com/news/statepolitics/walker-addresses-london-think-tank-wednesday-on-global-trade-b99443152z1-291532721.html"
};
var temp3 = {
  question: "How much does Scott Walker's budget propose cutting from the UW System budget?",
  options: {
    0: "$10 million",
    1: "$30 million",
    2: "$300 million",
    3: "$200 million"
  },
  answer: 2,
  cid: "291151751",
  answerDetails: "Chancellors in the University of Wisconsin System are harnessing the power of the Internet to rally their campuses, alumni and parents of students for what could be a long battle over proposed state budget cuts. While protests and petition drives...",
  imgsrc: "http://media.jsonline.com/images/b99440543z.1_20150207205511_000_g939s22g.1-0.jpg",
  hidePhoto: false,
  articleUrl: "http://www.jsonline.com/news/education/uw-chancellors-take-to-social-media-push-alumni-to-lobby-lawmakers-b99440543z1-291151751.html"
};
var temp4 = {
  question: "The CEO of this company did NOT announce his retirement this week.",
  options: {
    0: "Culvers",
    1: "Harley Davidson",
    2: "BMO Harris",
    3: "Miller Coors"
  },
  answer: 2,
  cid: "",
  answerDetails: "",
  imgsrc: "",
  articleUrl: ""
};
var temp5 = {
  question: "The mission statement for UW-Madison is commonly called The Wisconsin Idea",
  options: {
    0: "True",
    1: "False"
  },
  answer: 0,
  cid: "290797681",
  answerDetails: "Stunned educators accused Gov. Scott Walker on Wednesday of trying to kill the Wisconsin Idea, which has guided the mission of the state's public higher education system for more than a century. And although the governor backed away from his...",
  imgsrc: "http://media.jsonline.com/images/b99439020z.1_20150204201454_000_gcq9qvkm.1-0.jpg",
  hidePhoto: false,
  articleUrl: "http://www.jsonline.com/news/education/scott-walkers-uw-mission-rewrite-could-end-the-wisconsin-idea-b99439020z1-290797681.html"
};
var temp6 = {
  question: "The Milwaukee Common Council gave the OK to?",
  options: {
    0: "Free beer Fridays",
    1: "a streetcar",
    2: "plans for a new arena",
    3: "A bridge connecting the 3rd Ward and Brady St."
  },
  answer: 1,
  cid: "291390051",
  answerDetails: "A streetcar connecting the Milwaukee Intermodal Station with the city's lower east side was approved by the Common Council on Tuesday, bringing if not to a halt then at least to a pause, decades of sometimes acrimonious debate. \"It has taken...",
  imgsrc: "http://media.jsonline.com/images/b99441994z.1_20150210174802_000_gjq9t6s8.1-1.jpg",
  hidePhoto: true,
  articleUrl: "http://www.jsonline.com/news/milwaukee/milwaukee-council-set-to-vote-on-approve-streecar-plan-b99441994z1-291390051.html"
};
var temp7 = {
  question: "Which anchor is leaving their post?",
  options: {
    0: "John Stewert",
    1: "Mike Gousha",
    2: "Wolf Blitzer",
    3: "Brian Gotter"
  },
  answer: 0,
  cid: "291461821",
  answerDetails: "LOS ANGELES (AP) - Jon Stewart, who turned his combination of biting and free-wheeling humor into an unlikely source of news and analysis for viewers of \"The Daily Show,\" said he's leaving as host this year. His departure was announced by Comedy...",
  imgsrc: "http://media.jsonline.com/images/910fdbc6c263c8066d0f6a706700a2e9.jpg",
  hidePhoto: true,
  articleUrl: "http://www.jsonline.com/news/usandworld/national/comedy-central-says-jon-stewart-leaving-the-daily-showb8d8ec357be049f3b74d3ecd98e8db56-291461821.html"
};
var temp8 = {
  question: "Which Wisconsin ski hill is planning a $50 million expansion?",
  options: {
    0: "Little Swiss",
    1: "Cascade Mountain",
    2: "Granite Peak",
    3: "Sunburst"
  },
  answer: 2,
  cid: "291337701",
  answerDetails: "A $50 million expansion at Wisconsin's largest ski area would support hundreds of jobs and boost tourism, its backers say, but faces close scrutiny by environmental regulators who say it's not a done deal. Charles Skinner Jr., owner and president...",
  imgsrc: "http://media.jsonline.com/images/b99439726z.1_20150209220906_000_g5o9sub5.1-1.jpg",
  hidePhoto: false,
  articleUrl: "http://www.jsonline.com/business/granite-peak-ski-hill-expansion-isnt-set-in-stone-yet-b99439726z1-291337701.html"
};
var temp9 = {
  question: "How many elections has Scott Walker been in in the last 25 years?",
  options: {
    0: "25",
    1: "13",
    2: "7",
    3: "15"
  },
  answer: 1,
  cid: "291160271",
  answerDetails: "Gov. Scott Walker's election history isn't like anyone else's in the emerging field of Republican presidential candidates. If he runs, it will be his 14th campaign in 25 years, and his eighth campaign in 13 years. He is the...",
  imgsrc: "http://media.jsonline.com/images/b99439710z.1_20150205190139_000_grq9r80i.1-1.jpg",
  hidePhoto: false,
  articleUrl: "http://www.jsonline.com/blogs/news/291160271.html"
};
var temp10 = {
  question: "Which local institution holds an annual Food & Frost Fest?",
  options: {
    0: "Milwaukee Art Museum",
    1: "Milwaukee County Zoo",
    2: "The Domes",
    3: "Milwaukee Public Museum"
  },
  answer: 3,
  cid: "291467491",
  answerDetails: "Drinking in the Milwaukee Public Museum sounds decadent. But it can be done. The annual Food &amp;amp; Froth Fest encourages it. More than 200 beers from 70 breweries will be served alongside cuisine from local restaurants and caterers. Sip a Bacon...",
  imgsrc: "http://media.jsonline.com/images/b99440483z.1_20150210190013_000_gen9tddg.1-1.jpg",
  hidePhoto: false,
  articleUrl: "http://www.jsonline.com/entertainment/beer/13-new-breweries-join-food--froth-fest-at-milwaukee-public-museum-b99440483z1-291467491.html"
};
questionsArray.push(temp1,temp2,temp3,temp4,temp5,temp6,temp7,temp8,temp9,temp10);
