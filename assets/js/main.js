
function MiembrosSquad(id,nombre,apellido,edad,hobbies){
	this.id=id;
	this.nombre=nombre;
	this.apellido=apellido;
	this.edad=edad;
	this.hobbies=hobbies;
}
var comentario=[];
function Comentario(idGente, comentarios,likes){
	this.idGente=idGente;
	this.comentarios=comentarios;
	this.likes=likes;
}

var squad=[];
//instancia de cada amiga
var laura= new MiembrosSquad(1,"Laura","Peláez", 22,["cinéfila"]);
var orieta= new MiembrosSquad(2,"Orieta","Toro", 27,["dormir","leer"]);
var coni= new MiembrosSquad(3,"Constanza","Pecori", 26,["tejer","comer","dormir"]);
var rangi = new MiembrosSquad(4,"Rangi","Becerra", 32,["viajar"]);
var cate = new MiembrosSquad(5,"Caterina","Da Silva", 26,["juegos online"]);
var rosa = new MiembrosSquad(6,"Rosa","Diaz", 32,["pensar en la inmortalidad del cangrejo"]);
var gene = new MiembrosSquad(7,"Genesis","Narváez", 27,["pasear en bici"]);
var cami = new MiembrosSquad(8,"Camila","González", 27,["ver netflix","jugar con mascotas","degustar cerveza"]);
squad.push(laura,orieta,coni,rangi,cate,rosa,gene,cami);

function imprimir(gente){
	var contiene= document.getElementById("amigas");
	var texto= "";
	squad.forEach(function(gente){
		texto +=
		"<div>" + "<img src=img/" + gente.id + ".png>" + "</div>" +"<div>" + gente.nombre + " " + gente.apellido + " " + gente.edad +"</div>"
	
		gente.hobbies.forEach(function(hobbies){

		texto += "<li>" + hobbies + "</li>";
		
		});
		texto += "<h3> Comentarios </h3>" + "<div id =" + gente.id +">" + "</div>" + "<textarea id='texto'>" + "</textarea>" + "<button class='onclick='agrega(" + gente.id + ")'></button>" +
			"<div id='contenido'>"+"</div>";

	});

	contiene.innerHTML = texto;

}
//agregar los comentarios
function agrega(genteI){
 var textArea= document.getElementById("texto" + genteI.toString()).value;
 var cajaComentario= document.getElementById("contenido" + genteI.toString());

	var coment= new Comentarios(genteI,textArea,0);

	comentario.push(coment);

	
	 cajaComentario.innerHTML += coment.comentarios;
	 // para limpiar el comentario
	 textArea="";
}

imprimir();