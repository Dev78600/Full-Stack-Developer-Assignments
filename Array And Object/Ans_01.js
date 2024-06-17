const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// Add 'Meat' at the beginning if it's not already there
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}

// Add 'Sugar' at the end if it's not already there
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}

// Remove 'Honey' if allergic to honey
if ('allergy condition') {
    const honeyIndex = shoppingCart.indexOf('Honey');
    if (honeyIndex !== -1) {
        shoppingCart.splice(honeyIndex, 1);
    }
}

// Modify 'Tea' to 'Green Tea'
const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
    shoppingCart[teaIndex] = 'Green Tea';
}

console.log(shoppingCart)
