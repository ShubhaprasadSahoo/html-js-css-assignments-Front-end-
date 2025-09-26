const Orders=(name,coffee) =>{
    const customername=prompt("Enter your Name").valueOf().trim().toUpperCase();
    const Listofcoffeeitems=prompt("Enter your type of coffee").valueOf().trim().toUpperCase();

    if(customername==name && Listofcoffeeitems==coffee){
document.getElementById('order-id').innerText=`Hello ${customername}! your order ${Listofcoffeeitems} will be ready soon.`
}
else{
   alert('No item ordered Order Skipped!');
}
}