function ejercicio01(){
    const articleEl = document.createElement("article");
    articleEl.innerHTML = `
    <h2>Ejercicio 1</h2>
    <button class="boton">Listar meses</button>
    <div class="resultado"></div>
    `;

    const boton = articleEl.querySelector(".boton");
    
    boton.addEventListener("click", () => {
        const resultado = articleEl.querySelector(".resultado");
        let texto = "";
        let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

        texto += "<ul>"
        for (let i = 0; i < meses.length; i++) {
            texto += `<li>${meses[i]}</li>`
        }
        texto += "</ul>";
        resultado.innerHTML = texto;
    });
    return articleEl;
}