const categoriesEl = document.querySelector('ul');
const numberCategoriesEl = categoriesEl.children.length;
console.log(`Number of categories:`, numberCategoriesEl);


const itemsEl = document.querySelectorAll('.item');
itemsEl.forEach.call(itemsEl, (element) => {
    const titleEl = element.querySelector('h2').textContent;
    const itemsLengthEL = element.querySelectorAll('li').length;
    console.log(`Category: ${titleEl}`);
    console.log(`Elements: ${itemsLengthEL}`);
});