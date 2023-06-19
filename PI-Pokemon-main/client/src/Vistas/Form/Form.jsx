import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { GetTypes } from '../../Redux/Actions';
import axios from 'axios';
// import style from 'Form.module.css'; 

const Form = () => {
    const dispatch = useDispatch();
    const { types } = useSelector(state => state);
    const [selectedTypes, setSelectedTypes] = useState([]);

    useEffect(() => {
        dispatch(GetTypes());
    }, [dispatch]);

    const [form, setForm] = useState({
        name: '',
        image: '',
        backImage:'',
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
        backImage:'',
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
        if (/^[A-Z][a-z]*$/.test(form.name)) {
            errors = {...errors, name: ''}
        } else {
            errors = {...errors, name: 'Invalid'};
        }
        
        if (/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/.test(form.image)) {
            errors = {...errors, image: ''}
        } else {
            errors = {...errors, image: 'Invalid link'}
        }

        if (/^([1-9][0-9]?|100)$/.test(form.life)) {
            errors = {...errors, life: ''}
        } else {
            errors = {...errors, life: 'The field must be numeric, using integers from 0 to 100'}
        }

        if (/^([1-9][0-9]?|100)$/.test(form.attack)) {
            errors = {...errors, attack: ''}
        } else {
            errors = {...errors, attack: 'The field must be numeric, using integers from 0 to 100'}
        }

        if (/^([1-9][0-9]?|100)$/.test(form.defense)) {
            errors = {...errors, defense: ''}
        } else {
            errors = {...errors, defense: 'The field must be numeric, using integers from 0 to 100'}
        }

        if (/^([1-9][0-9]?|100)$/.test(form.speed)) {
            errors = {...errors, speed: ''}
        } else {
            errors = {...errors, speed: 'The field must be numeric, using integers from 0 to 100'}
        }

        if (/^([1-9][0-9]?|100)$/.test(form.height)) {
            errors = {...errors, height: ''}
        } else {
            errors = {...errors, height: 'The field must be numeric, using integers from 0 to 100'}
        }

        if (/^([1-9][0-9]?|100)$/.test(form.weight)) {
            errors = {...errors, weight: ''}
        } else {
            errors = {...errors, weight: 'The field must be numeric, using integers from 0 to 100'}
        }

        setErrors(errors);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        axios.post('http//localhost:3001', {...form, types: selectedTypes})
        .them(response => alert('Your Pokemon was successfully created'))
        .catch(err => alert(err))
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Name</label>
                <input type='text' value={form.name} onChange={changeHandle} name= 'name'/>
                <span>{errors.name}</span>
            </div>
            <div>
                <label>Image</label>
                <input type='text' value={form.image} onChange={changeHandle} name= 'image'/>
                <span>{errors.image}</span>
            </div>
            <div>
                <label>Life</label>
                <input type='text' value={form.life} onChange={changeHandle} name= 'life'/>
                <span>{errors.life}</span>
            </div>
            <div>
                <label>Attack</label>
                <input type='text' value={form.attack} onChange={changeHandle} name= 'attack'/>
                <span>{errors.attack}</span>
            </div>
            <div>
                <label>Defense</label>
                <input type='text' value={form.defense} onChange={changeHandle} name= 'defense'/>
                <span>{errors.defense}</span>
            </div>
            <div>
                <label>Speed</label>
                <input type='text' value={form.speed} onChange={changeHandle} name= 'speed'/>
                <span>{errors.speed}</span>
            </div>
            <div>
                <label>Height</label>
                <input type='text' value={form.height} onChange={changeHandle} name= 'height'/>
                <span>{errors.height}</span>
            </div>
            <div>
                <label>Weight</label>
                <input type='text' value={form.weight} onChange={changeHandle} name= 'weight'/>
                <span>{errors.weight}</span>
            </div>
            
            <div>
                <label>Select Types</label>
                <div>
                    {types.map((type) => 
                    <div key={type.id}>
                        <p>{type.name}</p>
                        <imput type= 'chackbox' name={`type-${type.id}`} 
                        checked={selectedTypes.some(t => t.id === type.id)}
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
        </form>
    )
};



export default Form;