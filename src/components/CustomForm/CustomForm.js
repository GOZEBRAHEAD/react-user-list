import React from 'react';
import Input from "../Input/Input";
import Button from '../Button/Button';
import FormLogic from "../FormLogic/FormLogic";

const CustomForm = ({ submit }) => {

    const [formulario, handleChange, clearForm] = FormLogic({ name: "", lastname: "", email: "" });

    const handleSubmit = (e) => {

		e.preventDefault();
        
        submit(formulario);

        clearForm();
	};
    
    return (
        <form onSubmit={ handleSubmit }>
            <Input
                label="Nombre:"
                name="name"
                value={ formulario.name }
                onChange={ handleChange }
            />
            
            <Input
                label="Apellido:"
                name="lastname"
                value={ formulario.lastname }
                onChange={ handleChange }
            />

            <Input
                label="Correo:"
                name="email"
                value={ formulario.email }
                onChange={ handleChange }
            />

            <Button>Enviar</Button>
        </form>
    );
}

export default CustomForm;
