const preparingOrder = () =>{
    console.log('Processing Order for customer 1')
    setTimeout(() =>{
        console.log(`Cooking Completed`)
    }, 3000);
    
    console.log(`Order processed for customer 1`);
}

console.log('Took order for customer 1');
preparingOrder();
console.log('Completed order for customer 1');