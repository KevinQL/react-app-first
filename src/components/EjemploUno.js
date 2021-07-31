import React, {Fragment} from 'react';
import { useForm } from 'react-hook-form';

const EjemploUno = () => {

    const { register, handleSubmit, watch, formState:{ errors } } = useForm();


    const onSubmit = (data, e) => {
        console.log(data)
        e.target.reset();
    }

    return ( 
        <Fragment>

            <h2>Formulario #1</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="form-control my-2"
                    placeholder="Ingrese datos"
                    {...register('intput1',{
                            required:{value:true, message:"Se requiere este dato 1"}
                        }
                    )}
                />
                <span className="d-block">{errors.intput1 && errors.intput1.message}</span>

                <input
                    className="form-control my-2"
                    placeholder="Ingrese datos 2"
                    {...register('intput2',{
                            required:{value:true, message:"Se requiere este dato 2"}
                        }
                    )}
                />
                <span className="d-block">{errors.intput2 && errors.intput2.message}</span>

                <select className="form-control my-2" {...register("gender")} >
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>

                <button className="btn btn-primary">Enviar</button>
            </form>

        </Fragment>
     );
}
 
export default EjemploUno;