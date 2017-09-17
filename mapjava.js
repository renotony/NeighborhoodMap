/*
 * Open the drawer when the menu ison is clicked.
 */
var menu = document.querySelector('#menu');
var main = document.querySelector('body');
var drawer = document.querySelector('.nav');

menu.addEventListener('click', function(e) {
  drawer.classList.toggle('open');
  e.stopPropagation();
});
main.addEventListener('click', function() {
  drawer.classList.remove('open');
});

var map;
var markers = [];
var largeInfowindow;
var bounds;

function initMap() {
 map = new google.maps.Map(document.getElementById('map'), {
   center: {lat: 39.5036943, lng: -119.8085719},
   zoom: 12,
   mapTypeControl: false
 });

 var defaultIcon = makeMarkerIcon('0091ff');
 var highlightedIcon = makeMarkerIcon('FFFF24');


 largeInfowindow = new google.maps.InfoWindow();

  for (var i = 0; i < viewModel.filteredSchools().length; i++) {
    // Get the position from the location array.
    var position = viewModel.filteredSchools()[i].location;
    var title = viewModel.filteredSchools()[i].schoolName + ' ' + viewModel.filteredSchools()[i].schoolLevel;
    // Create a marker per location, and put into markers array.
    var marker = new google.maps.Marker({
      position: position,
      title: title,
      animation: google.maps.Animation.DROP,
      icon: defaultIcon,
      id: i
    });
    // Push the marker the of markers.
    markers.push(marker);

    viewModel.filteredSchools()[i].marker = marker;
    viewModel.filteredSchools()[i].vInfowindow = largeInfowindow;
    // Create an onclick event to open the large infowindow at each marker.
    marker.addListener('click', function() {
      toggleBounce(this);
      fillInfoWindow(this, largeInfowindow);
    });
    // Two event listeners - one for mouseover, one for mouseout,
    // to change the colors back and forth.
    marker.addListener('mouseover', function() {
      this.setIcon(highlightedIcon);
    });
    marker.addListener('mouseout', function() {
      this.setIcon(defaultIcon);
    });
  }
  showfMarkers();
}
 function toggleBounce(marker) {
   if (marker.getAnimation() !== null) {
     marker.setAnimation(null);
   } else {
     marker.setAnimation(google.maps.Animation.BOUNCE);
   }
 }


 function fillInfoWindow(marker, infowindow) {
   // Check to make sure the infowindow is not already opened on this marker.
   if (infowindow.marker != marker) {
     // Clear the infowindow content to give the streetview time to load.
     infowindow.setContent('');
     infowindow.marker = marker;
     // Make sure the marker property is cleared if the infowindow is closed.
     infowindow.addListener('closeclick', function() {
       infowindow.marker = null;
     });

     var schoolname = marker.title;
     var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + schoolname + '&format=json&callback=wikiCallback';

     var wikiRequestTimeout = setTimeout(function(){
       infowindow.setContent('<div>' + marker.title + '</div><div>No Wikipedia links found for this school</div>');
         //$wikiElem.text("failed to get wikipedia resources");
     }, 800);

     $.ajax({
         url: wikiUrl,
         dataType: "jsonp",
         // jsonp: "callback",
         success: function( response ) {
           var articleList = response[1];

           if (articleList.length == 0) {
             infowindow.setContent('<div>' + marker.title + '</div><div>No Wikipedia links found for this school</div>');
           } else {
              var content = '<ul>';
           for (var i = 0, len = articleList.length; i < len; i++) {
             articleStr = articleList[i];
             var url = 'http://en.wikipedia.org/wiki/' + articleStr;
             content = content + '<li><a href="' +  url + '">' + articleStr + '</a></li>';
             };
             content = content + '</ul>';
             infowindow.setContent('<div>' + marker.title + '</div><div>' + content + '</div>');
             // $wikiElem.append('<li><a href="' + url + '">' + articleStr + '</a></li>');
           };
           clearTimeout(wikiRequestTimeout);
         }
     });
     infowindow.open(map, marker);
   }
 }

  function showfMarkers() {
    bounds = new google.maps.LatLngBounds();
    for (var i = 0; i< markers.length; i++) {
      markers[i].setMap(null);
    }
    for (var i = 0; i< viewModel.filteredSchools().length; i++) {
      viewModel.filteredSchools()[i].marker.setMap(map);
      bounds.extend(viewModel.filteredSchools()[i].marker.position);
    }
    map.fitBounds(bounds)
  }

  function makeMarkerIcon(markerColor) {
    var markerImage = new google.maps.MarkerImage(
      'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
      '|40|_|%E2%80%A2',
      new google.maps.Size(21, 34),
      new google.maps.Point(0, 0),
      new google.maps.Point(10, 34),
      new google.maps.Size(21,34));
    return markerImage;
  }
