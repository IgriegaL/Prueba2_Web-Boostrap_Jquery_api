$(document).ready(function(){
    const usuarios = [];

	$("#registrar").click(function(e) {       
        $('#modalRegistro').modal('show');
        e.preventDefault();    
	});

    $("#enviar").click(function(ev) {
        ev.preventDefault();
        var espacios = /\s/;
        var usuario = $("#user").val();
        var pwd = $("#password").val();

        if(usuario == "" || pwd == ""){
            alert("Por favor ingrese los datos solicitados");
        }
        else if(espacios.test(usuario) || espacios.test(pwd)){
            alert("Usuario y password no pueden contener espacios");
        }
        else{
            var i = 0;
            usuarios.forEach((u) => {
                if(usuario == u.user){
                    i++;
                };
            });
            if(i > 0){
                alert("El usuario ya se encuentra registrado, por favor inicie sesión");
                $('#modalRegistro').modal('hide');
            }
            else{
                usuarios.push({user: usuario,pwd: pwd});
                alert("Datos registrados");
                console.log(usuarios);
                $('#modalRegistro').modal('hide');
            };
        };
        var usuario = $("#user").val('');
        var pwd = $("#password").val('');
    });

    $("#cerrar").click(function(eve) {
        var usuario = $("#user").val('');
        var pwd = $("#password").val('');
    });

    $("#cruz").click(function(eve) {
        var usuario = $("#user").val('');
        var pwd = $("#password").val('');
    });

});
