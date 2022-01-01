document.getElementById("button").addEventListener("click", function(){
    var name = document.getElementById("nameId").value;
    var rule1 = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
    var email = document.getElementById("emailId").value;
    var rule2 = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var textArea = document.getElementById("textAreaId").value;
    var rule3 = /[\S][^\w\d.*]*/;

    if(rule1.test(name) && rule2.test(email) && rule3.test(textArea) == true){
        document.getElementById("contactForm").submit();
    }

    else{

        if(rule1.test(name)){
            document.getElementById("nameSpan").style.color = "green";
            document.getElementById("nameSpan").style.transform = "scale(1.05)";
            document.getElementById("nameSpan").style.transition = "0.2s";
            document.getElementById("nameSpan").innerHTML = "Looking Good!";
        }
    
        else if(name.length == 0){
            document.getElementById("nameSpan").style.color = "blue";
            document.getElementById("nameSpan").style.transform = "scale(1.05)";
            document.getElementById("nameSpan").style.transition = "0.2s";
            document.getElementById("nameSpan").innerHTML = "It's Empty!";
        }
            
        else{
            document.getElementById("nameSpan").style.color = "red";
            document.getElementById("nameSpan").style.transform = "scale(1.05)";
            document.getElementById("nameSpan").style.transition = "0.2s";
            document.getElementById("nameSpan").innerHTML = "Invalid Input!";
        }
    
        if(rule2.test(email)){
            document.getElementById("emailSpan").style.color = "green";
            document.getElementById("emailSpan").style.transform = "scale(1.05)";
            document.getElementById("emailSpan").style.transition = "0.2s";
            document.getElementById("emailSpan").innerHTML = "Looking Good!";
        }
    
        else if(email.length == 0){
            document.getElementById("emailSpan").style.color = "blue";
            document.getElementById("emailSpan").style.transform = "scale(1.05)";
            document.getElementById("emailSpan").style.transition = "0.2s";
            document.getElementById("emailSpan").innerHTML = "It's Empty!";
        }
            
        else{
            document.getElementById("emailSpan").style.color = "red";
            document.getElementById("emailSpan").style.transform = "scale(1.05)";
            document.getElementById("emailSpan").style.transition = "0.2s";
            document.getElementById("emailSpan").innerHTML = "Invalid Input!";
        }
    
        if(rule3.test(textArea)){
            document.getElementById("textAreaSpan").style.color = "green";
            document.getElementById("textAreaSpan").style.transform = "scale(1.05)";
            document.getElementById("textAreaSpan").style.transition = "0.2s";
            document.getElementById("textAreaSpan").innerHTML = "Looking Good!";
        }
    
        else if(textArea.length == 0){
            document.getElementById("textAreaSpan").style.color = "blue";
            document.getElementById("textAreaSpan").style.transform = "scale(1.05)";
            document.getElementById("textAreaSpan").style.transition = "0.2s";
            document.getElementById("textAreaSpan").innerHTML = "It's Empty!";
        }
            
        else{
            document.getElementById("textAreaSpan").style.color = "red";
            document.getElementById("textAreaSpan").style.transform = "scale(1.05)";
            document.getElementById("textAreaSpan").style.transition = "0.2s";
            document.getElementById("textAreaSpan").innerHTML = "Invalid Input!";
        }
    }
})
    