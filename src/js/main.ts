
import '../scss/style.scss'; //файл с общими стилями всего сайта!

//будут выполнятся скрипты для всего сайта

console.log("main scripts for all pages");
console.log('header');
console.log('footer');


const backDrop = document.querySelector<HTMLDivElement>('.backDrop');

function createMarkUp () {
	const modalMarkUp = `
	<div class="modal">
				<button class="closeModal closeModal-js">
				<svg class="svg_icon"><use href="/images/svg/sprite.svg#icon-closeBth"></use></svg>
				</button>
				<div class="modal-content">
						<h1 class="text">Modal</h1>
						<p class="text-message">
							Here you can put all that you want!
						</p>
				</div>
			</div>
	`;
	if(backDrop) {
		backDrop.innerHTML = modalMarkUp;
	return; 
	}
	
}

// console.log(modalBth);
document?.addEventListener('click', onClickModal);

function onClickModal (e: Event) {

	createMarkUp();
	
	const target = e.target as HTMLElement;
	if(target.classList.contains('modalButton-js')){
		console.log('modlBth');
		return backDrop?.classList.add('active');
	}
	if(target.classList.contains('closeModal-js')){
		if(backDrop){
			backDrop.innerHTML = ''
			backDrop?.classList.remove('active');
			
		}
	  return 
  	} 
	if(backDrop === e.target){
		if(backDrop){
			backDrop?.classList.remove('active');
			backDrop.innerHTML = ''
		}
	  return 
	}

	
}

