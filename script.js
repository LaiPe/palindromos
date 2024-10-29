document.addEventListener("DOMContentLoaded", function() {
    const textInput = document.getElementById("text-input");
    const checkButton = document.getElementById("check-btn");
    const textResult = document.getElementById("result");

    function clearInput(input){
        input.value = "";
    }

    function cleanStr(srt){
        return srt.toLowerCase().replace(/[^a-z0-9]/gi,'');
    }

    function isPalindrome(input){
        const mot = cleanStr(input.value);
        for (let i = 0; i < Math.floor(mot.length/2); i++){
            if (mot[i] != mot[mot.length - i - 1]){
                return false;
            }
        }
        return true;
    }



    checkButton.addEventListener("click", () => {
        if (textInput.value == "") {
            alert("Please input a value");
        }
        else if (isPalindrome(textInput)) {
            textResult.innerHTML = `<strong>${textInput.value}</strong> is a palindrome`
        }
        else {
            textResult.innerHTML = `<strong>${textInput.value}</strong> is not a palindrome`
        }

        clearInput(textInput)
    }); 
});