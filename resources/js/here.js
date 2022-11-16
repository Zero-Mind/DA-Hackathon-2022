if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition( position => {
    localCoord = position.coords;
    objLocalCoord = {
        lat: localCoord.latitude,
        lng: localCoord.longitude
    }
    })

    // Instantiate a map and platform object:
    let platform = new H.service.Platform({
        'apikey': window.hereApiKey
    });
    // Retrieve the target element for the map:
    var targetElement = document.getElementById('mapContainer');

    // Get the default map types from the platform object:
    let defaultLayers = platform.createDefaultLayers();

    // Instantiate the map:
    let map = new H.Map(
        document.getElementById('mapContainer'),
        defaultLayers.vector.normal.map,
        {
        zoom: 13,
        center: objLocalCoord,
        pixeRatio: window.devicePixelRatio || 1
        });
        window.addEventListener('resize', () => map.getViewPort().resize());

    let ui = H.ui.UI.createDefault(map, defaultLayers);
    let mapEvents = new H.mapEvents.MapEvents(map);
    let behavior = new H.mapEvents.behavior(mapEvents);

}else{
    console.error("Geo location is not supported by this browser  ")
}
