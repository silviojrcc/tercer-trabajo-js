function ejercicio05() {
  const articleEl = document.createElement("article");
  articleEl.innerHTML = `
        <h2>Ejercicio 5</h2>
        <form class="form">
            <div>
                <label for="palabra">Ingrese una palabra</label>
                <input class="palabra" name="palabra" type="text">
            </div>
            <button>Como esta constituida la palabra?</button>
        </form>
        <p class="resultado"></p>
      `;

  function informacionPalabra(palabra) {
    if (palabra === palabra.toUpperCase()) {
      return "solo por mayusculas";
    } else if (palabra === palabra.toLowerCase()) {
      return "solo por minusculas";
    } else {
      return "por minusculas y mayusculas";
    }
  }

  const formEl = articleEl.querySelector(".form");
  formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    const palabra = articleEl.querySelector(".palabra").value;
    const resultado = articleEl.querySelector(".resultado");

    if (palabra !== null && palabra !== "") {
      resultado.textContent = `La cadena esta formada ${informacionPalabra(palabra)}`;
    } else {
      resultado.textContent = "Debe ingresar una palabra";
    }
    
  });

  return articleEl;
}
