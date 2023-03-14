function router(container) {
  const routes = [
    {
      path: /\/ejercicio01/,
      ejercicio: ejercicio01,
    },
    {
      path: /\/ejercicio02/,
      ejercicio: ejercicio02,
    },
    {
      path: /\/ejercicio03/,
      ejercicio: ejercicio03,
    },
    {
      path: /\/ejercicio04/,
      ejercicio: ejercicio05,
    },
    {
      path: /\/ejercicio05/,
      ejercicio: ejercicio05,
    },
    {
      path: /\/ejercicio06/,
      ejercicio: ejercicio06,
    },
    {
      path: /\/ejercicio07/,
      ejercicio: ejercicio07,
    },
  ];

  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  window.onpopstate = function (event) {
    handleRoute(window.location.pathname);
  };

  if (window.location.pathname == "/" || "") {
    goTo("/inicio");
  } else {
    handleRoute(window.location.pathname);
  }

  function handleRoute(route) {
    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.ejercicio();

        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.append(el);
      }
    }
  }
}
