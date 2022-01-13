import { useState } from 'react'
import { Link } from 'react-router-dom'

function Index(props) {
    //state to hold form data
    const [newForm, setNewForm] = useState({
        name: "",
        image: "",
        title: "",
    });

    //handleChange function - capture user input as its typed
    const handleChange = (event) => {
        if(!props.user) return;
        //prevents form from input if there's no login
        setNewForm({
            ...newForm,
            [event.target.name]: event.target.value,
        })
    }
    /*
    const handleChange = (event) => {
        setNewForm((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }
    */
    //prevState will help maintain references in browser instead of making new ones like the function below does
    //prevState is a callback function and passes the previous verson of the state
    
    //handleSubmit function - will submit new user for creation
    const handleSubmit = (event) => {
        if(!props.user) return;
        //prevents submission if there's no login
        event.preventDefault()
        props.createPeople(newForm)
        setNewForm({
            name: "",
            image: "",
            title: "",
        })
    }


    //page loaded function
    const loaded = () => {
        return props.people.map((person) => (
            <div key={person._id} className="person">
                <Link to={`/people/${person._id}`}>
                    <h1>{person.name}</h1>
                </Link>
                {/* <img src={person.image} alt={person.name} /> */}
                <h3>{person.title}</h3>
            </div>
        ))
    }

    //page loading function
    const loading = () => {
        return <h1>Loading...</h1>
    }

    return(
        <section>
      <form style={{marginTop: '5rem'}}onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          value={newForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <br />
        <input disabled={!props.user} type="submit" value="Create Person" />
      </form>
        {props.people ? loaded() : loading()}
    </section>
    ) 
};

export default Index;