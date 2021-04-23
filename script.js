function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;

    var i = p*parseFloat(r)*y;
    var dt = new Date();
    var yt = parseInt(dt.getFullYear())+parseInt(y);
    
    document.getElementById("pr").innerHTML = "If your deposit "+p;
    document.getElementById("r").innerHTML = "At an interest rate of "+ r +"%";
    document.getElementById("result").innerHTML = "You will recieve an amount of "+i;
    document.getElementById("yr").innerHTML = "In the year "+yt;
}
function updateTextInput(val) {
          document.getElementById('rangeInput').innerHTML = parseFloat(val) + "%"; 
}        
