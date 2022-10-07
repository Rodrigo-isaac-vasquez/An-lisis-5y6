function validarExt()
{
    var archivoInput = document.getElementById('archivoInput');
    var archivoRuta = archivoInput.value;
    var extPermitidas = /(.jpg)$/i;
    var extPermitidas2 = /(.jpeg)$/i;
    var extPermitidas3 = /(.png)$/i;
    if(!extPermitidas.exec(archivoRuta) && !extPermitidas2.exec(archivoRuta) && !extPermitidas3.exec(archivoRuta)){
        alert('Asegurese de haber seleccionado un PDF');
        archivoInput.value = '';
        return false;
    }

    else
    {
        //PRevio del PDF
        if (archivoInput.files && archivoInput.files[0]) 
        {
            var visor = new FileReader();
            visor.onload = function(e) 
            {
                document.getElementById('visorArchivo').innerHTML = 
                '<embed src="'+e.target.result+'" width="500" height="375" />';
            };
            visor.readAsDataURL(archivoInput.files[0]);
        }
    }
}