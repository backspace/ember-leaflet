import Ember from 'ember';
const { Controller } = Ember;

export default Controller.extend({
  lat: 45.519743,
  lng: -122.680522,
  zoom: 10,
  actions: {
    updateCenter(e) {
      let center = e.target.getCenter();
      this.set('lat', center.lat);
      this.set('lng', center.lng);
    }
  }
});
