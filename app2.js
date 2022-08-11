/**Async - Await */

function ordenarProducto(producto) {
  return new Promise((resolve, reject) => {
    console.log(`Ordenando: ${producto} de freeCodeCamp.`);
    setTimeout(() => {
      if (producto === "taza") {
        resolve("Ordenando una taza cone le logo de freCodeCamp...");
      } else {
        reject("Eté producto no esta disponible actualmente...");
      }
    }, 2000);
  });
}

function procesarPedido(respuesta) {
  return new Promise((resolve, reject) => {
    console.log("Procesando respuesta ...");
    console.log(`La respuesta fue "${respuesta}"...`);
    setTimeout(() => {
      resolve("Gracias por tu comra. Disfruta tu producto de freeCodeCam.");
    }, 4000);
  });
}

/* ordenarProducto("kj")
  .then((respuesta) => {
    console.log("Respuesta recibida");
    console.log(respuesta);
    return procesarPedido(respuesta);
  })
  .then((respuestaProcesada) => {
    console.log(respuestaProcesada);
  })
  .catch((error) => {
    console.log(error);
  }); */

async function realizarPedido(producto) {
  try {
    const respuesta = await ordenarProducto(producto);
    console.log("Respuesta recibida");
    console.log(respuesta);
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada);
  } catch (err) {
    console.log(err);
  }
}

realizarPedido("taza");
// realizarPedido('lapiz');
