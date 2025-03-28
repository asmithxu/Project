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

        // let burgerOrder = ""
        // let burgerCount = 0
        // for (let i = 0; i < orderToRender[orderToRender.length-1].burgers; i++){
        //     burgerOrder += "🍔"
        //     burgerCount += 1
        // }
        // let drinkOrder = ""
        // let drinkCount = 0
        // for (let i = 0; i < orderToRender[orderToRender.length-1].drinks; i++){
        //     drinkOrder += "🥤"
        //     drinkCount += 1
        // }

        let orderListHTML = document.getElementById('orderList');
        // orderListHTML.innerHTML = ''; // Clear existing orders
    
            const i = orderToRender.length-1
            let burgerOrder = ""
            let burgerCount = 0
            for (let i = 0; i < orderToRender[orderToRender.length-1].burgers; i++){
                burgerOrder += "🍔"
                burgerCount += 1
            }
            let drinkOrder = ""
            let drinkCount = 0
            for (let i = 0; i < orderToRender[orderToRender.length-1].drinks; i++){
                drinkOrder += "🥤"
                drinkCount += 1
            }

            let nameOrder = orderToRender[i].name
            let orderElementHTML = document.createElement("section");
            orderElementHTML.className = "deliver"
            if (burgerCount <= 3 && drinkCount <= 3){
            
            orderElementHTML.innerHTML = `${nameOrder}, ${burgerOrder}, ${drinkOrder}`
            let deliverButton = document.createElement("button")
            deliverButton.innerText = "deliver"
            deliverButton.addEventListener("click", function(event){
                orderToRender[i].delivered = true
                let parentElement = event.target.parentElement
                parentElement.remove()
            })
            orderElementHTML.appendChild(deliverButton)
            }
            else if (burgerCount > 3 || drinkCount > 3){
          
                orderElementHTML.innerHTML = `${nameOrder}, 🍔x${burgerCount}, 🥤x${drinkCount}`
                let deliverButton = document.createElement("button")
            deliverButton.innerText = "deliver"
            deliverButton.addEventListener("click", function(event){
                orderToRender[i].delivered = true
                let parentElement = event.target.parentElement
                parentElement.remove()
            })
            orderElementHTML.appendChild(deliverButton)
            }

            orderListHTML.appendChild(orderElementHTML);                
        
}

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
        if (orderArray[i].delivered == true) {
            totalDelivered += 1
        }
        else if (orderArray[i].delivered == false){
            totalNotDelivered += 1
        }
    }
    console.log(`Total Orders: ${totalOrders}, Total Burgers: ${totalBurgers}, Total Drinks: ${totalDrinks}`)
    console.log(`Total Delivered: ${totalDelivered}`)
    console.log(`Total Undelivered: ${totalNotDelivered}`)
   })

}