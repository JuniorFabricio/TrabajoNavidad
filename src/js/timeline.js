// Importar el CSS de Vis.js
import 'vis-timeline/styles/vis-timeline-graph2d.min.css';

// Importar correctamente los objetos necesarios desde el módulo de vis-timeline
import { DataSet } from 'vis-data';
import { Timeline } from 'vis-timeline/standalone';

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  // Crear un contenedor para la línea de tiempo
  const container = document.getElementById("timeline");

  // Definir los datos de la línea de tiempo (logros de Paulo Londra)
  const items = new DataSet([
    { 
      id: 1, 
      content: `
        <div>
          <img src="https://i.ytimg.com/vi/LE6VEavHWSY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAqMIv4CXjThSi9YPLNlmwJiRZe4Q" alt="Lanzamiento de Relax" style="width: 50px; height: 50px; border-radius: 50%; margin-right: 10px;">
          <p>Lanzamiento de 'Relax', su primer sencillo (10M+ visitas)</p>
        </div>`, 
      start: "2017-01-01" 
    },
    { 
      id: 2, 
      content: `
        <div>
          <img src="https://i.scdn.co/image/ab67616d0000b27344de3fd4618260574d905bcc" alt="Adán y Eva" style="width: 50px; height: 50px; border-radius: 50%; margin-right: 10px;">
          <p>'Adán y Eva' alcanzó el #1 en el Billboard Argentina (1B+ vistas)</p>
        </div>`, 
      start: "2018-11-05" 
    },
    { 
      id: 3, 
      content: `
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhJr2XTtyYZICN5vkC_m54L_RkWdt9znH8yQ&s" style="width: 50px; height: 50px; border-radius: 50%; margin-right: 10px;">
          <p>Primer argentino en entrar al Top 10 Global de Spotify</p>
        </div>`, 
      start: "2018-12-01" 
    },
    { 
      id: 4, 
      content: `
        <div>
          <img src="https://images.genius.com/dec308840cd0c74909cb995e4bee15ee.1000x1000x1.jpg" alt="Homerun" style="width: 50px; height: 50px; border-radius: 50%; margin-right: 10px;">
          <p>Lanzamiento de 'Homerun', debutando en #12 del Billboard Top Latin Albums</p>
        </div>`, 
      start: "2019-05-23" 
    },
    { 
      id: 5, 
      content: `
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe2qUoy88yj_BgO3YpRjGLv32rDq8GY6snuQ&s" alt="Colaboración con Ed Sheeran" style="width: 50px; height: 50px; border-radius: 50%; margin-right: 10px;">
          <p>Primer artista argentino en colaborar con Ed Sheeran ('Nothing on You')</p>
        </div>`, 
      start: "2019-07-12" 
    },
    { 
    
      id: 6, 
      content: `
        <div>
          <img src="https://i.pinimg.com/736x/90/8a/fc/908afc0cd23d4601d4538948b71efa32.jpg" alt="Plan A" style="width: 50px; height: 50px; border-radius: 50%; margin-right: 10px;">
          <p>Récord de reproducciones en Spotify con 'Plan A' (5M+ en 24 horas)</p>
        </div>`, 
      start: "2022-03-23" 
    },
    { 
      id: 7, 
      content: `
        <div>
          <img src="https://cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/SN3JVXF4NVGWHCJQFZ7JBOFC3Y.jpg" alt="Premio Gardel" style="width: 50px; height: 50px; border-radius: 50%; margin-right: 10px;">
          <p>Ganó el Premio Gardel por 'Adán y Eva'</p>
        </div>`, 
      start: "2019-06-01" 
    },
    { 
      id: 8, 
      content: `
        <div>
          <img src="https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/95/7a/e9/957ae966-788e-6dae-56fe-d7b94e3c7383/5054197442223.jpg/600x600bf-60.jpg" alt="Back to the Game" style="width: 50px; height: 50px; border-radius: 50%; margin-right: 10px;">
          <p>Lanzamiento de 'Back to the Game', su segundo álbum</p>
        </div>`, 
      start: "2022-11-23" 
    },
    { 
      id: 9, 
      content: `
        <div>
          <img src="https://img.youtube.com/vi/hJaD8ulcR9E/maxresdefault.jpg" alt="YouTube Record" style="width: 50px; height: 50px; border-radius: 50%; margin-right: 10px;">
          <p>Más de 1.5B vistas acumuladas en YouTube</p>
        </div>`, 
      start: "2022-01-01" 
    },
    { 
      id: 10, 
      content: `
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR7U9Vydf-t3XEkpy_ASJ9W8JbbMVQEe_bhQ&s" style="width: 50px; height: 50px; border-radius: 50%; margin-right: 10px;">
          <p>Viralidad en TikTok con canciones como 'Nena Maldición'</p>
        </div>`, 
      start: "2020-01-01" 
    },
  ]);


  const options = {
    width: "100%", // Ancho de la línea de tiempo
    height: "500px", // Altura ajustada para destacar más
    editable: false, // Hacerla no editable
  };

  // Crear la línea de tiempo con los datos y opciones
  const timeline = new Timeline(container, items, options);
});
