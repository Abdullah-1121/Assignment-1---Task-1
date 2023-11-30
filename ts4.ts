import inquirer from "inquirer"
let Grocery = await inquirer.prompt([// Grocery fetches user response whether it is fruits or vegetables
    {
        name : "Option",
        type : "string",
        message : "What would you like to buy fruits or vegetables"

    }

]) // Initializing all the prices of the grocery
let Total_Bill =0;
 let ApplePrice = 40;
 let MangoPrice = 150;
 let BananaPrice = 70;
 let OrangePrice = 90;
 let PotatoPrice = 20;
 let TomatoPrice = 40;
 let CarrotPrice = 30;
 let PeaPrice = 20;



// Checking the user input whether it is fruits or vegetables
if(Grocery.Option == 'fruits' || Grocery.Option =='Fruits' ){
    console.log('if you want to buy all fruits available you dont need to check all the boxes press enter and just enter the quantity ');
    console.log(`Available Vegetables are Apple = ${ApplePrice}, Mango = ${MangoPrice} , Orange= ${OrangePrice} , Banana= ${BananaPrice}`);
    
    let ResFruit = await inquirer.prompt([{ //User select the fruits
        name : 'Fruit_list',
        type : 'checkbox',
        choices : ["Apple" ,"Mango" , "Orange" , "Banana"]
    },{ // checking how many types of fruit he/she will buy
        name : 'quantity',
        type : 'number',
        message : 'How Many types of fruits you want to buy'

    }])
    
    
  
          //                   All         THE         COMBINATIONS

       if (ResFruit.Fruit_list.length == 1) {
        if (ResFruit.Fruit_list.includes('Apple') && ResFruit.quantity == 1) {
            
            Total_Bill = ApplePrice;
              console.log(`Successfull! You bought ${ResFruit.Fruit_list} and here is your total bill =$ ${Total_Bill}`);
        } else if (ResFruit.Fruit_list.includes('Orange') && ResFruit.quantity == 1) {
            Total_Bill = OrangePrice;
              console.log(`Successfull! You bought ${ResFruit.Fruit_list} and here is your total bill =$ ${Total_Bill}`);
        } else if (ResFruit.Fruit_list.includes('Mango') && ResFruit.quantity == 1) {
            Total_Bill = MangoPrice;
              console.log(`Successfull! You bought ${ResFruit.Fruit_list} and here is your total bill =$ ${Total_Bill}`);
        } else if (ResFruit.Fruit_list.includes('Banana') && ResFruit.quantity == 1) {
            Total_Bill = BananaPrice;
              console.log(`Successfull! You bought ${ResFruit.Fruit_list} and here is your total bill =$ ${Total_Bill}`);
        } else {
            console.log('invalid Input 1');
        }
    }

    if (ResFruit.Fruit_list.length == 2) {
        if ((ResFruit.Fruit_list.includes("Apple") && ResFruit.Fruit_list.includes("Mango")) && ResFruit.quantity == 2) {
            Total_Bill = ApplePrice + MangoPrice;
              console.log(`Successfull! You bought ${ResFruit.Fruit_list} and here is your total bill =$ ${Total_Bill}`);
        } else if ((ResFruit.Fruit_list.includes("Apple") && ResFruit.Fruit_list.includes("Banana")) && ResFruit.quantity == 2) {
            Total_Bill = ApplePrice + BananaPrice;
              console.log(`Successfull! You bought ${ResFruit.Fruit_list} and here is your total bill =$ ${Total_Bill}`);
        } else if ((ResFruit.Fruit_list.includes("Apple") && ResFruit.Fruit_list.includes("Orange")) && ResFruit.quantity == 2) {
            Total_Bill = ApplePrice + OrangePrice;
              console.log(`Successfull! You bought ${ResFruit.Fruit_list} and here is your total bill =$ ${Total_Bill}`);
        } else if ((ResFruit.Fruit_list.includes("Mango") && ResFruit.Fruit_list.includes("Banana")) && ResFruit.quantity == 2) {
            Total_Bill = MangoPrice + BananaPrice;
              console.log(`Successfull! You bought ${ResFruit.Fruit_list} and here is your total bill =$ ${Total_Bill}`);
        } else if ((ResFruit.Fruit_list.includes("Mango") && ResFruit.Fruit_list.includes("Orange")) && ResFruit.quantity == 2) {
            Total_Bill = MangoPrice + OrangePrice;
              console.log(`Successfull! You bought ${ResFruit.Fruit_list} and here is your total bill =$ ${Total_Bill}`);
        } else if ((ResFruit.Fruit_list.includes("Banana") && ResFruit.Fruit_list.includes("Orange"))  && ResFruit.quantity == 2) {
            Total_Bill = BananaPrice + OrangePrice;
              console.log(`Successfull! You bought ${ResFruit.Fruit_list} and here is your total bill =$ ${Total_Bill}`);
        } else {
            console.log("invalid Input 2");
        }
    }if(ResFruit.Fruit_list.length== 3 ){
        if(ResFruit.Fruit_list.includes('Apple')&&ResFruit.Fruit_list.includes('Mango')&&ResFruit.Fruit_list.includes('Banana')){
            Total_Bill = ApplePrice + MangoPrice + BananaPrice;
              console.log(`Successfull! You bought ${ResFruit.Fruit_list} and here is your total bill =$ ${Total_Bill}`);
        }else if(ResFruit.Fruit_list.includes('Apple')&&ResFruit.Fruit_list.includes('Banana')&&ResFruit.Fruit_list.includes('Orange')){
            Total_Bill = ApplePrice + OrangePrice + BananaPrice;
              console.log(`Successfull! You bought ${ResFruit.Fruit_list} and here is your total bill =$ ${Total_Bill}`);
        }else if(ResFruit.Fruit_list.includes('Mango')&&ResFruit.Fruit_list.includes('Apple')&&ResFruit.Fruit_list.includes('Orange')){
            Total_Bill = ApplePrice + MangoPrice +OrangePrice;
              console.log(`Successfull! You bought ${ResFruit.Fruit_list} and here is your total bill =$ ${Total_Bill}`);
        }else if(ResFruit.Fruit_list.includes('Mango')&&ResFruit.Fruit_list.includes('Banana')&&ResFruit.Fruit_list.includes('Orange')){
            Total_Bill = MangoPrice + OrangePrice + BananaPrice;
              console.log(`Successfull! You bought ${ResFruit.Fruit_list} and here is your total bill =$ ${Total_Bill}`);
        } else if(ResFruit.Fruit_list.includes('Mango')&&ResFruit.Fruit_list.includes('Orange')&&ResFruit.Fruit_list.includes('Apple')){
            Total_Bill = ApplePrice + MangoPrice + OrangePrice;
              console.log(`Successfull! You bought ${ResFruit.Fruit_list} and here is your total bill =$ ${Total_Bill}`);
        }
    }
  
    if (ResFruit.quantity === 4) {
        Total_Bill = ApplePrice + MangoPrice + OrangePrice + BananaPrice;
             console.log(`Successfull! You bought Apple , Mango , Orange and Banana and here is your total bill =$ ${Total_Bill}`);
      
        

      
    } else if(ResFruit.quantity>3&&ResFruit.quantity<5){
        Total_Bill = ApplePrice + MangoPrice + OrangePrice + BananaPrice;
             console.log(`Successfull! You bought Apple , Mango , Orange and Banana and here is your total bill =$ ${Total_Bill}`);
    }else {
        console.log("Thanks For Shopping ");
    }
    
    //         If user wants to buy vegetables
    } else if ( Grocery.Option == "vegetables" || Grocery.Option == "Vegetables"){
        console.log("Vegetables ");
        console.log(`Available Vegetables are Potato = ${PotatoPrice}, tomato = ${TomatoPrice} , carrot= ${CarrotPrice} , Pea = ${PeaPrice}`);
    
        let ResVeg = await inquirer.prompt([{
            name : 'Veg_list',
            type : 'checkbox',
            choices : ["Potato" ,"Tomato" , "carrot" , "Pea"]
        },{
            name : 'Quantity',
            type : 'number',
            message : 'How Many types of Vegetables you want to buy'
    
        }])
        let length : number = ResVeg.Veg_list.length;
        let list : string[] = ResVeg.Veg_list;
        let quantity2 : number = ResVeg.Quantity;
        // console.log(length , list , quantity2 );
        if (length== 1) {
            if (list.includes('Potato') && quantity2 == 1) {
                
                Total_Bill = PotatoPrice;
                  console.log(`Successfull! You bought ${list} and here is your total bill =$ ${Total_Bill}`);
            } else if (list.includes('Tomato') && ResVeg.Quantity == 1) {
                Total_Bill = TomatoPrice;
                  console.log(`Successfull! You bought ${list} and here is your total bill =$ ${Total_Bill}`);
            } else if (list.includes('carrot') && ResVeg.Quantity == 1) {
                Total_Bill =CarrotPrice;
                  console.log(`Successfull! You bought ${list} and here is your total bill =$ ${Total_Bill}`);
            } else if (list.includes('Pea') && ResVeg.Quantity == 1) {
                Total_Bill = PeaPrice;
                  console.log(`Successfull! You bought ${list} and here is your total bill =$ ${Total_Bill}`);
            } 
        } 
        if (length== 2) {
            if ((list.includes("Potato") && list.includes("Tomato")) && ResVeg.Quantity == 2) {
                Total_Bill = PotatoPrice + TomatoPrice;
                  console.log(`Successfull! You bought ${list} and here is your total bill =$ ${Total_Bill}`);
            } else if ((list.includes("Potato") && list.includes("Carrot")) && ResVeg.Quantity == 2) {
                Total_Bill = PotatoPrice + CarrotPrice;
                  console.log(`Successfull! You bought ${list} and here is your total bill =$ ${Total_Bill}`);
            } else if ((list.includes("Potato") && list.includes("Pea")) && ResVeg.Quantity == 2) {
                Total_Bill = PotatoPrice + PeaPrice;
                  console.log(`Successfull! You bought ${list} and here is your total bill =$ ${Total_Bill}`);
            } else if ((list.includes("Tomato") && list.includes("Carrot")) && ResVeg.Quantity == 2) {
                Total_Bill = TomatoPrice +CarrotPrice;
                  console.log(`Successfull! You bought ${list} and here is your total bill =$ ${Total_Bill}`);
            } else if ((list.includes("Tomato") && list.includes("Pea")) && ResVeg.Quantity == 2) {
                Total_Bill = TomatoPrice +PeaPrice;
                  console.log(`Successfull! You bought ${list} and here is your total bill =$ ${Total_Bill}`);
            } else if ((list.includes("Carrot") && list.includes("Pea")) &&   ResVeg.Quantity == 2) {
                Total_Bill =CarrotPrice +PeaPrice;
                  console.log(`Successfull! You bought ${list} and here is your total bill =$ ${Total_Bill}`);
            } else {
                console.log("invalid Input 2");
            }
    }if(length==3 ){
        
        if(list.includes('Potato')&&list.includes('Tomato')&&list.includes('carrot') ){
            Total_Bill = PotatoPrice + TomatoPrice +CarrotPrice;
              console.log(`Successfull! You bought ${list} and here is your total bill =$ ${Total_Bill}`);
        }else if(list.includes('Potato')&&list.includes('carrot')&&list.includes('Pea')){
            Total_Bill = PotatoPrice + CarrotPrice + PeaPrice;
              console.log(`Successfull! You bought ${list} and here is your total bill =$ ${Total_Bill}`);
        }else if(list.includes('Potato')&&list.includes('Tomato')&&list.includes('Pea')){
            Total_Bill = PotatoPrice + TomatoPrice + PeaPrice;
              console.log(`Successfull! You bought ${list} and here is your total bill =$ ${Total_Bill}`);
        }else if(list.includes('Tomato')&&list.includes('carrot')&&list.includes('Pea')){
            Total_Bill = TomatoPrice + CarrotPrice + PeaPrice;
              console.log(`Successfull! You bought ${list} and here is your total bill =$ ${Total_Bill}`);
        } else {
            console.log(list);

        }
         if (quantity2 === 4 ){
            console.log('Reached in 4')
            
                Total_Bill = PotatoPrice +TomatoPrice + CarrotPrice + PeaPrice;
                console.log(`Successfull! You bought ${list} and here is your total bill =$ ${Total_Bill}`);
    
            }
        }else if(quantity2>3 && quantity2 <5) {
            Total_Bill = PotatoPrice +TomatoPrice + CarrotPrice + PeaPrice;
            console.log(`Successfull! You bought ${list} and here is your total bill =$ ${Total_Bill}`);
        }
        
        
    }else {
        console.log("invalid");
    }
    if(Total_Bill > 150){ // Discount 40% if bill is above 150
        console.log("Congratulations! You have achieved 40 % Discount ");
        let DiscountedBill : number = Total_Bill*40/100;
        console.log(`Total Bill after Discount : ${DiscountedBill}`);
    }
    
        console.log('welcome to Checkout, these are some payment methods'); // Checkout Process
        
        // let Payres = await inquirer.prompt([{ // UserSelecting the payment method
        //     name : 'Pmeth',
        //     type : 'list',
        //     message : 'Select One Of the payment Method',
        //     choices : ['Paypal' , 'Erc20' , 'Bitcoin' , 'Pioneer']
        // }])
        // for (Payres.Pmeth in Payres){
        //     console.log(`You have paid successfully through ${Payres.Pmeth}`);
        // }
       let Payarr : string[] =['Paypal' , 'Bitcoin' , 'Erc20' , 'Pioneer'];
       for (let i = 0 ; i<Payarr.length ; i++){
        console.log(`${i + 1}- ${Payarr[i]}`);
       }
       let Payres = await inquirer.prompt([{ // UserSelecting the payment method
            name : 'Pmeth',
            type : 'list',
            message : 'Select One Of the payment Method',
            choices : ['Paypal' , 'Erc20' , 'Bitcoin' , 'Pioneer']
        }])
        if(Payres.Pmeth == 'Paypal' || Payres.Pmeth == 'paypal' ){
            console.log('You have paid Successfully with PayPal');
        }else  if(Payres.Pmeth == 'Bitcoin' || Payres.Pmeth == 'bitcoin' ){
            console.log('You have paid Successfully with Bitcoin');
        }else  if(Payres.Pmeth == 'erc20' || Payres.Pmeth == 'Erc20' ){
            console.log('You have paid Successfully with Erc20');
        }else  if(Payres.Pmeth == 'Pioneer' || Payres.Pmeth == 'pioneer' ){
            console.log('You have paid Successfully with Pioneer');
        }else {
            console.log(Payres.Pmeth);
        }

    
        
    
  

    
    

