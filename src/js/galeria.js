import Flickity from 'flickity';
import 'flickity/css/flickity.css';


const gallery = document.querySelector('.galeria-flex');


const Options = {
  cellAlign: 'center', 
  contain: true,       
  wrapAround: true,  
  autoPlay: 3000,      
  pageDots: true,   
  prevNextButtons: true 
};



  const flickity = new Flickity(gallery, Options);


