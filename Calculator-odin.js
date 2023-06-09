let valueEntered = [];
let firstValue, secondValue, thirdValue;

const assembleValues = (value) => {
    let number = "";

    if(value == "+" || value == "-" || value == "*" || value == "/" || value == "^" || value == "="){

        number = valueEntered.join("");

        if(number.includes(".")){
            number = parseFloat(number);
        }
        else{
            number = parseInt(number);
        }

        if(!firstValue){
            firstValue = number;
        }
        else if(!thirdValue){
            thirdValue = number;
        }
    }

    if(value == "+" || value == "-" || value == "*" || value == "/" || value == "^"){
        secondValue = value;
        valueEntered = [];
    }
    else{
        valueEntered.push(value);
    }

    if(value == "="){
        console.log(firstValue)
        console.log(secondValue)
        console.log(thirdValue)

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

    console.log(result);
}

const display = (buttonPressed) => {
    
}

const addEvent = () => {
    let buttons = document.getElementsByClassName("calc-button");

    Array.from(buttons).forEach(e => {
        e.addEventListener("click", () => {
            assembleValues(e.innerText)
            console.log(e.innerText);
            console.log(valueEntered)
        })
    });
}

(() => {
    addEvent();
})
();