import React, { Fragment, useState } from 'react';

const Formularios = () => {

    const [datos, setDatos] = useState({
        nombre:'',
        apellido:''
    });

    const captandoCambios = (event) => {
        console.log('click')

        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        console.log( datos.nombre, datos.apellido );
    }


    return ( 
        <Fragment>
            <form className="row" onSubmit={enviarDatos}>
                <div className='col-md-3'>
                    <input 
                        className='form-control'
                        placeholder='Ingrese Nombre'
                        type='text'
                        name='nombre'
                        onChange={captandoCambios}
                    />
                </div>
                <div className='col-md-3'>
                    <input 
                        className='form-control'
                        placeholder='Ingrese Apellido'
                        type='text'
                        name='apellido'
                        onChange={captandoCambios}
                    />
                </div>
                <div className='col-md-3'>
                    <input 
                        className='btn btn-primary'
                        type='submit'
                        value='enviar'
                    />
                </div>
            </form>
            <h2>{datos.nombre} - {datos.apellido}</h2>
        </Fragment>
     );
}
 
export default Formularios;