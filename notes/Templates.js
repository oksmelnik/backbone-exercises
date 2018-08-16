//Client-side templating
- Dynamically build markup from a template and some data
- All but the simplest UI elements will require
templating
- Templating happens in the view’s render method
 There are three valid types of code blocks:
 <% ... %>

Execute arbitrary code
 <%= ... %>

Evaluate an expression and render the result inline
 <%- ...%>

Evaluate an expression and render the html escaped
result inline

var template = _.template("<%= lat %> <%= lon %>")(data);

//Pre-compiling templates

Compiling a template == converting to a function
var source = ‘<p>Latitude: <%= lat %></p>’;
var compiled = _.template(source);
