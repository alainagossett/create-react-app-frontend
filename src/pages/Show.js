import { useState } from 'react';

function Show(props) {
    const id = props.match.params.id;
    const person = props.people.find(p => p._id === id);

    const [editForm, setEditForm ] = useState(person);

    const handleChange = (event) => {
        setEditForm({
            ...editForm,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.updatePeople(editForm, id)
        props.history.push('/');
    }

    const handleClick = () => {
        props.deletePeople(id);
        props.history.push('/');
    }

    return (
        <div className="person">
            <h1>{person.name}</h1>
            <h2>{person.title}</h2>
            {
                person.image && <img src={person.image} alt={person.name}/>
                //image will be rendered if person.image is true (exists)
            }
            <br />
            <button id="delete" onClick={handleClick}>
                DELETE
            </button>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                name="name"
                placeholder="name"
                value={editForm.name}
                onChange={handleChange}
                />
                <br />
                <input 
                type="text"
                name="image"
                placeholder="image URL"
                value={editForm.image}
                onChange={handleChange}
                />
                <br />
                <input 
                type="text"
                name="title"
                placeholder="title"
                value={editForm.title}
                onChange={handleChange}
                />
                <br />
                <input type="submit" value="Update Person" />
            </form>
        </div>
    );
};

export default Show;