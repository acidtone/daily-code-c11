import { animals } from './animals.js';

let content = '';

for (const animal of animals) {  
  content += `<img src="https://picsum.photos/id/${animal.id}/300/300" alt="A Cute ${animal.title}">`;
}

const gallery = document.querySelector('.gallery');

gallery.innerHTML = content;