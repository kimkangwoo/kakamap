// marker.js
var markerModule = (function() {
    var marker;

    function setMarker(map, position) {
        marker = new kakao.maps.Marker({
            map: map,
            position: position
        });
    }

    function moveMarker(moveLatLon) {
        map.panTo(moveLatLon);
        marker.setPosition(moveLatLon);
    }

    return {
        setMarker: setMarker,
        moveMarker: moveMarker
    };
})();