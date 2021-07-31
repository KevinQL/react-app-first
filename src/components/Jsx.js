import React, { useState, Fragment} from 'react';  

const Jsx = () => {

    const [arrNumeros, setarrNumeros] = useState([1,2,3,4]) 
    const [n, setn] = useState(0);

    const agregar = () => {
        setn(n+1)
        setarrNumeros([
            ...arrNumeros,
            n
        ]);
    }

    const quitar = () => {
        let result = arrNumeros.splice(-1, 1)
        console.log(result)
        setarrNumeros( [...arrNumeros] );
    }
    // console.log(arrNumeros);

    return (
        <Fragment>
            <h1>LISTA</h1>
            <button onClick={agregar}>+</button>
            <button onClick={quitar}>-</button>
            <ul>
                {
                    arrNumeros.map( (item, index) => {
                           return <li key={index} >{item}</li>
                        }
                    )
                }
            </ul>
        </Fragment> 
    );
}
 
export default Jsx;