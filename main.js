const URL_API = 'https://control-presupuesto-axios.onrender.com/finance';

const ContenedorTabla = document.getElementById('contenedor_tabla');

datosFinanzas = [];

const CargarFinanzas = async() =>{
    try{
        const response = await axios.get(URL_API);
        // console.log(response.data);
        if(response.status === 200) {
            response.data.forEach(datos => {

                const nuevosDatos = {
                    description: datos.description,
                    price: datos.price,
                    type: datos.type,
                };

                datosFinanzas.push(nuevosDatos);
                CargarTabla();

            });
        }
    }
    catch(error){
        console.log(error);
    }
};

const CargarTabla = () => {
    ContenedorTabla.innerHTML = ``;

    datosFinanzas.forEach(datoF =>{
        ContenedorTabla.innerHTML += `

                <tr>
                    <td>${datoF.description}</td>
                    <td>${datoF.price}</td>
                    <td>${datoF.type}</td>
                </tr>
        `
    });

}

CargarFinanzas();


