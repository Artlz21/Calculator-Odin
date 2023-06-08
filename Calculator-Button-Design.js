const topRow = () => {
    let topRow = document.querySelector(".top-row");
    let button = topRow.querySelector(".calc-button");

    for(let i = 1; i < 4; i++){
        let newButton = button.cloneNode(true);
        topRow.appendChild(newButton);

        if(i == 1){
            newButton.innerText ="C";
        }
        else if(i == 2){
            newButton.innerText ="%";
        }
        else{
            newButton.innerText ="+";
        }
    }
}

const midRow = () => {
    let midRow = document.querySelector(".mid-row");
    let button = midRow.querySelector(".calc-button");


    for(let i = 1; i < 12; i++){
        let newButton = button.cloneNode(true);
        midRow.appendChild(newButton);

        switch(i){
            case 1:
                newButton.innerText ="2";
                break;
            case 2:
                newButton.innerText ="3";
                break;
            case 3:
                newButton.innerText ="-";
                break;
            case 4:
                newButton.innerText ="4";
                break;
            case 5:
                newButton.innerText ="5";
                break;
            case 6:
                newButton.innerText ="6";
                break;
            case 7:
                newButton.innerText ="*";
                break;
            case 8:
                newButton.innerText ="7";
                break;
            case 9:
                newButton.innerText ="8";
                break;
            case 10:
                newButton.innerText ="9";
                break;
            case 11:
                newButton.innerText ="/";
                break;
        }
    }
}

const bottomRow = () => {
    let bottomRow = document.querySelector(".bottom-row");
    let button = bottomRow.querySelector(".calc-button");

    for(let i = 1; i < 3; i++){
        let newButton = button.cloneNode(true);
        bottomRow.appendChild(newButton);

        if(i == 1){
            newButton.innerText ="0";
        }
        else if(i == 2){
            newButton.innerText ="=";
        }
    }

    let eqButton = bottomRow.getElementsByClassName("calc-button");

    eqButton[2].style.width = "123px";
}

(() => {
    topRow();
    midRow();
    bottomRow();
})
();
