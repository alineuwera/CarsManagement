const {add,display,update,updateMany,remove} = require('./controller/carcontroller');

//add new cars

let newCar = 
    {
        model : "LAND CRUISER",
        manufacturingYear : "2002",
        CarOwner : "Hirwa Dari",
        color : "blue",
        cost : "500000",
        
    };
    //display
    display();
    //add new car
    add(newCar);
    //update
    update("RAC234D","manufacturingYear",2000);

    //update many

    let tobeupdated = {
        model: "Benz",
        CarOwner: "Eric Hirwa",
        cost :"7000000",
    };
    updateMany("RAC234D",tobeupdated);

    //remove

    remove("RAC234D");
