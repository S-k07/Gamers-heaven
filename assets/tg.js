var count=0;
$(document).ready(function(){$("#cart-btn").hide();$("#checkout-btn").hide();

var val=0;
$(".botton").click(function(){$("#cart-btn").show();$("#checkout-btn").show();
$(this).html("Added");
var a=document.getElementById("cart_value");
var b=$(this).attr("id");
var cc=this.value;
if(this.value!=0){++count;}
val+=Number(cc);
a.innerHTML="rs "+val+"("+count+")";
this.value=0;




//if(this.id=="b2"){
//a.innerHTML=this.value;}

//else{a.innerHTML=count;}

});



$("#bo2").click(function(){
$.fn.but2();if(bo1_click==1){$("#tab1").collapse('toggle');$.fn.but1();}
});



var bo2_click=0;
$.fn.but2=function(){
if(bo2_click==0){$("#bo2").html("-");bo2_click++;$("#bo2").mouseenter(function(){$("#bo2").css("background-color","red");});
$("#bo2").mouseleave(function(){$("#bo2").css("background-color","white");});}
else{$("#bo2").html("+");bo2_click--;$("#bo2").mouseenter(function(){$("#bo2").css("background-color","#3aeb34");});
$("#bo2").mouseleave(function(){$("#bo2").css("background-color","white");});}
}



$("#bo1").click(function(){$.fn.but1();if(bo2_click==1){$("#tab2").collapse('toggle');$.fn.but2();}
});

var bo1_click=0;
$.fn.but1=function(){
if(bo1_click==0){$("#bo1").html("-");bo1_click++;$("#bo1").mouseenter(function(){$("#bo1").css("background-color","red");});
$("#bo1").mouseleave(function(){$("#bo1").css("background-color","white");});}
else{$("#bo1").html("+");bo1_click--;$("#bo1").mouseenter(function(){$("#bo1").css("background-color","#3aeb34");});
$("#bo1").mouseleave(function(){$("#bo1").css("background-color","white");});};

}

});
