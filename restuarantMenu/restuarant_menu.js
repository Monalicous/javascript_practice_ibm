const breakfastMenu = ['Pancakes- R12', 'Eggs Benedict- R22.99', 'Oatmeal- R21.99', 'Frittata - R15'];
const mainCourseMenu = ['Steak- R100', 'Pasta- R60', 'Burger- R120', 'Salmon- R200'];
const dessertMenu = ['Cake- R50', 'Ice Cream- R15', 'Pudding- R25', 'Fruit Salad- R30'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
    document.getElementById('dessertMenuItems').innerHTML = dessertItem;