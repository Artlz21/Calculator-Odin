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

(() => {
    calcFun();
})
();