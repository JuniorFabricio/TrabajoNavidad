import Flickity from 'flickity';
import 'flickity/css/flickity.css';


const gallery = document.querySelector('.galeria-flex');


const flickityOptions = {
  cellAlign: 'center', 
  contain: true,       
  wrapAround: true,  
  autoPlay: 3000,      
  pageDots: true,   
  prevNextButtons: true 
};


if (gallery) {
  const flickityInstance = new Flickity(gallery, flickityOptions);
  console.log('Flickity initialized:', flickityInstance);
}
