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
    Fruits: ["strawberries", "raspberries", "bananas", "mango"],
    Holder: ["cone", "cup", "stick"],
    Toppings: ["chocolate", "sprinkles", "peanuts"],
    Liquid: ["water", "ice"]
}

let is_shop_open = false;

function time(ms) {
    return new Promise ((resolve, reject) =>{
        if(is_shop_open){
            setTimeout(resolve, ms);
        }
        else{
            reject(console.log("Shop is closed"))
        }
    });
}

async function kitchen(){
    try{
    await time(2000)
    console.log(`${stocks.Fruits[0]} was selected`)

    await time(0000)
    console.log("production has started")

    await time(2000)
    console.log("fruit has been chopped")

    await time(1000)
    console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]}`)
    
    await time(1000)
    console.log("start the machine")

    await time(2000)
    console.log(`ice cream was placed on ${stocks.Holder[0]}`)

    await time(3000)
    console.log(`${stocks.Toppings[0]} chosen as topping`)

    await time(2000)
    console.log("Ice cream served")
    }
    catch(error){
        console.log("customer left")
    }
    finally{
        console.log("Day ended, shop closed.")
    }
}

kitchen();