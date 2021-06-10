import handelMenu from './template/handelbars.hbs'
import menuItem from './menu.json';

const menu = document.querySelector('.js-menu')
menu.insertAdjacentHTML('beforeend',buildMenu)
const biuldMenu = createMenu(menuItem);

function createMenu(items) {
 return items.map(handelMenu).join('');
}