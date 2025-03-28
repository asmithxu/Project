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

        let orderListHTML = document.getElementById('orderList');
        orderListHTML.innerHTML = ''; // Clear existing orders
    
        for (let i = 0; i < orderToRender.length; i++) {

            let burgerOrder = ""
            let burgerCount = 0
            for (let i = 0; i < orderToRender[0].burgers; i++){
                burgerOrder += "🍔"
                burgerCount += 1
            }
            let drinkOrder = ""
            let drinkCount = 0
            for (let i = 0; i < orderToRender[0].drinks; i++){
                drinkOrder += "🥤"
                drinkCount += 1
            }

            const orderElementHTML = document.createElement("section");
            orderElementHTML.className = "deliver"
            let nameOrder = orderToRender[i].name
            if (burgerCount <= 3 && drinkCount <= 3){
            orderElementHTML.innerHTML = `${nameOrder}, ${burgerOrder}, ${drinkOrder} <button class="deliverButton" id="deliverButtonId">Deliver</button>`
            }
            else {
                orderElementHTML.innerHTML = `${nameOrder}, 🍔x${burgerCount}, 🥤x${drinkCount} <button class="deliverButton" id="deliverButtonId">Deliver</button>`

            }
            orderListHTML.appendChild(orderElementHTML);

            let deliverButtonHTML =  document.getElementById("deliverButtonId")
            deliverButtonHTML.addEventListener("click", function(){
                let deliverItem = document.getElementsByClassName("deliver");
                

                for (let i = deliverItem.length - 1; i >= 0; i--) {
                    deliverItem[i].remove();
                    orderToRender[i].delivered = true
                    console.log(orderToRender)
                }
            })

        
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
    orderObject.drinks = Number(drinkHTML.value)
    orderObject.delivered = false



    orderArray.push(orderObject)

    renderOrder(orderArray)


   })

   let outputOrderHTML = document.getElementById("outputOrder")
   outputOrderHTML.addEventListener("click", function(){
    let totalOrders = orderArray.length
    let totalBurgers = 0
    let totalDrinks = 0
    let totalDelivered = 0
    let totalNotDelivered = 0
    for (i = 0; i < orderArray.length; i ++) {
        totalBurgers = totalBurgers + orderArray[i].burgers
        totalDrinks = totalDrinks + orderArray[i].drinks
        if (totalDelivered = true) {
            totalDelivered += 1
        }
        else if (totalDelivered = false){
            totalNotDelivered += 1
        }
    }
    console.log(`Total Orders: ${totalOrders}, Total Burgers: ${totalBurgers}, Total Drinks: ${totalDrinks}`)
    console.log(`Total Delivered: ${totalDelivered}`)
    console.log(`Total Undelivered: ${totalNotDelivered}`)
   })

}