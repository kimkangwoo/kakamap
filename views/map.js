// map.js
var mapModule = (function() {
    var map;
    
    function initMap(container, options) {
        map = new kakao.maps.Map(container, options);
    }

    function setPolyline(path, strokeWeight, strokeColor, strokeOpacity, strokeStyle) {
        var polyline = new kakao.maps.Polyline({
            map: map,
            path: path,
            strokeWeight: strokeWeight,
            strokeColor: strokeColor,
            strokeOpacity: strokeOpacity,
            strokeStyle: strokeStyle
        });
    }

    return {
        initMap: initMap,
        setPolyline: setPolyline
    };
})();
