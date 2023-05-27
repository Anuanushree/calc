let h = document.createElement('h2');
h.textContent = "CALCULATOR";
document.body.appendChild(h);

let d = document.createElement('table');
d.setAttribute("class", "container mt-5");
d.setAttribute("id", "calculator");
document.body.appendChild(d);


let tablerow4 = document.createElement('tr');

let btntext = document.createElement('input');
btntext.setAttribute("type", "text");
btntext.setAttribute("id", "result");
btntext.setAttribute("class", "display-box form-control m-3 number");
btntext.style.width = "90%";

tablerow4.appendChild(btntext);


document.getElementById('calculator').appendChild(tablerow4);

let tablerow = document.createElement('tr');
let btn1 = document.createElement('input');
btn1.setAttribute("value", "1");
btn1.setAttribute("type", "button")
btn1.setAttribute("onclick", "display('1')");
tablerow.appendChild(btn1);

let btn2 = document.createElement('input');
btn2.setAttribute("type", "button")
btn2.setAttribute("value", "2");
btn2.setAttribute("onclick", "display('2')");
tablerow.appendChild(btn2);

let btn3 = document.createElement('input');
btn3.setAttribute("type", "button")
btn3.setAttribute("value", "3");
btn3.setAttribute("onclick", "display('3')");
tablerow.appendChild(btn3);

let btndiv = document.createElement('input');
btndiv.setAttribute("type", "button")
btndiv.setAttribute("value", "/");
btndiv.setAttribute("onclick", "display('/')");
tablerow.appendChild(btndiv);

document.getElementById('calculator').appendChild(tablerow);

let tablerow1 = document.createElement('tr');
let btn4 = document.createElement('input');
btn4.setAttribute("type", "button")
btn4.setAttribute("value", "4");
btn4.setAttribute("onclick", "display('4')");
tablerow1.appendChild(btn4);

let btn5 = document.createElement('input');
btn5.setAttribute("type", "button")
btn5.setAttribute("value", "5");
btn5.setAttribute("onclick", "display('5')");
tablerow1.appendChild(btn5);

let btn6 = document.createElement('input');
btn6.setAttribute("type", "button")
btn6.setAttribute("value", "6");
btn6.setAttribute("onclick", "display('6')");
tablerow1.appendChild(btn6);

let btnmul = document.createElement('input');
btnmul.setAttribute("type", "button")
btnmul.setAttribute("value", "*");
btnmul.setAttribute("onclick", "display('*')");
tablerow1.appendChild(btnmul);

document.getElementById('calculator').appendChild(tablerow1);

let tablerow2 = document.createElement('tr');
let btn7 = document.createElement('input');
btn7.setAttribute("type", "button")
btn7.setAttribute("value", 7);
btn7.setAttribute("onclick", "display('7')");
tablerow2.appendChild(btn7);

let btn8 = document.createElement('input');
btn8.setAttribute("type", "button")
btn8.setAttribute("value", 8);
btn8.setAttribute("onclick", "display('8')");
tablerow2.appendChild(btn8);

let btn9 = document.createElement('input');
btn9.setAttribute("type", "button")
btn9.setAttribute("value", 9);
btn9.setAttribute("onclick", "display('9')");
tablerow2.appendChild(btn9);

let btnplus = document.createElement('input');
btnplus.setAttribute("type", "button")
btnplus.setAttribute("value", "+");
btnplus.setAttribute("onclick", "display('+')");
tablerow2.appendChild(btnplus);

document.getElementById('calculator').appendChild(tablerow2);

let tablerow3 = document.createElement('tr');
// let btndot = document.createElement('input');
// btndot.setAttribute("type", "button")
// btndot.setAttribute("value", ".");
// btndot.setAttribute("onclick", "display('.')");
// tablerow3.appendChild(btndot);

let btnclr = document.createElement('input');
btnclr.setAttribute("value", "C");
btnclr.setAttribute("type", "button")
btnclr.setAttribute("id", "btn")
btnclr.setAttribute("onclick", "clearscreen()");
tablerow3.appendChild(btnclr);

let btnzero = document.createElement('input');
btnzero.setAttribute("type", "button")
btnzero.setAttribute("value", "0");
btnzero.setAttribute("onclick", "display('0')");
tablerow3.appendChild(btnzero);

let btnmin = document.createElement('input');
btnmin.setAttribute("type", "button")
btnmin.setAttribute("value", "-");
btnmin.setAttribute("onclick", "display('-')");
tablerow3.appendChild(btnmin);

let btnequal = document.createElement('input');
btnequal.setAttribute("type", "button")
btnequal.setAttribute("value", "=");
btnequal.setAttribute("onclick", "calculate()");
tablerow3.appendChild(btnequal);

document.getElementById('calculator').appendChild(tablerow3);


function clearscreen() {
    document.getElementById("result").value = "0";
}


function display(value) {
    document.getElementById("result").value += value;

}


function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
let pr = document.createElement('pr');
pr.setAttribute('id', "p1");
document.body.appendChild(pr);



btntext.addEventListener("keypress", function (event) {
    if (isFinite(event.key) || event.key == "+" || event.key == "-" || event.key == "/" || event.key == "*"
        || event.key == "." || event.key == "Backspace" || event.key == "Enter") {
        if (event.key == "Enter") {
            calculate();
        }
    } else {
        alert(" pls, remove the invalid input and Enter Valid Input");  
        let existing_value = document.getElementById('result').value;
        document.getElementById('result').value = existing_value.substring(0, existing_value.length - 1);
             
       
        console.log(event.key)

    }
   
})
