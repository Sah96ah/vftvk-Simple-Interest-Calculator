function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;

    var i = p*r*y;
    var dt = new Date();
    var yt = dt.getFullYear()+y;
    
    document.getElementById("pr").innerHTML = "If your deposit "+p;
    document.getElementById("r").innerHTML = "at an interest rate of "+rate;
    document.getElementById("result").innerHTML = "You will recieve an amount of "+i;
    document.getElementById("yr").innerHTML = "in the year "+yt;
}
        
