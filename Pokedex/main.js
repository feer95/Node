function obtenerInfoPokemon() 
{
    var nombrePokemon = document.getElementById("pokemonNameInput").value;
    var url = "https://pokeapi.co/api/v2/pokemon/" + nombrePokemon;
  
    fetch(url)
    .then(response => response.json())
    .then(data => {
    if (data.detail === "Not found") 
    {
        var mensajeError = document.createElement("p");
        mensajeError.textContent = "No se encontró el Pokémon.";
        document.querySelector(".pantallablanco").innerHTML = "";
        document.querySelector(".pantallablanco").appendChild(mensajeError);
    } 
    else 
    {
        var divInfoPokemon = document.createElement("div");

        var tituloNombre = document.createElement("h2");
        tituloNombre.textContent = "Nombre: " + data.name;
        divInfoPokemon.appendChild(tituloNombre);

        var imagenPokemon = document.createElement("img");
        imagenPokemon.src = data.sprites.front_default;
        imagenPokemon.alt = "Imagen del Pokémon";
        divInfoPokemon.appendChild(imagenPokemon);

        var tituloHab = document.createElement("h3");
        tituloHab.textContent = "Habilidades:";
        divInfoPokemon.appendChild(tituloHab);

        var tablaHab = document.createElement("table");
        var filaEncabezado = document.createElement("tr");
        var encabezadoHabilidad = document.createElement("th");
        filaEncabezado.appendChild(encabezadoHabilidad);
        tablaHab.appendChild(filaEncabezado);

        data.abilities.forEach(habilidad => {
        var filaHab = document.createElement("tr");
        var celdaHab = document.createElement("td");
        celdaHab.textContent = habilidad.ability.name;
        filaHab.appendChild(celdaHab);
        tablaHab.appendChild(filaHab);
        });

        divInfoPokemon.appendChild(tablaHab);
        document.querySelector(".pantallablanco").innerHTML = "";
        document.querySelector(".pantallablanco").appendChild(divInfoPokemon);
    }
    })
    .catch(error => {
        console.log(error);
        var mensajeError = document.createElement("p");
        mensajeError.textContent = "Error al obtener información del Pokémon.";
        document.querySelector(".pantallablanco").innerHTML = "";
        document.querySelector(".pantallablanco").appendChild(mensajeError);
    });
}
  