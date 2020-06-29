import './style.css';
import Icon from './test2.jpg';

function component(){
    const element = document.createElement('div');
    element.innerHTML = 'hello css1';
    element.classList.add('hello');
    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
    return element;
}
document.body.appendChild(component());


