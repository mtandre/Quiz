<div class="questions">
  <div class="main">
    <h5 class="question"><%= question %></h5>
    <ul class="options">
      <% _.each(options, function(value, key){ %>
        <li class="option<% if(key == answer) print(' correct') %>">
          <span class="value" data-key="<%= key %>"><%= value %></span>
        </li>
      <% }) %>
    </ul>
  </div>
  <% if(imgsrc !== '') { %>
    <div class="meta">
      <% if(imgsrc !== '') { %>
        <img src="<%= imgsrc %>" <%= hidePhoto ? 'style="opacity:0;"' : ''%>>
      <% } %>
      <% if(articleUrl !== '') { %>
        <div class="answer-details">
          <%= answerDetails %>
          <a target="_blank" href="<%= articleUrl %>">Read more</a>
        </div>
      <% } %>
    </div>
  <% } %>
</div>
