
let comidaCards = document.querySelectorAll(".comida-card");
let comidas = [];
let btnes = document.querySelectorAll(".btn");
let btnGeneral = document.querySelector(".btn-general");

for (let comidaCard of comidaCards) {
    let nombreComida = comidaCard.querySelector("h2").innerText;
    let precioComida = parseInt(comidaCard.querySelector("h3").innerText.replace('₡', ''));
    let cantidadComida = parseInt(comidaCard.querySelector(".numero").value);

    let comida = {
        nombre: nombreComida,
        precio: precioComida,
        cantidad: cantidadComida
    };
    comidas.push(comida);
}

btnes.forEach((boton, i) => {
    boton.addEventListener("click", function () {
        // Obtener la cantidad desde el campo de entrada
        let cantidadInput = boton.closest(".comida-card").querySelector(".numero");
        let cantidad = parseInt(cantidadInput.value);
        // Verificar que la cantidad sea un número válido
        if (isNaN(cantidad) || cantidad == 0) {
            swal.fire({
                title: 'Debes seleccionar al menos 1 item',
                confirmButtonColor: '#d6ae01',
                icon: 'error',
            });   
        } else {
            // Asignar la cantidad al objeto correspondiente
            comidas[i].cantidad = cantidad;
            // Calcular e imprimir el total para la comida correspondiente
            let totalPlato = comidas[i].precio * comidas[i].cantidad;
            swal.fire({
                title: `El total para la ${comidas[i].nombre} es: ₡${totalPlato}`,
                confirmButtonColor: '#d6ae01',
                icon: 'success',
            });            
        }
    })
})

btnGeneral.addEventListener("click", function(){
    let totalGlobal = 0;
    for(let i = 0; i<comidas.length;i++ ){
        totalGlobal += comidas[i].precio * comidas[i].cantidad;    
    }
    if (isNaN(totalGlobal) || totalGlobal == 0) {
        swal.fire({
            title: 'Debes seleccionar al menos 1 item',
            confirmButtonColor: '#d6ae01',
            icon: 'error',
        });
    }else{
        swal.fire({
            title: `El total seria de: ₡${totalGlobal}`,
            confirmButtonColor: '#d6ae01',
            icon: 'success',
        });
    }
});