import React, {Component} from 'react';

class Buscador extends Component{
    //nos va a devolver lo que se busco en el input con esta buysquedaref
    busquedaRef = React.createRef();

//funcion para recibir los datos de un onSubmit del form
    obtenerDatos = (e) =>{
        e.preventDefault();
        //agarramos el valor del input
        //lo mandamos al componente principal
        this.props.datosBusqueda(this.busquedaRef.current.value);
    
    }
    render(){
        return( 
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.busquedaRef} type="text" className="form-control form.control-lg" placeholder="Busca tu imagen, Ejemplo: Playa"/>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar..."/>
                    </div>
                </div>
            </form>
        );
    }
}
export default Buscador;