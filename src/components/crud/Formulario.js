
import React,{Component} from 'react';
import Input from '../ui/input';


//const Formulario = ()=>{
export default class Formulario extends Component{
    state={
        id:"",
        nombre:"",
        cedula:"",
        telefono:"",
        email:""
    }
    
   // const [datos,setDatos] =useState({
        //nombre: " ",
        //apellido:""

   // })
    handleChange = e =>{
        const target= e.target
        //const id  = target.id
        const name = target.name
        const value = target.value
        console.log(value,name)
    }
    handleSubmit = async e =>{
        console.log(e)

    }

    render(){
   // const {id,nombre,cedula,telefono,email} = this.state
    return(
        <>
        <h1>Formulario</h1>
                <form className="row" onSubmit={this.handleSubmit}>
                     <div className="col-sm-4"> 
                        <div className="card"> 
                            <Input placeholder="ID" type="text" label="ID" id="id" value={this.state.id} onChange={(e)=> this.handleChange(e)} name="id"/>
                            <Input placeholder="nombre" type="text" label="Nombre" id="nombre" value={this.state.nombre} onChange={this.handleChange} name="nombre"/>
                            <Input placeholder="Cedula" type="text" label="Cedula" id="cedula" value={this.state.cedula} onChange={this.handleChange} name="cedula"/>
                            <Input placeholder="Telefono" type="text" label="Telefono" id="telefono" value={this.state.telefono} onChange={this.handleChange} name="telefono"/>
                            <Input placeholder="Email" type="email" label="Email" id="email" value={this.state.email} onChange={this.handleChange} name="email"/>
                        </div>  
                    </div>           
                </form>
                    <table className="table">
                        <thead>
                            <tr>
                                 <th scope="col">ID</th>
                                 <th scope="col">Nombre</th>
                                 <th scope="col">Cedula</th>
                                 <th scope="col">Telefono</th>
                                 <th scope="col">Email</th>
                                 <th scope="col">funciones</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>--</td>
                            <td>--</td>
                            <td>--</td>
                            <td>--</td>
                            <td><a>editar</a></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>--</td>
                            <td>--</td>
                            <td>--</td>
                            <td>--</td>
                        </tr>
                        </tbody>
                    </table>
    
    
        </>
        
         );
    }
    
}



