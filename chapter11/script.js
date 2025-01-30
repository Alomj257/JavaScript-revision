const employee = {
    calcTax(){
        console.log("Tax rate is 10%")
    }
};

const karanArjun = {
    salary: 50000,
    calTax() {
        console.log("Tax rate is 20%")
    }
};

karanArjun.__proto__ = employee;
