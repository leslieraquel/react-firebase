import React from 'react'

export default function Input(props){
    const { placeholder,type,label,id,value,name } = props

    return(<>

            <div className="card-body">
                <label>{label}</label>
                <input className="form-control" 
                       type={type}
                       placeholder={placeholder}
                       id={id}
                       defaultValue={value}        
                       name={name}
                ></input>
            </div>           
           

        </>
    )
}