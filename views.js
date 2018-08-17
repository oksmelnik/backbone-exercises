var RefreshingView = Backbone.View.extend({
    initialize: function () {
        this.model.on('change', function () {
            this.render();
        }, this);
    },
    render: function () {
        this.$el.html(this.model.get('text'));
    }
});

var m = new Backbone.Model({text: new Date().toString()});
var v = new RefreshingView({model: m, el: 'body'});
v.render();

/*setInterval(function () {
    m.set({text: new Date().toString()});
}, 1000)
*/

var h = new Backbone.Model({
  content: 'Historial conrext'
})

var HeadingView = Backbone.View.extend({
  tagName: 'p',
  render: function () {
    this.$el.html(this.model.get('content'))
    return this;
  }
})


var a = new HeadingView({model: h})
$('body').append(a.render().el)

a.remove()

// events
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

var fv = new FormView()
$('body').append(fv.render().el);

/*guidlines
- Views should render self-contained DOM element
- Do not attach to existing elements
- Do not access DOM elements the view does not
own
- Pass el to the constructor of self-updating view
*/
