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

let order = (fruit_name, call_production) =>{

    setTimeout(function(){
        console.log(`${stocks.Fruits[fruit_name]} were selected`)
        call_production();
    }, 2000)
};

let production = () =>{

    setTimeout(()=>{
        console.log("production has begun")

        setTimeout(()=>{
            console.log("The fruit has been chopped")

            setTimeout(()=>{
                console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} have been added`)

                setTimeout(()=>{
                    console.log("Machine has been started")

                    setTimeout(()=>{
                        console.log(`${stocks.Holder[0]} was chosen`)

                        setTimeout(()=>{
                            console.log(`${stocks.Toppings[0]} was chosen`)

                            setTimeout(()=>{
                                console.log("Ice cream has been served.")
                            }, 2000)
                        }, 3000)
                    }, 2000)
                }, 1000)
            }, 1000)
        }, 2000)
    }, 0000)
};

order(0, production);

