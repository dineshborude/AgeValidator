function ageChecker(){

    var age = document.getElementById("input").value;
    if(age > 18)
    {
        document.getElementById("print").innerText="Eligible";
    }
    else
    {
        document.getElementById("print").innerText="Go....Get A Age!";
    }

}