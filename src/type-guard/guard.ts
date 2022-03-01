// Type Guards in function

type SmartWatch = {
    modelId:Number;
    modelName:String;
    brand:String;
    features:String[];
    price: Number;
    waterProof: true | false;
};


type AnalogWatch = {
    modelId:Number;
    modelName:String;
    brand:String;
    price:Number;
    waterProof: true | false;
}


const billingCounter = (watch : SmartWatch | AnalogWatch ) =>
{
    // using "in" operator
    // if("features" in watch)
    // {
    //     console.log("Smart Watch")
    // }
    // else
    // {
    //     console.log("Analog Watch")
    // }
    
    // using "as" operator
    if(isSmartWatch(watch))
    {
        console.log("Smart watch");
    }
    else
    {
        console.log("Analog Watch");
    }
}

// using "as" - type assertion
const isSmartWatch = (watch: SmartWatch | AnalogWatch) =>
{
    return (watch as SmartWatch).features != undefined; 
}

const watch:AnalogWatch = {
    modelId:101,
    modelName:"GTX",
    brand:"Amazefit",
    // features: ["Sports Mode","Sleep Tracking","GPS"],
    price:1000,
    waterProof:true
}

billingCounter(watch)