
window.addEventListener("load",function(){  
	var botonPublicar = document.getElementById("botonPublicar");
    botonPublicar.addEventListener("click", function(e){
   	e.preventDefault();
   	createSelect();
   	createTexto() 

   	var segundoBoton = document.getElementById("publicar");
  	segundoBoton.addEventListener("click",function() {
    	var input = document.getElementById("input");
        var textarea = document.getElementsByName("textarea")
        var usuario = new Texto(titulo,text,horaPub);
        post.push(usuario);
        imprimirContactos();
  	});
});

	function createSelect(){
		var indice=["Texto", "Cita", "Meme", "Pastilla"]

		var contenedor=document.getElementById("contenedor");
	    var padre=document.createElement("div");
	    var select = document.createElement("select");

	    padre.setAttribute("id","divPadre");
	    select.setAttribute("id", "mySelect");
	    select.classList.add("btn", "btn-default", "dropdown-toggle");
	    padre.appendChild(select);
	    contenedor.appendChild(padre);

	    // var valor =document.createElement("valor");
	    // 	valor.setAttribute("valor");
	    // 	valor.appendChild(option);

	    for (var i = 0; i < indice.length; i++) {
	    	var option =document.createElement("option");
	    	option.setAttribute("name", indice[i]);
	    	option.text=indice[i];
	    	select.appendChild(option);
	    }

		select.addEventListener("change",function() {
		createTexto();
		});
	}

	function createTexto(){
		var contenedor=document.getElementById("contenedor");
		contenedor.classList.add("contenedor");
		var padre=document.getElementById("divPadre");
		
		// var option = document.getElementsByName("option")[0];
		var input=document.createElement("input");
		input.setAttribute("id", "input");	
		input.classList.add("input");
		input.setAttribute("placeholder","TITULO");

		var textarea=document.createElement("textarea");
		textarea.setAttribute("id", "textarea");

		var segundoBoton=document.createElement("button");
		segundoBoton.setAttribute("id","segundoBoton");
		segundoBoton.textContent = "Publicar";

		padre.appendChild(input);
		padre.appendChild(textarea);
		padre.appendChild(segundoBoton);
		contenedor.appendChild(padre);
	}

	function Texto(titulo,text,horaPub) {
  		this.titulo = titulo;
  		this.text = text;
  		this.horaPub = horaPub;
	};

	function Cita(text,titulo,autor,horaPub) {
    	Texto.call(this,text,titulo,horaPub);
    	this.autor = autor;

    	this.publicar = function() {
    
    	};
	};

	function Meme(text,link,horaPub) {
  		Texto.call(this,text,link, horaPub);
  		this.link = link;

  		this.publicar = function() {
  		};
	};

	function Pastilla(text,color, horaPub) {
  		Texto.call(this,text,color, horaPub);
  		this.color = color;

  		this.publicar = function() {
  		};
	};

});

