import React from 'react';
const Paginacion =(props) =>{
    return(
        <div className="py-3">
            <button onClick={props.paginaAnt} type="button" className="btn btn-danger mr-1">Anterior&larr;</button>
            <button onClick={props.paginaSig}type="button" className="btn btn-danger">Siguiente &rarr;</button>
        </div>
    )
}
export default Paginacion;