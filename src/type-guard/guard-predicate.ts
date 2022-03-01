// Type Guards in function
type SmartWatch = {
    modelId:Number;
    modelName:String;
    brand:String;
    features:String[];
    price: Number;
    waterProof: true | false;
    __type: "Smart";
};


type AnalogWatch = {
    modelId:Number;
    modelName:String;
    brand:String;
    price:Number;
    waterProof: true | false;
    __type: "Analog";
}


const billingCounter = (watch : SmartWatch | AnalogWatch ) =>
{
    // using "type predicate",
    if(isSmartWatchType(watch))
    {
        console.log("Smart watch");
    }
    else
    {
        console.log("Analog Watch");
    }
}

const isSmartWatchType = (watch:SmartWatch | AnalogWatch): watch is SmartWatch =>
{
    return watch.__type == "Smart"
}

const watch:SmartWatch = {
    modelId:101,
    modelName:"GTS",
    brand:"Amazefit",
    features: ["Sports Mode","Sleep Tracking","GPS"],
    price:1000,
    waterProof:true,
    __type:"Smart"
}

const watchAnalog:AnalogWatch = {
    modelId:101,
    modelName:"GTS",
    brand:"Amazefit",
    price:1000,
    waterProof:true,
    __type:"Analog"
}

billingCounter(watchAnalog)

export {}