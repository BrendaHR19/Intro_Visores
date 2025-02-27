let centroides = document.getElementById("centroid");

centroides.addEventListener("click", function(){
    console.log("Vamos a calcular los centroides");
    detect_centroids();
})

let areas=document.getElementById("areas");
areas.addEventListener("click",
    function(){
        console.log("Vamos a calcular areas");
        calculate_areas();
    }
)

let centroid_distance = document.getElementById("centroid_distance");
centroid_distance.addEventListener('click',
    function(){
        console.log("Vamos a calcular distancia entre los centroides");
        calculateDistanceCentroids();
    }
)