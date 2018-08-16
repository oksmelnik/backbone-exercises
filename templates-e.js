

var V = Backbone.View.extend({
  render: function () {
    var data = { lat: -27, lon: 153 }
    var template = $('#latlon-template').html()
    this.$el.html(_.template(template)(data))
    return this;
  }
})

var v = new V({el: 'body'})
v.render()

var template = '<%= lat %> <%= lon %>'
var compiled = _.template(template)
console.log(compiled)

for (var i = 0; i<100; i++) {
  console.log(compiled({lat: -27, lon:153}))
}
