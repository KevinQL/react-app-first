import React, {Fragment} from 'react';
import { useForm } from 'react-hook-form';

const FormHook = () => {

    const {register, handleSubmit, watch, formState: {errors}} = useForm();

    const onSubmit = (data, e) => {
        e.target.reset();
        console.log(data)
    }

    console.log(watch("example")); // watch input value by passing the name of it

    return ( 
        <Fragment> 
            <h1>Formulario</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input 
                    className="form-control my-2"
                    defaultValue="test" 
                    {...register("example")} 
                />

                <input 
                    className = "form-control my-2"
                    {...register("titulo",{
                            required:{
                                value:true,
                                message:'Se requiere campo'
                            }
                        })
                    }
                />

                <span className="text-danger text-small d-block mb-2">
                    {errors.titulo && errors.titulo.message }
                </span>

                <button className = "btn btn-primary">Enviar</button>
            </form>
        </Fragment>
     );
}
 
export default FormHook;