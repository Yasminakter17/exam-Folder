
function calc(){
var n1 = parseFloat (document.getElementById('number1').value);
var n2 = parseFloat (document.getElementById('number2').value);
var oper= document.getElementById('opaerator').value;
var error = document.getElementById('error');
var error2 = document.getElementById('error2');
var result = document.getElementById('result');


 if(isNaN(n1)|| isNaN(n2)){
    error.textContent = 'please enter valid number';
    result.textContent = "";
    return;
}

 else if(oper == '+'){
    document.getElementById('result').value = n1+n2;  
}
else if(oper == '-'){
    document.getElementById('result').value = n1-n2;
}
else if(oper =='*'){
    document.getElementById('result').value = n1*n2;
}
else if(oper =='/' && n2 === 0){
    document.getElementById('error').innerHTML = "this number is not valid";
 }else{
    document.getElementById('result').value =  n1/n2;
 }
}

