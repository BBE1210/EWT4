let Particles = require('particlesjs');
var $ = require('jquery');
require('bootstrap/dist/js/bootstrap');
require('./node_modules/bootstrap/dist/css/bootstrap.css');
$(document).ready(function () {
    $('#navMenu').load('./partial_nav.html');
});

let particleHome = {
  selector: '.background',
  connectParticles: true,
  speed: 5,
  color: ['#7FFF00', '#DC143C', '#1E90FF'],
};

window.onload = function() {
  setTimeout (function () {
    Particles.init(particleHome);
  }, 500);
};


