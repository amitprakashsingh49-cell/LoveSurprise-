function addNum(num){
    let input = document.getElementById("pass");
    if(input.value.length < 4){
        input.value += num;
    }
}

function clearPass(){
    let input = document.getElementById("pass");
    input.value = input.value.slice(0,-1);
}

function checkPassword(){

    let pass = document.getElementById("pass").value;

    if(pass === "0203"){
        window.location.href = "question.html";
    }else{

        document.getElementById("wrongGif").style.display = "flex";

        setTimeout(function(){
            document.getElementById("wrongGif").style.display = "none";
            document.getElementById("pass").value = "";
        },1500);

    }

}