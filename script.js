function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;

    if (p=="" || p<=0){
        window.alert('Enter any positive number')
        document.getElementById("principal").focus(); 
    }
    else{
        var i = (p*parseFloat(r)*y)/100;
        var dt = new Date();
        var yt = parseInt(dt.getFullYear())+parseInt(y);
        
        document.getElementById("pr").innerHTML = "If your deposit <mark>"+ p +"</mark>"
        document.getElementById("r").innerHTML = "at an Interest rate of <mark>"+ r +"%"+"</mark>"
        document.getElementById("result").innerHTML = "You will recieve an amount of <mark>"+ i +"</mark>"
        document.getElementById("yr").innerHTML = "in the year <mark>"+ yt +"</mark>"
    }
}
function updateTextInput(val) {
          document.getElementById('rangeInput').innerHTML = parseFloat(val) + "%"; 
}        
