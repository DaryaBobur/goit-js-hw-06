const categoriesEl = document.querySelector('ul');

const itemsEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemsEl.length}`);
 
itemsEl.forEach(element => {
    const titleEl = element.querySelector('h2').textContent;
    const itemsLengthEL = element.querySelectorAll('li').length;
    console.log(`Category: ${titleEl}`);
    console.log(`Elements: ${itemsLengthEL}`);
});
