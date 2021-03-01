/* Your Code Here */

function createEmployeeRecord(employeeInfo){
    return {
        firstName: employeeInfo[0],
        familyName: employeeInfo[1],
        title: employeeInfo[2],
        payPerHour: employeeInfo[3],
        timeInEvents: [],
        timeOutEvents: []
    }
};


function createEmployeeRecords(arrayOfArrays){
    return arrayOfArrays.map( empArray => {
        return createEmployeeRecord(empArray)
    })
};


function createTimeInEvent(dateStamp){

    const timeIn = {
        type: "TimeIn",
        hour: parseInt(dateStamp.split(' ')[1]),
        date: dateStamp.split(' ')[0]
    }

    this.timeInEvents.push(timeIn)

    return this
};


function createTimeOutEvent(dateStamp){

    const timeOut = {
        type: "TimeOut",
        hour: parseInt(dateStamp.split(' ')[1]),
        date: dateStamp.split(' ')[0]
    }

    this.timeOutEvents.push(timeOut)

    return this
};


function hoursWorkedOnDate(workDate){
   let dateIn = this.timeInEvents.find( e => {return e.date === workDate} )
   let hourIn = dateIn.hour
   let dateOut = this.timeOutEvents.find( e => {return e.date === workDate} )
   let hourOut = dateOut.hour

   return (hourOut - hourIn) / 100
};


function wagesEarnedOnDate(workDate){
    const hoursWorked = hoursWorkedOnDate.call(this,workDate)
    return hoursWorked * this.payPerHour
};


function findEmployeeByFirstName(srcArray, firstName){
    return srcArray.find( source => source.firstName === firstName )
};


function calculatePayroll(arrayOfEmployees){
    return arrayOfEmployees.reduce( (total, employee) => {
        return total + allWagesFor.call(employee)
    }, 0)
};  

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}