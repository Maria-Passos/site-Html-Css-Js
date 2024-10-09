alert("Olá do JavaScript!");
document.addEventListener('DOMContentLoaded', function(){
	const meuTitulo = document.querySelector('h1');
meuTitulo.textContent = 'Título modificado pelo JavaScript!';
});