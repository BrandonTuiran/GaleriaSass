window.onload=elclick;
var img;
img="<img src='";
var tamaño="' height='400px' width='400px'/>";
var img1;
img1="<img src='";
var  img2="<img src='./imagenes/imagen1.jpg'  height='400px' width='400px'/> ";


function elclick(){
	var imagen1=document.getElementById("equipo1");
    imagen1.addEventListener("click",function(){
    	                               clicEn("./imagenes/imagen1.jpg");
    	                           });
    imagen1.addEventListener("mouseover",function(){
    	                                mostrar("./imagenes/imagen1.jpg");
    	                            });
    imagen1.addEventListener("mouseout",final);


    var imagen2=document.getElementById("equipo2");
    imagen2.addEventListener("click",function(){
    	                               clicEn("./imagenes/imagen2.jpg");
    	                           });  
    imagen2.addEventListener("mouseover",function(){
    	                                mostrar("./imagenes/imagen2.jpg");
    	                            });	
    imagen2.addEventListener("mouseout",final);
  
    	                            

    var imagen3=document.getElementById("equipo3");
    imagen3.addEventListener("click",function(){
    	                               clicEn("./imagenes/imagen3.jpg");
    	                           });
    imagen3.addEventListener("mouseover",function(){
    	                                mostrar("./imagenes/imagen3.jpg");
    	                            });
    imagen3.addEventListener("mouseout",final);



    var imagen4=document.getElementById("equipo4");
    imagen4.addEventListener("click",function(){
    	                               clicEn("./imagenes/imagen4.jpg");
    	                           });
    imagen4.addEventListener("mouseover",function(){
    	                                mostrar("./imagenes/imagen4.jpg");
    	                            });
    imagen4.addEventListener("mouseout",final);
    

    var imagen5=document.getElementById("equipo5");
    imagen5.addEventListener("click",function(){
    	                               clicEn("./imagenes/imagen5.jpg");
    	                           });
    imagen5.addEventListener("mouseover",function(){
    	                                mostrar("./imagenes/imagen5.jpg");
    	                            });
    imagen5.addEventListener("mouseout",final);



    var imagen6=document.getElementById("equipo6");
    imagen6.addEventListener("click",function(){
    	                               clicEn("./imagenes/imagen6.jpg");
    	                           });
    imagen6.addEventListener("mouseover",function(){
    	                                mostrar("./imagenes/imagen6.jpg");
    	                            });
    imagen6.addEventListener("mouseout",final);
   



    var imagen7=document.getElementById("equipo7");
    imagen7.addEventListener("click",function(){
    	                               clicEn("./imagenes/imagen7.jpg");
    	                           });
    imagen7.addEventListener("mouseover",function(){
    	                                mostrar("./imagenes/imagen7.jpg");
    	                            });
    imagen7.addEventListener("mouseout",final);
    


    var imagen8=document.getElementById("equipo8");
    imagen8.addEventListener("click",function(){
    	                               clicEn("./imagenes/imagen8.jpg");
    	                           });
    imagen8.addEventListener("mouseover",function(){
    	                                mostrar("./imagenes/imagen8.jpg");
    	                            });
    imagen8.addEventListener("mouseout",final);
   


    var imagen9=document.getElementById("equipo9");
    imagen9.addEventListener("click",function(){
    	                               clicEn("./imagenes/imagen9.jpg");
    	                           });
    imagen9.addEventListener("mouseover",function(){
    	                                mostrar("./imagenes/imagen9.jpg");
    	                            });
    imagen9.addEventListener("mouseout",final);
   


    var imagen10=document.getElementById("equipo10");
    imagen10.addEventListener("click",function(){
    	                               clicEn("./imagenes/imagen10.jpg");
    	                           });
    imagen10.addEventListener("mouseover",function(){
    	                                mostrar("./imagenes/imagen10.jpg");
    	                            });
    imagen10.addEventListener("mouseout",final);
    
  }
  
  function clicEn(imagen){
  	img +=imagen;
  	img +=tamaño;
    var B=document.getElementById('cuadro1').innerHTML=img;
    img2=img;
    img="<img src='";
  }  	
  function mostrar(imagen1){
    img1 +=imagen1;
  	img1 +=tamaño;
    var K=document.getElementById('cuadro1').innerHTML=img1;
    img1="<img src='";
  }
  function final(){
  	var F=document.getElementById('cuadro1').innerHTML = img2;
  }