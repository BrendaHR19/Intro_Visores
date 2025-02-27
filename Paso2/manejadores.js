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