import React, {useState, Fragment} from 'react';

//imr, sfc

const Contador = () => {

    const [numero, setNumero] = useState(0);

    const aumentar = () => {

        setNumero(numero + 1)

    }

    return ( 
        <Fragment>
            <h1>Mi primer componente {numero} </h1>
            <button onClick={aumentar}>Aumentar</button>
        </Fragment>
     );
}
 
export default Contador;