//Instantiating
var view = new Backbone.View()
var View = new Backbone.View.extend({}) //custom
//passinf a model (to pass data)
var view = new View({
  model: myModelObject
})

//el & $el
// el contained the DOM element
//$el is a jQuery object - wrapper around el

var v = new Backbone.View({el: 'body'})
v.el // <body></body>
v.$el // [<body></body>]

//this.$ is the jQuery scoped to the current view
this.$('selector') is the same as
this.$el.find(‘selector’)

// Combining views and models
Pass the model to the view’s constructor

var v = new View({
model: myModel
});

Bind the view’s render method

myModel.on('change', function () {
$('body').append(v.render().el);
});

//events

var FormView = Backbone.View.extend({
  events: {
    'click .clickable': 'handleClick',
    'change': function () {
      console.log('handleChange')
    }
  },
  render: function () {
    this.$el.html('<input type="text" class="clickable" placeholder="clickable"/><input type="text" />');
    return this;
  },
  handleClick: function () {
    console.log('handleClick')
  }
})
