var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

map.pm.addControls(
    {
        position: "topleft",
        drawCircle: false
    }
);

let drawn_layers = []
let intersect_layers =[]

//Manejadores de eventos

map.on("pm:create", function(e){
    let my_layer = e.layer;

    //Si es poligono entonces agregarlo al arreglo drawn_layer
    if(my_layer instanceof L.Polygon){
        //Agregar el objeto capa al arreglo
        drawn_layers.push(my_layer);
        console.info("Has creado un poligono")
    }
})

//Si el usuario borra un elemento

map.on("pm:remove", function(e){
    drawn_layers = drawn_layers.filter((layer)=>layer != e.layer);
    console.log("Has borrado un poligono")
})

