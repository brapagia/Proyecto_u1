$(document).ready(function() {          
            $('#email').on('input', function() {
                validarEmail();
            });
            $('#password').on('input', function() {
                validarPassword();
            });

            // Manejo del envío del formulario
            $('#loginForm').on('submit', function(e) {
                e.preventDefault(); 
                
                let emailValido = validarEmail();
                let passValido = validarPassword();

                if (emailValido && passValido) {                   
                    let datos = {
                        email: $('#email').val(),
                        password: $('#password').val()
                    };                    
                    console.log('Datos enviados:', datos);
                    alert('Inicio de sesión exitoso (simulación).');                    
                }
            });

            // Función para validar email
            function validarEmail() {
                let email = $('#email').val();
                let emailValido = false;
                if (email === '') {
                    $('#emailError').text('El correo es obligatorio.');
                } else if (!validarFormatoEmail(email)) {
                    $('#emailError').text('Ingrese un correo válido (ej: usuario@dominio.com).');
                } else {
                    $('#emailError').text('');
                    emailValido = true;
                }
                return emailValido;
            }

            // Función para validar contraseña
            function validarPassword() {
                let password = $('#password').val();
                if (password === '') {
                    $('#passwordError').text('La contraseña es obligatoria.');
                    return false;
                } else {
                    $('#passwordError').text('');
                    return true;
                }
            }

            // validar email
            function validarFormatoEmail(email) {
                let regex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
                return regex.test(email);
            }

            // Función para mostrar errores generales
            function mostrarErrorGeneral(mensaje) {                
                let errorGeneral = $('#errorGeneral');
                if (errorGeneral.length === 0) {
                    $('.form-login').prepend('<div id="errorGeneral" class="error-message"></div>');
                    errorGeneral = $('#errorGeneral');
                }
                errorGeneral.text(mensaje).show();
            }
        });