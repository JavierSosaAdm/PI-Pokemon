import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { getTypes } from '../../Redux/Actions';
import axios from 'axios';
import style from './form.module.css'; 

const Form = () => {
    const dispatch = useDispatch();
    const { types } = useSelector(state => state);
    const [selectedTypes, setSelectedTypes] = useState([]);

    useEffect(() => { // llama a getTypes con dispatch, cada vez que se monta componente o cambie el dispatch, para obtener tipos de poke y actualizar estado 
        dispatch(getTypes());
    }, [dispatch]);

    const [form, setForm] = useState({
        name: '',
        image: '',
        life: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
    });

    let [errors, setErrors] = useState({
        name: '',
        image: '',
        life: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
    });

    const changeHandle = (event) => { //controlador de eventos que maneja cambios en los campos
        const property = event.target.name;
        const value = event.target.value;

        setForm({ ...form, [property]: value }); //actualiza formulario
        validate({ ...form, [property]: value }); // valida la actualización de forminario
    };

    const validate = (form) => { 

        let newErrors = {...errors}

        if (/^[A-Z][a-z]*$/.test(form.name)) {
            newErrors = {...errors, name: ''}
        } else {
            newErrors = {...errors, name: 'Invalid'};
        }
        
        if (/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/.test(form.image)) {
            newErrors = {...errors, image: ''}
        } else {
            newErrors = {...errors, image: 'Invalid link'}
        }

        if (/^([1-9][0-9]?|100)$/.test(form.life)) {
            newErrors = {...errors, life: ''}
        } else {
            newErrors = {...errors, life: 'The field must be numeric, using integers from 0 to 100'}
        }

        if (/^([1-9][0-9]?|100)$/.test(form.attack)) {
            newErrors = {...errors, attack: ''}
        } else {
            newErrors = {...errors, attack: 'The field must be numeric, using integers from 0 to 100'}
        }

        if (/^([1-9][0-9]?|100)$/.test(form.defense)) {
            newErrors = {...errors, defense: ''}
        } else {
            newErrors = {...errors, defense: 'The field must be numeric, using integers from 0 to 100'}
        }

        if (/^[1-9]\d*$/.test(form.speed)) {
            newErrors = {...errors, speed: ''}
        } else {
            newErrors = {...errors, speed: 'Field must be numeric, positive integer'}
        }

        if (/^([1-9]\d*|0)(\.\d+)?$/.test(form.height)) {
            newErrors = {...errors, height: ''}
        } else {
            newErrors = {...errors, height: 'The field must be an integer and/or decimal'}
        }

        if (/^([1-9]\d*|0)(\.\d+)?$/.test(form.weight)) {
            newErrors = {...errors, weight: ''}
        } else {
            newErrors = {...errors, weight: 'The field must be an integer and/or decimal'}
        }

        setErrors(newErrors);
    }

    const submitHandler = (event) => { // enviar el form a la dataBase junto con una prop types que viene de selectedTypes
        event.preventDefault();
        axios.post('http://localhost:3001/pokemons', {...form, types: selectedTypes})
        .then(response => alert('Your Pokemon was successfully created'))
        .catch(err => alert(err))
    }

    return (
        <form className={style.container} onSubmit={submitHandler}>
            <div className={style.divOptin}>
                <label className={style.label}>Name</label>
                <input className={style.input} type='text' value={form.name} onChange={changeHandle} name= 'name'/>
                <span>{errors.name}</span>
            </div>
            <div className={style.divOptin}>
                <label className={style.label}>Image</label>
                <input className={style.input} type='text' value={form.image} onChange={changeHandle} name= 'image'/>
                <span>{errors.image}</span>
            </div>
            <div className={style.divOptin}>
                <label className={style.label}>Life</label>
                <input className={style.input} type='text' value={form.life} onChange={changeHandle} name= 'life'/>
                <span>{errors.life}</span>
            </div>
            <div className={style.divOptin}>
                <label className={style.label}>Attack</label>
                <input className={style.input} type='text' value={form.attack} onChange={changeHandle} name= 'attack'/>
                <span>{errors.attack}</span>
            </div>
            <div className={style.divOptin}>
                <label className={style.label}>Defense</label>
                <input className={style.input} type='text' value={form.defense} onChange={changeHandle} name= 'defense'/>
                <span>{errors.defense}</span>
            </div>
            <div className={style.divOptin}>
                <label className={style.label}>Speed</label>
                <input className={style.input} type='text' value={form.speed} onChange={changeHandle} name= 'speed'/>
                <span>{errors.speed}</span>
            </div>
            <div className={style.divOptin}>
                <label className={style.label}>Height</label>
                <input className={style.input} type='text' value={form.height} onChange={changeHandle} name= 'height'/>
                <span>{errors.height}</span>
            </div>
            <div className={style.divOptin}>
                <label className={style.label}>Weight</label>
                <input className={style.input} type='text' value={form.weight} onChange={changeHandle} name= 'weight'/>
                <span>{errors.weight}</span>
            </div>
            
            <div className={style.types}>
                <label className={style.label}>Select Types</label>
                <div className={style.types}> 
                    {types.map((type) => //este fragmento de código genera una lista de tipos de Pokémon con checkboxes, permitiendo al usuario seleccionar hasta 2 tipos. Los cambios en la selección se reflejan en el estado selectedTypes utilizando la función setSelectedTypes.
                    <div className={style.types} key={type.id}>
                        <p className={style.label}>{type.name}</p>
                        <input type= 'checkbox' name={`type-${type.id}`} // checkbox muestra opciones multiples de una casilla de verificacion y name proporciona una identificacion unica a cada checkbox
                        checked={selectedTypes.some(t => t.id === type.id)} // se utiliza para determinar si el checkbox debe estar marcado o no. ".some()" Se utiliza para verificar si al menos un elemento del array cumple con una condición específica.
                        onChange={(e) => {
                            if (selectedTypes.some(t => t.id === type.id)) {
                                setSelectedTypes(selectedTypes.filter(t => t.id !== type.id));
                            } else if (selectedTypes.length < 2) {
                                setSelectedTypes([...selectedTypes, type]);
                            } else {
                                setSelectedTypes([selectedTypes[1], type]);
                            }
                        }}
                        />
                    </div>
                    )}
                </div>
            </div>

            <button className={style.button} type='submit' disabled={ // desabilitar en caso de que pase alguna de esatas condiciones
                form.name === '' ||
                errors.name !== '' ||
                errors.image !== '' ||
                errors.life !== '' ||
                errors.attack !== '' ||
                errors.defense !== '' ||
                errors.speed !== '' ||
                errors.height !== '' ||
                errors.weight !== '' ||
                selectedTypes.length === 0
            } >
                SUBMIT
            </button>

        </form>
    )
};

export default Form;