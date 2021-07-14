function compute()
{
    var principlal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var year = new Date().getFullYear()+parseInt(years);

    if(principlal==""){
        alert("Amount field is required");
        document.getElementById("principal").focus();
    }

    else if(principlal<=0){
        var inpt = confirm("Enter a positive number");
        if(inpt==true){
            document.getElementById("principal").value=" "; 
            document.getElementById("principal").focus(); 
        }
    }
    else{
        var interest = principlal*years*rate/100;
        document.getElementById("result").innerHTML = "<p>If you deposit \<mark>" +principlal+"\</mark>,\<br\> at an interest rate of \<mark>"+rate+ "\</mark>%,\<br\> You will receive an amount of \<mark>"+interest+"\</mark>,\<br\>in the year \<mark>"+year+"\</mark>.</p>"
       
    }
}
        
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
} 
