function choice(items){
    let ourMin = 1
    return items[Math.floor(Math.random()*((items.length)- ourMin + 1))] 
}

function removeItem(items, selectedChoice){
    // const selectedChoice = choice(items)
    let index = items.indexOf(selectedChoice);
    if (index > -1) {
        items.splice(index, 1);
    }
    return items;
}

// let itemsArray= ['a','b','c','d','e','e']
// console.log(removeItem(itemsArray));
export {choice, removeItem}