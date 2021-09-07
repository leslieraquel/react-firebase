import React,{Fragment,useState} from 'react';

const Formulario = ()=>{
    const [datos,setDatos] =useState({
        nombre: " ",
        apellido:""

    })
    return(
        <Fragment>
            <h1>Formulario</h1>

    <form className="row">
        <div className="col-sm-4"> 
            <div className="card"> 
                <div className="card-body">
                    <input placeholder="Codigo" className="form-control" type="text"></input>
                </div>
                <div className="card-body">
                    <input placeholder="ingrese nombre" className="form-control" type="text"></input>
                </div>
                <div className="card-body">
                    <input placeholder="ingrese cedula" className="form-control" type="text"></input>
                </div>
                <div className="card-body">
                    <input placeholder="ingrese telefono" className="form-control" type="text"></input>
                </div>
                <div className="card-body">
                    <input placeholder="ingrese mail" className="form-control" type="text"></input>
                </div>

                <div className="card-body">
                    <button type="submit" class="btn btn-primary btn-lg">Registrar</button>
                </div>
            </div>
        </div>
    </form>

                    <table class="table">
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
    
    
        </Fragment>
    );
}
export default Formulario;


