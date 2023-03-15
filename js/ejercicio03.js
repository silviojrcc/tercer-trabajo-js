function ejercicio03() {
  const articleEl = document.createElement("article");
  articleEl.innerHTML = `
      <h2>Ejercicio 3</h2>
      <form class="form">
          <div>
              <label for="base">Ingrese el valor de la base del rectangulo</label>
              <input class="base" name="base" type="text">
          </div>
          <div>
              <label for="altura">Ingrese el valor de la altura del rectangulo</label>
              <input class="altura" name="altura" type="text">
          </div>
          <button>Calcular perímetro</button>
      </form>
      <p class="resultado"></p>
    `;

  const formEl = articleEl.querySelector(".form");
  formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    const base = parseInt(articleEl.querySelector(".base").value);
    const altura = parseInt(articleEl.querySelector(".altura").value);
    const resultado = articleEl.querySelector(".resultado");
    
    if (
      !isNaN(base) &&
      !isNaN(altura) &&
      base >= 1 &&
      altura >= 1
    ) {
      resultado.textContent = `El perimetro del rectangulo ingresado es ${2*(base+altura)}`
    } else {
      resultado.textContent = "Debe ingresar numeros validos!";
    }
  });

  return articleEl;
}
