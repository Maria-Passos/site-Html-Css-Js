alert("Olá do JavaScript!");
document.addEventListener('DOMContentLoaded', function(){
	const minhaLista = document.querySelector('ul');
minhaLista.addEventListener('click',function(){
	alert('Você clicou na lista!');
});
});