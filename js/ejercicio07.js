function ejercicio07(){
    const articleEl = document.createElement("article");
  articleEl.innerHTML = `
        <h2>Ejercicio 7</h2>
        <form class="form">
            <div>
                <label for="numero">Ingrese el numero</label>
                <input class="numero" name="numero" type="text">
            </div>
            <button>Mostrar tabla de multiplicar</button>
        </form>
        <div class="resultado"></div>
      `;

  function crearTablaMultiplicar(numero) {
    let html = `
    <table>
        <tbody>
        <tr>
            <th>Número</th>
            <th>Resultado</th>
        </tr>
    `;

    for (let i = 0; i <= 10; i++) {
        html += `
        <tr>
            <td>${numero} X ${i} = </td>
            <td>${numero * i}</td>
        </tr>
        `
    }
    html += `
        </tbody>
    </table>
    `
    return html;
  }

  const formEl = articleEl.querySelector(".form");
  formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = parseInt(articleEl.querySelector(".numero").value);
    const resultado = articleEl.querySelector(".resultado");

    if (!isNaN(numero)) {
      resultado.innerHTML = `${crearTablaMultiplicar(numero)}`;
    } else {
      resultado.innerHTML = "<p>Debe ingresar un numero valido!</p>";
    }
  });

  return articleEl;
}