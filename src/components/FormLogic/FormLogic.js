import { useState } from 'react';

const FormLogic = (inicial) => {
    
    const [formulario, setFormulario] = useState(inicial);

	const handleChange = ({ target }) => {

		setFormulario({

			...formulario,
			[target.name]: target.value
		});
	};

	const clearForm = () => {
		setFormulario(inicial);
	};

    return [formulario, handleChange, clearForm]; 
}

export default FormLogic;
