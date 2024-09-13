let nuevoUsuario = {
    Usuario: '',
    Edad: 0,
    Dirección: '',
    'Fecha de nacimiento': '', 
    Contraseña: ''
};


nuevoUsuario.Usuario = 'ejemploUsuario';
nuevoUsuario.Edad = 25;
nuevoUsuario.Dirección = 'Calle Ejemplo, Ciudad Ejemplo';
nuevoUsuario['Fecha de nacimiento'] = '1999-05-15';
nuevoUsuario.Contraseña = 'contraseñaSegura';

console.log(nuevoUsuario);