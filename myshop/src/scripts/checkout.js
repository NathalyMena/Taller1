



//para visualizar el precio total y con envio en la otra pagina (payment) 


renderTotal = () =>{
cart.forEach((data) => {
    totalPrice += data.precio; 
});
    if(totalPrice > 0){
        const ordenCheck = document.createElement('section');
        ordenCheck.innerHTML = `
                <div class="orden__containtergnral">
                <div class="orden__title">
                    Tu Orden
                </div>
                <div class="orden__separaddor"> </div>
                <table class="orden__table">
                    <tr>
                    <td>Subtotal</td>
                    <td >$ ${totalPrice}</td>
                    </tr>
                    <tr>
                    <td>Envio</td>
                    <td >$ 11.000</td>
                    </tr>
                    <tr class="orden__TOTAL">
                    <td>Total</td>
                    <td >$ ${totalPrice + precioEnvio}</td>
                    </tr>
                    <tr>
                </table>
                </div>
        `
        ordenCheck.classList.add('orden');   
        generalC.appendChild(ordenCheck);
        total =totalPrice;

    }else{
        container.innerHTML = `
        Aun no tienes nada en tu carrito
        `
    }
}