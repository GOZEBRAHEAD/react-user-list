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
                label="Name:"
                name="name"
                value={ formulario.name }
                onChange={ handleChange }
            />
            
            <Input
                label="Lastname:"
                name="lastname"
                value={ formulario.lastname }
                onChange={ handleChange }
            />

            <Input
                label="E-mail:"
                name="email"
                value={ formulario.email }
                onChange={ handleChange }
            />

            <Button>Save</Button>
        </form>
    );
}

export default CustomForm;
