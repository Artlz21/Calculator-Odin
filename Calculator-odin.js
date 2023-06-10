// Array to store all values entered by user, and respective values for operator and operands
let valueEntered = [];
let firstValue, secondValue, thirdValue;

// Passes in value from button pressed and performs respective function
const assembleValues = (value) => {
    let number = "";
    let display = document.querySelector(".calc-output");

    if(display.value.includes("=")){
        Display("AC");
    }

    // If a . is entered and one is in the array already the function returns doing nothing
    if(value == "." && valueEntered.includes(".")){
        return;
    }

    // If an operator is entered assigns to the respective value the contents of array after convertion
    if(value == "+" || value == "-" || value == "*" || value == "/" || value == "^2" || value == "="){
        if((secondValue == "+" || secondValue == "-" || secondValue == "*" || 
        secondValue == "/" || secondValue == "^2") && value != "="){
            return;
        }

        // If an operator is entered and nothing is present in the firstValue and array return
        if(!firstValue && valueEntered.length == 0){
            return;
        }

        // Join together each index of the array as a string assign to number
        number = valueEntered.join("");

        // if a . is present in the string convert to float else to int
        if(number.includes(".")){
            number = parseFloat(number);
        }
        else{
            number = parseInt(number);
        }

        // if firstValue is empty assign to firstValue else if thirdValue is empty assign there
        if(!firstValue){
            firstValue = number;
            console.log(firstValue)
        }
        else if(!thirdValue){
            thirdValue = number;
            console.log(thirdValue)
        }
    }

    // if a value is in firstValue and an operator is entered perform operator assigning
    if(value == "+" || value == "-" || value == "*" || value == "/" || value == "^2"){
        // assigns operator to secondValue
        secondValue = value;

        // if ^ is entered pass firstValue to calcFunction as both operands with * operator 
        if(secondValue == "^2"){
            secondValue = "*"
            display.value = display.value + "=";
            calcFun(firstValue,firstValue,secondValue);

            // clear array and values then return
            valueEntered = [];
            firstValue = null;
            secondValue = null;
            thirdValue = null;
            return;
        }
        
        // after assigning operator clear array 
        valueEntered = [];
        console.log(secondValue)
    }
    // if a number or . is entered push into array
    else{
        valueEntered.push(value);
        console.log(valueEntered)
    }

    // display value that is entered
    if(value == "AC"){
        Display(value);
        return;
    }
    else{
        Display(value);
    }
    console.log(value)

    // if = operator is entered perform calcFun with operators and operand then clear values and array
    if(value == "="){
        calcFun(firstValue, thirdValue, secondValue);
        valueEntered = [];
        firstValue = null;
        secondValue = null;
        thirdValue = null;
        return;
    }
}

const addFun = (firstInput, secondInput) => {
    return(firstInput + secondInput)
}

const subFun = (firstInput, secondInput) => {
    return(firstInput - secondInput);
}

const mulFun = (firstInput, secondInput) => {
    return(firstInput * secondInput);
}

const divFun = (firstInput, secondInput) => {
    return(firstInput / secondInput);
}

const calcFun = (firstNum, secondNum, operator) => {
    let result = 0;

    switch(operator){
        case "+":
            result = addFun(firstNum, secondNum);
            break;
        case "-":
            result = subFun(firstNum, secondNum);
            break;
        case "*":
            result = mulFun(firstNum, secondNum);
            break;
        case "/":
            result = divFun(firstNum, secondNum);
            break;
    }

    Display(result);
}

const Display = (buttonPressed) => {
    const display = document.querySelector(".calc-output");

    if(buttonPressed == "AC"){
        display.value = "0";
        valueEntered = [];
        firstValue = null;
        secondValue = null;
        thirdValue = null;
        return;
    }

    if(display.value == "0"){
        display.value = buttonPressed;
    }
    else{
        display.value = display.value + buttonPressed;
    }

}

const addEvent = () => {
    let buttons = document.getElementsByClassName("calc-button");

    Array.from(buttons).forEach(e => {
        e.addEventListener("click", () => {
            assembleValues(e.innerText)
        })
    });
}

(() => {
    addEvent();
})
();