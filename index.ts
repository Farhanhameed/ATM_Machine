#! /usr/bin/env node

import inquirer from "inquirer";

let myPin = 1234;
let myBalance = 10000; // Amount in Dollar
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "Enter you pin",
    type: "number"
});

if (pinAnswer.pin === myPin){
    console.log("Welcome Farhan Abdul Hameed");

    let operationAns = await inquirer.prompt({
        name: "operations",
        message: "Please select option",
        type: "list",
        choices: ["Fast Cash", "Withdrawal", "Balance Enquiry"]
    })

    if (operationAns.operations === "Fast Cash"){
        let amountAns = await inquirer.prompt({
            name: "amount",
            message: "Please select the amount to withdraw",
            type: "list",
            choices: ["500", "1000", "5000", "10000"]
        })   
        
              if (amountAns.amount >= "10000"){
                console.log("Insufficient Balance");
                 } else  {
                myBalance -= amountAns.amount;

                console.log(`Your remaining balance is ${myBalance}`)
                }

            }

     else if (operationAns.operations === "Withdrawal"){
        let amountsWithd = await inquirer.prompt({
            name: "amounts",
            message: "Please enter the amount to withdraw",
            type: "number"
        })
            if (amountsWithd.amounts >= "10000"){
                    console.log("Insufficient Balance");
            }
            else  {
        myBalance -= amountsWithd.amounts;

        console.log(`Your remaining balance is ${myBalance}`)
            }
    }  // Withdrawal
        
    else if (operationAns.operations === "Balance Enquiry"){
            console.log(`Your current balance is ${myBalance}`)
        }
}

else{
    console.log("Incorrect pin");
}