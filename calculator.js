function getTambah(){   
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var num1 = parseFloat(number1);
    var num2 = parseFloat(number2);
    hasil = num1+num2;
    if(isNaN(hasil)==true){
        alert("Input First Number and Second Number");
    }else{
        document.getElementById("operator").innerHTML = "+";
        document.getElementById("hasil").value = hasil;
    }
}  
  function getKurang(){  
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var num1 = parseFloat(number1);
    var num2 = parseFloat(number2);
    hasil = num1-num2;
    if(isNaN(hasil)==true){
        alert("Input First Number and Second Number");
    }else{
    document.getElementById("operator").innerHTML = "-";
    document.getElementById("hasil").value = hasil;
    }
  }  
  function getKali(){  
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var num1 = parseFloat(number1);
    var num2 = parseFloat(number2);
    hasil = num1*num2;
    if(isNaN(hasil)==true){
        alert("Input First Number and Second Number");
    }else{
    document.getElementById("operator").innerHTML = "x";
    document.getElementById("hasil").value = hasil;
    }
  }

  function getBagi(){
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var num1 = parseFloat(number1);
    var num2 = parseFloat(number2);
    hasil = num1/num2;
    if(isNaN(hasil)==true){
        alert("Input First Number and Second Number");
    }else{
        document.getElementById("operator").innerHTML = ":";
        
        if(hasil == Infinity || hasil == -Infinity){
            document.getElementById("hasil").value ="Cannot Divided by 0";
            alert("Cannot Divided by 0");
        }else{
            document.getElementById("hasil").value = hasil;
        }
    }
  }

  function Reset(){
    var number1 = document.getElementById("number1").value='';
    var number2 = document.getElementById("number2").value='';
    document.getElementById("operator").innerHTML = '';
    document.getElementById("hasil").value = '';

  }
