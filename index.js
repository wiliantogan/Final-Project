function selamat() {
    var tempat="Elegant Tour & Travel Online Service!";
    alert("Welcome to "+ tempat + "!");
}

// Initialize and add the map
function initMap() {
    // The location of Elegant
    var elegant = {lat: 3.597233, lng: 98.683492};
    // The map, centered at Elegant
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: elegant});
    // The marker, positioned at Elegant
    var marker = new google.maps.Marker({position: elegant, map: map});
}
