// Importar el CSS de Vis.js
import 'vis-timeline/styles/vis-timeline-graph2d.min.css';

// Importar correctamente los objetos necesarios desde el módulo de vis-timeline
import { DataSet } from 'vis-data';
import { Timeline } from 'vis-timeline/standalone';

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  // Crear un contenedor para la línea de tiempo
  const container = document.getElementById("timeline");

  // Definir los datos de la línea de tiempo (eventos de la vida de Paulo Londra)
  const items = new DataSet([
    { id: 1, content: "Nace en Córdoba", start: "1998-04-12" },
    { id: 2, content: "Primer sencillo", start: "2017-01-01" },
    { id: 3, content: "Debut en trap", start: "2018-05-20" },
    { id: 4, content: "Gran regreso", start: "2022-03-23" },
  ]);

  // Opciones de la línea de tiempo
  const options = {
    width: "100%", // Ancho de la línea de tiempo
    height: "300px", // Ajustar la altura para hacerlo más pequeño
    editable: false, // Hacerla no editable
    margin: {
      item: { horizontal: 0, vertical: 0 },
    },
    // Opciones de fondo y texto
    
    itemStyle: "box", // Caja para los elementos
    itemAlign: "center", // Alineación central de los elementos
    axisFormat: "YYYY", // Formato del eje de tiempo
    color:"white",
  
  };

  // Crear la línea de tiempo con los datos y opciones
  const timeline = new Timeline(container, items, options);
});
