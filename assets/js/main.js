
function MiembrosSquad(id,nombre,edad,hobbies){
	this.id=id;
	this.nombre=nombre;
	this.edad=edad;
	this.hobbies=hobbies;
	this.comentarios =[];
}

function Comentario(idGente, comentarios){
	this.idGente=idGente;
	this.comentarios=comentarios;
	this.likes=0;
}

var squad=[];
//instancia de cada amiga
var laura= new MiembrosSquad("laura","Laura Peláez", 22,["cinéfila"]);
var orieta= new MiembrosSquad("orieta","Orieta Toro", 27,["dormir","leer"]);
var coni= new MiembrosSquad("coni","Constanza Pecori", 26,["tejer","comer","dormir"]);
var rangi = new MiembrosSquad("rangi","Rangi Becerra", 32,["viajar"]);
var cate = new MiembrosSquad("cate","Caterina Da Silva", 26,["juegos online"]);
var rosa = new MiembrosSquad("rosa","Rosa Diaz", 32,["pensar en la inmortalidad del cangrejo"]);
var gene = new MiembrosSquad("gene","Genesis Narváez", 27,["pasear en bici"]);
var cami = new MiembrosSquad("cami","Camila González", 27,["ver netflix","jugar con mascotas","degustar cerveza"]);
squad.push(laura,orieta,coni,rangi,cate,rosa,gene,cami);

function imprimir(gente){
	var contiene= document.getElementById("amigas");
	var texto= "";
	squad.forEach(function(gente){
		texto +=
		"<div>" + "<img class='foto' src=assets/imgenes/" + gente.id + ".jpg>" + "</div>" +"<div>" + gente.nombre + " " + gente.edad +"</div>"
	
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