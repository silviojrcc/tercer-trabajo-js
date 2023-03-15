function ejercicio04() {
  const articleEl = document.createElement("article");
  articleEl.innerHTML = `
        <h2>Ejercicio 4</h2>
        <form class="form">
            <div>
                <label for="numero">Ingrese el numero</label>
                <input class="numero" name="numero" type="text">
            </div>
            <button>El numero es par o impar?</button>
        </form>
        <p class="resultado"></p>
      `;

  function esParOImpar(numero) {
    if (numero % 2 == 0) {
      return "par";
    } else {
      return "impar";
    }
  }

  const formEl = articleEl.querySelector(".form");
  formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = parseInt(articleEl.querySelector(".numero").value);
    const resultado = articleEl.querySelector(".resultado");

    if (!isNaN(numero)) {
      resultado.textContent = `El numero ingresado es ${esParOImpar(numero)}`;
    } else {
      resultado.textContent = "Debe ingresar un numero valido!";
    }
  });

  return articleEl;
}
