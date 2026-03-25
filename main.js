function calcularPromedio() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const semestre = document.getElementById('semestre').value;
    const inputsNotas = document.querySelectorAll('.nota');
    
    let suma = 0;
    inputsNotas.forEach(input => {
        suma += parseFloat(input.value) || 0;
    });

    const promedio = (suma / inputsNotas.length).toFixed(2);

    const mensaje = `El estudiante ${nombre} ${apellido} del ${semestre} tiene un promedio de: ${promedio}`;
    
    document.getElementById('resultado').innerText = mensaje;
}