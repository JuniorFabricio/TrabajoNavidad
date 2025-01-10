document.addEventListener("DOMContentLoaded", function () {
  // Frases de Paulo Londra
  const frases = [
    "Nunca me voy a olvidar de todo lo que viví para llegar hasta acá.",
    "No hay que esperar a que las cosas lleguen, hay que ir por ellas.",
    "Soy el mismo de antes, pero con más experiencia.",
    "Lo importante no es cómo empieces, sino cómo terminas.",
    "No me importa lo que digan, yo sigo mi camino.",
  ];

  const fraseAleatoria = frases[Math.round(Math.random() * frases.length)];

  const saludo = document.createElement("div");
  saludo.classList.add("frasesaludo");
  saludo.innerHTML = `<h2> Frase de Paulo Londra :"${fraseAleatoria}"</h2>`;
  document.body.prepend(saludo);
});
