<div class="q-questions">
  <div class="q-main">
    <h5 class="q-question"><%= question %></h5>
    <ul class="q-options">
      <% _.each(options, function(value, key){ %>
        <li class="q-option<% if(key == answer) print(' q-correct') %>">
          <span class="q-value" data-key="<%= key %>"><%= value %></span>
        </li>
      <% }) %>
    </ul>
  </div>
  <% if(imgsrc !== '' || answerDetails !== '') { %>
    <div class="q-meta">
      <% if(imgsrc !== '') { %>
        <img src="<%= imgsrc %>" <%= hidePhoto ? 'style="opacity:0;"' : ''%>>
      <% } %>
      <% if(articleUrl !== '' || answerDetails !== '') { %>
        <div class="q-answer-details">
          <%= answerDetails %>
          <% if(articleUrl !== '') { %>
          <a target="_blank" href="<%= articleUrl %>">Read more</a>
          <% } %>
        </div>
      <% } %>
    </div>
  <% } %>
</div>
