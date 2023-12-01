const {cars} = require('../db/cardatabase');


//add
const add = (newCar) => {
    let newPlateNumber = "RAA112E";
    newCar.plateNumber = newPlateNumber;
    cars.push(newCar);
    console.log('\nAfter Added a new car');
    console.log(cars);
}

//display

const display = () => {
    console.log('\nDisplaying all cars in the database');
    console.log(cars);
}

//update

const update = (plateNumber,key,value) =>{
    console.log('\nBefore UpdatingOne ----------------------------------------------------------------');
    var exists = cars.find(Element=>Element.plateNumber === plateNumber);
    console.log(exists);
    if(!exists){
    console.log('\n There are no cars in the database');
}else{
    if(key === "model" || key === "manufacturingYear" || key === "CarOwner" || key === "color" || key === "cost"){
        exists[key] = value;
        console.log('\n after updated');
        console.log(exists);
    }}
};

//update many

const updateMany = (plateNumber,obj) => {
    console.log('\nBefore UpdatingMany ----------------------------------------------------------------');
    var exists = cars.find(Element=>Element.plateNumber === plateNumber);
    console.log(exists);
    if(!exists){
    console.log('\n There are no cars in the database');
}else{
    for (const key in obj) {
        exists[key] = obj[key];
    }
       
        console.log('\n after updated');
        console.log(exists);    
        }
    
}

//remove

const remove = (plateNumber) => {
    console.log('\nBefore Removing ----------------------------------------------------------------');
    var exists = cars.find(Element=>Element.plateNumber === plateNumber);
    console.log(exists);
    if(!exists){
    console.log('\n There are no cars in the database');
}else{
    var n= cars.indexOf(exists);
    cars.splice(n,1);
    console.log('\n after removed');
    console.log(cars);
}
}
module.exports = {
    add,
    display,
    update,
    updateMany,
    remove
};