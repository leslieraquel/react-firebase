
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
    
    handleChange = e => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value });
    }

    handleSubmit = async e => {
        e.preventDefault();

        console.log("test")
        try{
            // const URL = 'https:url/firease.json'
            // const res = await axios.post(URL, this.state);
            // this.props.onSuccess(res);
        }catch(err){
            // console.error(err); //logger...
            // this.setState({hasError: true})
        }
         

    } 


    render(){
   const {id,nombre,cedula,telefono,email} = this.state
    return(
        <>
        <h1>Formulario</h1>
                <form className="row" onSubmit={this.handleSubmit}>
                     <div className="col-sm-4"> 
                        <div className="card"> 
                            <Input placeholder="ID"         type="text" label="ID"      id="id"         value={id}       onChange={this.handleChange} name="id"></Input>
                            <Input placeholder="nombre"     type="text" label="Nombre"  id="nombre"     value={nombre}   onChange={this.handleChange} name="nombre"></Input>
                            <Input placeholder="Cedula"     type="text" label="Cedula"  id="cedula"     value={cedula}   onChange={this.handleChange} name="cedula"></Input>
                            <Input placeholder="Telefono"   type="text" label="Telefono"id="telefono"   value={telefono} onChange={this.handleChange} name="telefono"></Input>
                            <Input placeholder="Email"      type="email"label="Email"   id="email"      value={email}    onChange={this.handleChange} name="email"></Input>
                        </div>  
                    </div>
                    
                    <button type="submit">Go</button>   
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



