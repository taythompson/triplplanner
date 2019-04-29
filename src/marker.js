const mapboxgl = require("mapbox-gl");
function markerBuilder(type, coordinates) {

const newElement = document.createElement('div')
const userCoordinates = coordinates
newElement.style.width = "32px";
newElement.style.height = "39px";


if (type === 'activity'){

newElement.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
}
else if (type === 'hotel'){

  newElement.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
  }
  else if (type === 'restaurant'){
   newElement.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
    }
return new mapboxgl.Marker(newElement).setLngLat(userCoordinates);
}


module.exports = markerBuilder;
