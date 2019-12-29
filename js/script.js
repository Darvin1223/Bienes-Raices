(function() {
    document.addEventListener("DOMContentLoaded", function() {

        /** Contactanos **/
        // let opciones = document.getElementsByName('Eleccion'),
        //     Alquiler = document.getElementById('Alquiler'),
        //     Compra_venta = document.getElementById('Comven'),
        //     fieldset = document.getElementsByTagName('fieldset');


        // function Opciones() {

        //     console.log(opciones);
        //     for (let i = 0; i < opciones.length; i++) {
        //         if (opciones[i].checked) {
        //             console.log(opciones[i].value);
        //         }
        //     }

        // };
        // document.addEventListener("click", function(Opciones) {
        //     if (Opciones == Compra_venta) {
        //         fieldset.ClassList.remove("hiden");
        //     }

        // })

        $("#my-form").submit(function(e) {
            e.preventDefault();

            var $form = $(this);
            $.post($form.attr("action"), $form.serialize()).then(function() {
                alert("Thank you!");
            });
        });


    });

})();