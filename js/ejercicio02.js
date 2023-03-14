function ejercicio02(){
    const articleEl = document.createElement("article");
    articleEl.innerHTML = `
    <h2>Ejercicio 2</h2>
    <p class="resultado"></p>
    `;

    const resultado = articleEl.querySelector(".resultado"); 

    const ciudades = [];
    do {
        let ciudad;
        ciudad = prompt("Por favor ingrese una ciudad");

        if (ciudad != null && ciudad != "") {
            ciudades.push(ciudad);
        } else {
            alert("Usted no ingresó la ciudad, no se registrará en el array (o eso espero)");
        }
    } while (confirm("Desea seguir ingresando ciudades?"));

    let texto = "Las ciudades ingresadas fueron:<br>";

    for (let i = 0; i < ciudades.length; i++) {
        texto += `${ciudades[i]} `
    }

    texto += `<br> La longitud del arreglo es: ${ciudades.length}`;
    texto += `<br> La primera posición es ${ciudades[0]}, la tercera es ${ciudades[2]}, y la última es ${ciudades[ciudades.length - 1]}`;
    ciudades.push("Paris");
    texto += `<br>${ciudades[1]}`;
    ciudades[1] = "Barcelona";
    texto += `<br> El array de ciudades quedo de esta manera: ${ciudades}`;

    resultado.innerHTML = texto;

    return articleEl;

}