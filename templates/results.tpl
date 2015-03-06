<div class="q-quiz-overlay"></div>
<div class="q-results-overlay">
  <p>
    <span>You got <%= correct %> of <%= total %> questions correct.</span>
    <br>
    <button id="q-quiz-close" class="q-quiz-button">Review quiz</button>
    <button id="q-quiz-reset" class="q-quiz-button">Retake quiz</button>
    <br>
    <span>Share and challenge your friends</span>
    <br>
    <a target="_blank" href="https://www.facebook.com/dialog/feed?display=popup&app_id=227386193957280&link=<%= url %>?qs=fb&picture=http://media.jrn.com/images/js-for-social-200-final.jpg&name=&description=I+scored+<%= correct %>/<%= total %>+on+the+JSOnline.com+News+Quiz.&redirect_uri=<%= url %>?qs=fb" onclick="if(typeof sendGAevents == 'function') {sendGAevents('JSO Quiz', 'Results - Facebook Share', '<%= correct %>');};"><button class="q-quiz-button q-shareBtn q-facebook">facebook</button></a>
    <a target="_blank" href="http://twitter.com/share?url=<%= url %>?qs=tw&text=I+scored+<%= correct %>/<%= total %>+on+the+JSOnline.com+News+Quiz" onclick="if(typeof sendGAevents == 'function') {sendGAevents('JSO Quiz', 'Results - Twitter Share', '<%= correct %>');};"><button class="q-quiz-button q-shareBtn q-twitter">Twitter</button></a>
    <a target="_blank" href="mailto:?body=I%20scored%20<%= correct %>/<%= total %>%20on%20the%20JSOnline.com%20News%20Quiz.%0D%0A<%= url %>?qs=em" onclick="if(typeof sendGAevents == 'function') {sendGAevents('JSO Quiz', 'Results - Email Share', '<%= correct %>');};"><button class="q-quiz-button q-shareBtn q-email">Email</button></a>
  </p>
</div>
