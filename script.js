let totalWord = document.querySelector('.word-count');
let totalChar = document.querySelector('.char-count');
const text = document.querySelector('.words');

function WordCount(str){
    return str.split(" ");
}

function isWord(str){
    let alphaNumericFound = false;
    for(let i =0; i<str.length; i++){
        let code = str.charCodeAt(i);
        if((code > 47 && code < 58) || (code > 64 && code < 91) || (code > 96 && code < 123)){
            alphaNumericFound = true;
            return alphaNumericFound;
        }
    }
    return alphaNumericFound;
}

const container = document.querySelector('.container');
container.addEventListener('click',function(e){
    if(e.target.className == "submit-btn"){
        let textBox = document.querySelector('.words').value;

        let count = 0;
        let split = WordCount(textBox);
        for(let i=0; i<split.length; i++){
            if(split[i] !== "" && isWord(split[i]) && split[i]!== " "){
                count++;
            }
        }

        if(textBox == ""){
            totalWord.innerHTML = "The Words = 0";
            totalChar.innerHTML = "The Characters = 0";
            return;
        }
        else if(count == 1){
            totalWord.innerHTML = "The Word = "+ count;
        }
        else{
            totalWord.innerHTML = "The Words = "+ count;
        }

        if(textBox.length == 1){
            totalChar.innerHTML = "The Character = "+ textBox.length;
        }
        else{
            totalChar.innerHTML = "The Characters = "+ textBox.length;
        }

        text.classList.add('textbox-color');
    }
    else if(e.target.className != "submit-btn" && e.target.className != "words"){
        text.classList.remove('textbox-color');
    }
});