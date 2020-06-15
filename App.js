import React, {Component} from 'react';
import Buscador from './components/Buscador';
import Resultado from './components/Resultado';
class App extends Component {

  state = {
    termino : '',
    imagenes: [],
    pagina:0
  }
  scroll = () =>{
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth','start');
  }

  paginaAnt = () =>{
     //leer el state de la pag actual
     let pagina = this.state.pagina;

      //si la pagina es uno entonces no restar
      if(pagina===1) return null;
     //sumar uno a la pagina actual 
     pagina--;
     //agregar el cambio al state
     this.setState({
       pagina
     }, () => {
      this.consultarApi();
      this.scroll();
    });
   //  console.log(pagina);
  }
  
  paginaSig = () =>{
      //leer el state de la pag actual
      let pagina = this.state.pagina;

      //sumar uno a la pagina actual 
      pagina++;
      //agregar el cambio al state
      this.setState({
        pagina
      }, () => {
        this.consultarApi();
        this.scroll();
      });
     // console.log(pagina);
    }

  consultarApi =()=>{
    const pagina = this.state.pagina;
    const url ="https://pixabay.com/api/?key=16274897-8d5cdf71729844d97d5e33d2e&q="+this.state.termino+"&per_page=30&page="+pagina+"";
   console.log(url);
   fetch(url)
    .then(respuesta => respuesta.json() )
    .then(resultado =>  this.setState({imagenes: resultado.hits}))
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino:termino,
      pagina:1
    },() =>{
      this.consultarApi();
    }
    )
  }

  render(){
    return (
      <div className="app container">
        <div className="jumbotron">
            <p className="lead text-center">Buscador de imagenes</p>
            <Buscador
              datosBusqueda={this.datosBusqueda}
            />
        </div>
       <div className="row justify-content-center">
        <Resultado
            imagenes ={this.state.imagenes}
            paginaAnt={this.paginaAnt}
            paginaSig={this.paginaSig}
          />
       </div>
      </div>
    );  
  }
}

export default App;
