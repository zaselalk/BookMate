function register_f(){
    var ema1=document.getElementById("ema").value;
    var paw1=document.getElementById("pwd2").value;
    var re1=document.getElementById("re_pwd").value;
    var ag1=document.getElementById("n_age").value;
    if(ema1.length==0 || paw1.length==0 || re1.length==0 || ag1.length==0){
        alert("Box is empty")
    }
    else{
        valid_f();
        agg_valid;
    }    
}


function valid_f(){
    var paw1=document.getElementById("pwd2").value;
    var re1=document.getElementById("re_pwd").value;
    if(paw1!=re1){
        alert("password is not same")
    }
}

function agg_valid(){
    var ag1=document.getElementById("n_age").value;
    if(!/^[0-9]+$/.test(ag1)){
        alert("Not valid");
    }
    
}