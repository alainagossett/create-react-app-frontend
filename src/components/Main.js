import { useEffect, useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Index from '../pages/Index'
import Show from '../pages/Show'

function Main(props) {
    const[people, setPeople] = useState([])

    // const URL = "http://localhost:3001/people/"
    const URL = "https://express-react-people-ag.herokuapp.com/people/"

    //Retrieve all the people (GET)
    const getPeople = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setPeople(data)
    };

    //Create people (POST)
    const createPeople = async (person) => {
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(person),
        });
        //update list of people
        getPeople();
    };

    //Update people (PUT)
    const updatePeople = async (person, id) => {
        await fetch(URL + id, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(person)
        });
        //update list of people
        getPeople();
    }

    //Delete people (DELETE)
    const deletePeople = async (id) => {
        await fetch(URL + id, {
            method: "DELETE"
        });
        getPeople();
    }

    //Run getPeople once when component is mounted
    useEffect(() => getPeople(), [])

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Index user={props.user} people={people} createPeople={createPeople}/>
                </Route>
                <Route path="/people/:id" render={(rp) => (
                        props.user ? 
                    <Show 
                        {...rp}
                        updatePeople={updatePeople}
                        deletePeople={deletePeople}
                        people={people}
                    />
                    :
                    <Redirect to='/' />
                )} />
            </Switch>
        </main>
    )
};

export default Main;