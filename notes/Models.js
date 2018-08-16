//Models

//Event handlers
var volcano = _.extend({}, Backbone.Events)
volcano.on('disaster:err', function (options) {
  console.log('duck and cover' + options.plan)
})

volcano.off('disaster:err')
volcano.trigger('disaster:err', {plan:' run'});

//identity
ford.id
ford.cid
ford.isNew() true/false

//defaults
var Vehicle = Backbone.Model.extend({
  defaults: {
    'color': 'white',
    'type': 'car'
  }
})

var Car = new Vehicale();
  console.log(car.get('color')) // white

//Validation
var VehicleV = Backbone.Model.extend({
  validate: function (attrs) {
    var validColors = ['white', 'red', 'blue', 'yellow']
    var colorIsValid = function(attrs) {
      if (!attrs.color) return true;
      return _(validColors).include(attrs.color)
    }
    if (!colorIsValid(attrs)) {
      return 'color must be one of:' + validColors.join(",")
    }
  }
})

var ccar = new VehicleV()
ccar.on('error', function (model, error) {
  console.log(error)
})

ccar.set('color', 'black')

//save, fetch, destroy
