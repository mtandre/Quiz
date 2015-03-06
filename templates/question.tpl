<div class="q-questions">
  <div class="q-main">
    <h5 class="q-question"><%= question.question %></h5>
    <ul class="q-options">
      <% _.each(question.options, function(value, key){ %>
        <li class="q-option<% if(key == question.answer) print(' q-correct') %>">
          <span class="q-value" data-key="<%= key %>"><%= value %></span>
        </li>
      <% }) %>
    </ul>
  </div>
  <% if(question.imgsrc !== '' || question.answerDetails !== '') { %>
    <div class="q-meta">
      <% if(question.imgsrc !== '') { %>
        <img src='<%= question.imgsrc %>' <%= question.hidePhoto ? 'style="opacity:0;"' : ''%>>
      <% } %>
      <% if(question.articleUrl !== '' || question.answerDetails !== '') { %>
        <div class="q-answer-details">
          <%= question.answerDetails %>
          <% if(question.articleUrl !== '') { %>
          <a target="_blank" onclick="if(typeof sendGAevents == 'function') {sendGAevents('JSO Quiz', 'Read More', '<%= (index+1) %>');};" href='<%= question.articleUrl %>'>Read more</a>
          <% } %>
        </div>
      <% } %>
    </div>
  <% } %>
</div>
