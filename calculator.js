let num1=document.getElementById('number1')
let num2=document.getElementById('number2')
document.getElementById('add').addEventListener('click',function (){
    add(num1.value,num2.value);
})
document.getElementById('subtract').addEventListener('click', function () {
    sub(num1.value, num2.value);
});
document.getElementById('multiply').addEventListener('click', function () {
    mul(num1.value, num2.value);
});
document.getElementById('divide').addEventListener('click', function () {
    divd(num1.value, num2.value);
});

function add(num1,num2){
    let sum=Number(num1)+Number(num2)
    document.getElementById('calculation-result').innerText=sum
}


function sub(num1,num2){
    let difference = Number(num1) - Number(num2);
    document.getElementById('calculation-result').innerText=difference
}
function mul(num1,num2){
    let mul=Number(num1)*Number(num2)
    document.getElementById('calculation-result').innerText=mul
}
function divd(num1, num2){
    if(num2==0){
        document.getElementById('calculation-result').innerText="error"
    }
    else{
        let d=Number(num1)/Number(num2)
        document.getElementById('calculation-result').innerText=d
    }
}
