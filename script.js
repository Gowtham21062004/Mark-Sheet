let sum1 = 0;
let sum2 = 0;
let  sum3 = 0;
let sum4 = 0;
let sum5 = 0;
let sum6 = 0;

function add1(){
    let n1 = document.getElementById('val1').value;
    let n2 = document.getElementById('val2').value;
    if(n1 > 90){
        alert("Theory mark should be less than 90");
        document.getElementById('val1').value = "";
        return;
    }
    if(n2 > 10){
        alert("Practical mark should be less than 10");
        document.getElementById('val2').value = "";
        return;
    }
    sum1 = Number(n1)+Number(n2);
    document.getElementsByClassName('tot-1')[0].innerHTML = Number(n1)+Number(n2);
}
function add2(){
    let n1 = document.getElementById('val3').value;
    let n2 = document.getElementById('val4').value;
    if(n1 > 90){
        alert("Theory mark should be less than 90");
        document.getElementById('val1').value = "";
        return;
    }
    if(n2 > 10){
        alert("Practical mark should be less than 10");
        document.getElementById('val2').value = "";
        return;
    }
    sum2 = Number(n1)+Number(n2);
    document.getElementsByClassName('tot-2')[0].innerHTML = Number(n1)+Number(n2);
}
function add3(){
    let n1 = document.getElementById('val5').value;
    let n2 = document.getElementById('val6').value;
    if(n1 > 90){
        alert("Theory mark should be less than 90");
        document.getElementById('val1').value = "";
        return;
    }
    if(n2 > 10){
        alert("Practical mark should be less than 10");
        document.getElementById('val2').value = "";
        return;
    }
    sum3 = Number(n1)+Number(n2);
    document.getElementsByClassName('tot-3')[0].innerHTML = Number(n1)+Number(n2);
}
function add4(){
    let n1 = document.getElementById('val7').value;
    let n2 = document.getElementById('val8').value;
    if(n1 > 90){
        alert("Theory mark should be less than 90");
        document.getElementById('val1').value = "";
        return;
    }
    if(n2 > 10){
        alert("Practical mark should be less than 10");
        document.getElementById('val2').value = "";
        return;
    }
    sum4 = Number(n1)+Number(n2);
    document.getElementsByClassName('tot-4')[0].innerHTML = Number(n1)+Number(n2);
}
function add5(){
    let n1 = document.getElementById('val9').value;
    let n2 = document.getElementById('val10').value;
    if(n1 > 90){
        alert("Theory mark should be less than 90");
        document.getElementById('val1').value = "";
        return;
    }
    if(n2 > 10){
        alert("Practical mark should be less than 10");
        document.getElementById('val2').value = "";
        return;
    }
    sum5 = Number(n1)+Number(n2);
    document.getElementsByClassName('tot-5')[0].innerHTML = Number(n1)+Number(n2);
}
function add6(){
    let n1 = document.getElementById('val11').value;
    let n2 = document.getElementById('val12').value;
    if(n1 > 90){
        alert("Theory mark should be less than 90");
        document.getElementById('val1').value = "";
        return;
    }
    if(n2 > 10){
        alert("Practical mark should be less than 10");
        document.getElementById('val2').value = "";
        return;
    }
    sum6 = Number(n1)+Number(n2);
    document.getElementsByClassName('tot-6')[0].innerHTML = Number(n1)+Number(n2);
    if(sum1 && sum2 && sum3 && sum4 && sum5 && sum6){
                calculate();
            }
}

function calculate() {
    let total = sum1 + sum2 + sum3 + sum4 + sum5 + sum6;
    document.getElementById('grand-tot').innerHTML = total;   
    let percentage = (total/6)*100;
    document.getElementById('percentage').innerHTML = percentage;
    if(percentage > 50.0){
        document.getElementById('result').innerHTML = "PASS"
    }          
    else{
        document.getElementById('result').innerHTML = "FAIL"
    }

    let grade;
    if(percentage > 90){
        grade = "A+";
    }
    else if(percentage > 80){
        grade = "A";
    }
    else if(percentage > 70){
        grade = "B+";
    }
    else if(percentage > 60){
        grade = "B";
    }
    else if(percentage > 50){
        grade = "c"
    }
    else{
        grade = "No Grade";
    }

    document.getElementById('grade').innerHTML = grade;
}
