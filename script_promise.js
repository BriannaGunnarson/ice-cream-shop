/* Steps to make ice cream and time required for each step
#1 Place Order -> 2
#2 Cut the fruit -> 2
#3 Add water and Ice -> 1
#4 Start the machine -> 1
#5 Select Container -> 2
#6 Select Toppings -> 3 
#7 Serve Ice Cream -> 2
*/

let stocks = {
    Fruits: ["strawberries", "rasberries", "bananas", "mango"],
    Holder: ["cone", "cup", "stick"],
    Toppings: ["chocolate", "sprinkles", "peanuts"],
    Liquid: ["water", "ice"]
}

let is_shop_open = true;
let order = (time, work) => {

    return new Promise ((resolve, reject)=>{
        if(is_shop_open){
            setTimeout(()=>{
                resolve(work())
            }, time)
        }
        else{
            reject(console.log("Our shop is closed"))
        }
    })
}

order(2000, ()=>console.log(`${stocks.Fruits[0]} was selected`))

.then(()=>{
    return order(0000, ()=>console.log("production has begun"))
})

.then(()=>{
    return order(2000, ()=>console.log("Fruit has been chopped"))
})

.then(()=>{
    return order(1000, ()=>console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} have been added`))
})

.then(()=>{
    return order(1000, ()=>console.log("machine started"))
})

.then(()=>{
    return order(2000, ()=>console.log(`ice cream placed on ${stocks.Holder[1]}`))
})

.then(()=>{
    return order(3000, ()=>console.log(`${stocks.Toppings[0]} was added as toppings`))
})

.then(()=>{
    return order(2000, ()=>console.log("ice cream served"))
})

.catch(()=>{
    console.log("Customer left")
})

.finally(()=>{
    console.log("End of day")
})