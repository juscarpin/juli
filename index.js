const tagSVG = document.querySelector('svg');


const pathDoSVG = document.querySelector('svg path');
const tamanhoTotalDoPath = pathDoSVG.getTotalLength();
tagSVG.style.setProperty('--tamanhoTotalDoPath', tamanhoTotalDoPath);

console.log(tamanhoTotalDoPath); // 2266.062744140625