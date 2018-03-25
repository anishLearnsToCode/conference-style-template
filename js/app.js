"use strict";

var dateUpdater = $('#date');
var navbarDateUpdater = $('#navbar-brand-container-lower-heading');
console.log(dateUpdater);

var conferenceDate = new Date('10/23/2018');
var currentDate = new Date();
var dateDifference = conferenceDate.getTime() - currentDate.getTime();
var day = 1000 * 60 * 60 * 24;
dateDifference /= day;

dateUpdater.append( Math.ceil(dateDifference) );
navbarDateUpdater.append(Math.ceil(dateDifference) + '<span class="navbar-brand-container-lower-heading-reminder">days left</span>');
navbarDateUpdater.hide();

// Google Maps
function initializeMap() {
    var location = {
        lat: 28.750075,
        lng: 77.117665
    };
    var api_key = 'AIzaSyDaLNdW2DwXDOch4rEs9C0hP-Amc4RVYPE ';
    var map = new google.maps.Map(document.getElementById('googleMap'), {
        zoom: 15,
        center: location
    });
    var markerIcon = 'google-map-marker.png';
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        visible: true,
        icon: markerIcon
    });
}