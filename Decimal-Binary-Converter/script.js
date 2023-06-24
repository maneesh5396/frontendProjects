//Initial references
let decInp = document.getElementById("dec-inp");
let binInp = document.getElementById("bin-inp");
let errMsg = document.getElementById("err-msg");

// Convert decimal to binary, when user inputs in the decimal field
decInp.addEventListener('input', () => {
    let decValue = parseInt(decInp.value);
    errMsg.textContent = "";
    if(decValue < 0){
        errMsg.textContent = "Please enter a positive number"
    }else{
        //converts the decimal value into binary value
        binInp.value = decValue.toString(2);
    }
})

// Convert binary to decimal, when user inputs in the binary field
binInp.addEventListener('input', () => {
    let binValue = binInp.value;
    // If the binary number is valid then convert it to decimal
    if(binaryValidator(binValue)){
        decInp.value = parseInt(binValue, 2);
        errMsg.textContent = "";
    }
    // else display the error msg
    else{
        errMsg.textContent = "Please Enter An Valid Binary Input";
    }
})

function binaryValidator(num){
    for(let i=0; i<num.length; i++){
        if(num[i] != '0' && num[i] != 1){
            return false
        }
    }
    return true;
}