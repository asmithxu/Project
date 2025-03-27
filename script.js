window.onload = function() {
    // initialize variables
    let kelButton = document.querySelector('button.deliver');
    let nameValue
    let orderArray = []

    // create functions
    function setCopyrightYear() {
        document.querySelector('footer span').innerHTML += 'ⓒ ' + new Date().getFullYear()
    }



    function renderOrder(orderToRender) {
        console.log(orderToRender)
        console.log(orderToRender[0].burgers)
        let burgerOrder = ""
        burgerCount = 0
        for (let i = 0; i < orderToRender[0].burgers; i++){
            burgerOrder += "🍔"
        }
        let drinkOrder = ""
        drinkCount = 0
        for (let i = 0; i < orderToRender[0].burgers; i++){
            drinkOrder += "🥤"
        }
        let orderListHTML = document.getElementById('orderList');
        orderListHTML.innerHTML = ''; // Clear existing orders
        for (let i = 0; i < orderToRender.length; i++) {
            let nameOrder = orderToRender[i].name
            let orderElementHTML = document.createElement("section");
            orderElementHTML.innerHTML = `${nameOrder}, ${burgerOrder}, ${drinkOrder} <button>Deliver</button>`

        orderListHTML.appendChild(orderElementHTML);
    }}

    // invoke functions
    setCopyrightYear();

    // set event listeners here
   let promptHTML = document.getElementById("prompt");
   promptHTML.addEventListener("click", function (){
    nameValue = prompt("Enter your first name")
   })

   let alertHTML = document.getElementById("alert");
   alertHTML.addEventListener("click", function() {
    alert("Welcome, " + nameValue + "!");
   })

   let submitOrderHTML = document.getElementById("submitOrder");
   submitOrderHTML.addEventListener("click", function(event) {
    event.preventDefault(event)
    let burgerHTML = document.getElementById("burgers")
    console.log (burgerHTML.value)
    let drinkHTML = document.getElementById("drinks")
    console.log (drinkHTML.value)
    let orderObject = {
        name: "",
        burgers: "",
        drinks: "",
        delivered: "",
    }
    orderObject.name = nameValue
    orderObject.burgers = Number(burgerHTML.value)
    orderObject.drinks = drinkHTML.value



    orderArray.push(orderObject)

    renderOrder(orderArray)


   })

}