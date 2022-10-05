function calc(){

    const x = parseInt(document.querySelector("#value1").value);
    const y = parseInt(document.querySelector("#value2").value);
    const ope = document.querySelector("#operator").value;
    
    let calculate;

    if (ope == "add") {
        calculate = x + y;
    }else if(ope == "minus") {
        calculate = x - y;
    }else if(ope == "multiply") {
        calculate = x * y;
    }else if (ope == "divide") {
        calculate = x / y;
    }
    document.querySelector("#equals").innerHTML = calculate;
}