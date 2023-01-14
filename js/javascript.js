

// cuando seleccionas un item se ocultan los otros item

document.getElementById("datos_personales_visible")
.addEventListener("click", function(){
	document.getElementById("datos_personales")
	.style.display = "block";
	document.getElementById("historial_academico")
	.style.display = "none";
	document.getElementById("experiencia_laboral")
	.style.display = "none";
	document.getElementById("habilidades")
	.style.display = "none";
	
});
document.getElementById("historial_academico_visible")
.addEventListener("click", function(){
	document.getElementById("historial_academico")
	.style.display = "block";
	document.getElementById("datos_personales")
	.style.display = "none";
	document.getElementById("experiencia_laboral")
	.style.display = "none";
	document.getElementById("habilidades")
	.style.display = "none";
});
document.getElementById("experiencia_laboral_visible")
.addEventListener("click", function(){
	document.getElementById("experiencia_laboral")
	.style.display = "block";
	document.getElementById("datos_personales")
	.style.display = "none";
	document.getElementById("historial_academico")
	.style.display = "none";
	document.getElementById("habilidades")
	.style.display = "none";
	
});
document.getElementById("habilidades_visible")
.addEventListener("click", function(){
	document.getElementById("habilidades")
	.style.display = "block";
	document.getElementById("datos_personales")
	.style.display = "none";
	document.getElementById("experiencia_laboral")
	.style.display = "none";
	document.getElementById("historial_academico")
	.style.display = "none";
	
});

function datos_formulario(){
	
	var nombre= document.getElementById("nombre").value;
	var apellido=document.getElementById("apellido").value;
	var correo_electronico=document.getElementById("correo_electronico").value;
	var nacionalidad=document.getElementById("nacionalidad").value;
	var estado_civil=document.getElementById("estado_civil").value;
	var edad=document.getElementById("edad").value;
	var celular=document.getElementById("celular").value;
	
	var estudios=document.getElementById("estudios").value;
	var titulo=document.getElementById("titulo").value;
	var cursos=document.getElementById("cursos").value;
	var idioma=document.getElementById("idioma").value;
	
	var experiencia= document.getElementById("experiencia").value;
	
	var habilidades=document.getElementById("habilidad").value;
	
	
	
	document.getElementById("nombre_apellido").innerHTML=nombre + " "+ apellido;
	document.getElementById("correo").innerHTML=correo_electronico;
	document.getElementById("nacion").innerHTML=nacionalidad;
	document.getElementById("estadoCivil").innerHTML=estado_civil;
	document.getElementById("edades").innerHTML=edad +" años";
	document.getElementById("celula").innerHTML=celular;
	
	document.getElementById("estudio").innerHTML=estudios;
	document.getElementById("titul").innerHTML=titulo;
	document.getElementById("curso").innerHTML=cursos;
	document.getElementById("idiom").innerHTML=idioma;
	
	document.getElementById("experienci").innerHTML=experiencia;
	
	document.getElementById("habilida").innerHTML=habilidades;
	
	document.getElementById("plantilla")
	.style.display = "block";
	
}
	
// funcion para seleccionar la foto y ponerla
// en el la plantilla

        function imagen_cv() {
  var img_foto = document.getElementById("fotos");
  var foto_seleccionada= document.getElementById("foto").files[0];
  var reader = new FileReader();

  reader.addEventListener("load", function () {
    // convierte la imagen a una cadena en base64
    img_foto.src = reader.result;
  }, false);

  if (foto_seleccionada) {
    reader.readAsDataURL(foto_seleccionada);
  }
}

//funcion para el boton siguiente
// del formulario

function datos_personales(){
	document.getElementById("datos_personales")
	.style.display = "block";
	document.getElementById("historial_academico")
	.style.display = "none";
	document.getElementById("experiencia_laboral")
	.style.display = "none";
	document.getElementById("habilidades")
	.style.display = "none";
}

function historial_academico(){
	
	document.getElementById("historial_academico")
	.style.display = "block";
	document.getElementById("datos_personales")
	.style.display = "none";
	document.getElementById("experiencia_laboral")
	.style.display = "none";
	document.getElementById("habilidades")
	.style.display = "none";
}
function experiencia_laboral(){
	document.getElementById("experiencia_laboral")
	.style.display = "block";
	document.getElementById("datos_personales")
	.style.display = "none";
	document.getElementById("historial_academico")
	.style.display = "none";
	document.getElementById("habilidades")
	.style.display = "none";
}
function habilidades(){
	
	document.getElementById("habilidades")
	.style.display = "block";
	document.getElementById("datos_personales")
	.style.display = "none";
	document.getElementById("experiencia_laboral")
	.style.display = "none";
	document.getElementById("historial_academico")
	.style.display = "none";
}
