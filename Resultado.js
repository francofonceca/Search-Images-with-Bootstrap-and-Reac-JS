import React, {Component} from 'react';
import Imagen from './Imagen';
import Paginacion from './Paginacion';
class Resultado extends Component{

    mostrarImagenes = () =>{
        const imagenes =this.props.imagenes;
        if(imagenes.length === 0) return null;
       // console.log(imagenes);
        return(
            <React.Fragment>
                <div className="row p-5 col-12">
                    {imagenes.map(imagen =>(
                        <Imagen 
                            key={imagen.id}
                            imagen={imagen}
                        />    
                    ))}
                </div>
                <Paginacion
                    paginaAnt={this.props.paginaAnt}
                    paginaSig={this.props.paginaSig}
                />
            </React.Fragment>
        )
    }
    render(){
        return(
            <React.Fragment>
                {this.mostrarImagenes()}
            </React.Fragment>
        )
    }
}
export default Resultado; 