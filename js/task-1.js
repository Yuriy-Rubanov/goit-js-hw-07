const quantity = document.querySelectorAll(`.item`);
console.log(`Number of categories: ${quantity.length}`);

quantity.forEach(item => console.log(`Category: ${item.firstElementChild.textContent} \nElements: ${item.lastElementChild.childElementCount}`));
