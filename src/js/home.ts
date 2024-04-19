import '../scss/pages/home.scss'; // стили только странци home
import homePic from '../images/img/pngegg.png';

//будут выполнятся скрипты только для home
console.log('only home js script');
//Загрузка картинок из папки images в JS! из public не работает
const homeImg: HTMLImageElement | null = document.querySelector('#image');
console.log(homeImg);
if(homeImg){
	homeImg.src = homePic;
}