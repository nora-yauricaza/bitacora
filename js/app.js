var posts = [];
window.addEventListener("load",function(){  
	var botonPublicar = document.getElementById("botonPublicar");
    var contenedor=document.getElementById("contenedor");

    contenedor.classList.add("contenedor");

 	var input=document.createElement("input");
 	var textarea=document.createElement("textarea");
	var segundoBoton=document.createElement("button");
	var botonSalir=document.createElement("button");

    botonPublicar.addEventListener("click", function(e){
   	e.preventDefault();
   	createSelect();
	});

  	segundoBoton.addEventListener("click", function() {
        var usuario = new Texto(input.value,textarea.value,new Date().toLocaleTimeString());
        posts.push(usuario);
        imprimirTexto();
  	
	});

  	botonSalir.addEventListener("click", function() {

	});

	function createSelect(){
		var indice=["Texto", "Cita", "Meme", "Pastilla"];
	    var padre=document.createElement("div");
	    var select = document.createElement("select");

	    padre.setAttribute("id","divPadre");
	    select.setAttribute("id", "mySelect");
	    select.classList.add("divPadre");

	    padre.appendChild(select);
	    contenedor.appendChild(padre);

	    var option =document.createElement("option");
	    	option.setAttribute("name","default");
	    	option.text="selecciona una opcion";
	    	select.appendChild(option);

	    for (var i = 0; i < indice.length; i++) {
	    	var option =document.createElement("option");
	    	option.setAttribute("value", indice[i].toLowerCase());
	    	option.text=indice[i];
	    	select.appendChild(option);
	    }
		select.addEventListener("change",function() {
			if(this.value == "texto"){
				createTexto();
			}else if(this.value=="cita"){
				createCita();
			}else if(this.value=="meme"){
				createMeme();
			}else if(this.value=="pastilla"){
				createPastilla();
			}else{
				alert("selecciona una opcion");
			}
		});
	}

	function createTexto(){
		var padre=document.getElementById("divPadre");		
		
		input.classList.add("input");

		input.setAttribute("id", "input");	
		input.setAttribute("placeholder","TITULO");
		textarea.setAttribute("id", "textarea");
		segundoBoton.setAttribute("id","segundoBoton");
		botonSalir.setAttribute("id","botonSalir");

		segundoBoton.textContent = "Publicar";		
		botonSalir.textContent = "Salir";

		padre.appendChild(input);
		padre.appendChild(textarea);
		padre.appendChild(segundoBoton);
		padre.appendChild(botonSalir);
		contenedor.appendChild(padre);
	}

	function createCita(){
		var padre=document.getElementById("divPadre");

		input.setAttribute("id", "input");		
		input.setAttribute("placeholder","CITA");
		textarea.setAttribute("id", "textarea");
		segundoBoton.setAttribute("id","segundoBoton");
		botonSalir.setAttribute("id","botonSalir");

		input.classList.add("input");

		segundoBoton.textContent = "Publicar";	
		botonSalir.textContent = "Salir";

		padre.appendChild(input);
		padre.appendChild(textarea);
		padre.appendChild(segundoBoton);
		padre.appendChild(botonSalir);
		contenedor.appendChild(padre);
	}

	function createMeme(link){
		var padre=document.getElementById("divPadre");
		var img=document.createElement("img");

		input.setAttribute("id", "input");	
		input.setAttribute("placeholder","LINK");
		img.setAttribute("src", link);
		segundoBoton.setAttribute("id","segundoBoton");
		botonSalir.setAttribute("id","botonSalir");

		input.classList.add("input");
		
		segundoBoton.textContent = "Publicar";
		botonSalir.textContent = "Salir";

		padre.appendChild(input);
		padre.appendChild(img);
		padre.appendChild(segundoBoton);
		padre.appendChild(botonSalir);
		contenedor.appendChild(padre);
	}

	function createPastilla(){
		var padre=document.getElementById("divPadre");
		
		textarea.setAttribute("id", "textarea");
		input.setAttribute("type", "color");
		input.setAttribute("placeholder","");
		segundoBoton.setAttribute("id","segundoBoton");
		botonSalir.setAttribute("id","botonSalir");

		input.classList.add("input");
		
		segundoBoton.textContent = "Publicar";
		botonSalir.textContent = "Salir";

		padre.appendChild(textarea);
		padre.appendChild(input);
		padre.appendChild(segundoBoton);
		padre.appendChild(botonSalir);
		contenedor.appendChild(padre);
	}

	function imprimirTexto(){
        for(usuario of posts){      
            for(property in usuario){
                	var x=document.createElement("div");
                	var nuevo=document.createTextNode(usuario[property]);
               		x.appendChild(nuevo);
               		contenedor.appendChild(x);
            }
        }
    }

	function Texto(titulo,text,horaPub) {
  		this.titulo = input.value;
  		this.text = textarea.value;
  		this.horaPub = horaPub;
	};

	function Cita(text,horaPub) {
    	Texto.call(this,text,horaPub);
    	this.autor = autor;

    	this.publicar = function() {
    
    	};
	};

	function Meme(text,horaPub) {
  		Texto.call(this,text, horaPub);
  		this.link = link;

  		this.publicar = function() {
  		};
	};

	function Pastilla(text, horaPub) {
  		Texto.call(this,text, horaPub);
  		this.color = color;

  		this.publicar = function() {
  		};
	};
});

