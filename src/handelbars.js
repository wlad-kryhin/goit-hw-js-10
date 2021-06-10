import handelMenu from './template/handelbars.hbs'
import menuItem from './menu.json';

const menu = document.querySelector('.js-menu')
const buildMenu = createMenu(menuItem);
menu.insertAdjacentHTML('beforeend', buildMenu)

function createMenu(items) {
 return items.map(handelMenu).join('');
}