function ejercicio03() {
  const articleEl = document.createElement("article");
  articleEl.innerHTML = `
    <h2>Ejercicio 3</h2>
    <button class="boton">Mostrar 50 sumas de dos dados</button>
    <div class="resultado"></div>
    `;

  const boton = articleEl.querySelector(".boton");

  boton.addEventListener("click", () => {
    const resultado = articleEl.querySelector(".resultado");
    const arrayAparicionesSuma = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 50; i++) {
      const dado1 = Math.floor(Math.random() * 6) + 1;
      const dado2 = Math.floor(Math.random() * 6) + 1;
      const suma = dado1 + dado2;
      resultado.innerHTML = ``;

      switch (suma) {
        case 2:
            arrayAparicionesSuma[0]++;
          break;
        case 3:
            arrayAparicionesSuma[1]++;
          break;
        case 4:
            arrayAparicionesSuma[2]++;
          break;
        case 5:
            arrayAparicionesSuma[3]++;
          break;
        case 6:
            arrayAparicionesSuma[4]++;
          break;
        case 7:
            arrayAparicionesSuma[5]++;
          break;
        case 8:
            arrayAparicionesSuma[6]++;
          break;
        case 9:
            arrayAparicionesSuma[7]++;
          break;
        case 10:
            arrayAparicionesSuma[8]++;
          break;
        case 11:
            arrayAparicionesSuma[9]++;
          break;
        case 12:
            arrayAparicionesSuma[10]++;
          break;
      }
    }

    for (let i = 0; i < arrayAparicionesSuma.length; i++) {
        const numero = 0;
        resultado.innerHTML += `<p>La suma ${i + 2} apareció ${arrayAparicionesSuma[i]} veces</p>`
    }
  });
  return articleEl;
}
