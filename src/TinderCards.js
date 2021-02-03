import React, {useState, useEffect} from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import axios from './Axios';
import ProfilePhoto from './images/profile.png';

function TinderCards() {
const [people, setPeople] = useState([]);

useEffect(() => {
    async function fetchData() {
        const req = await axios.get('/tinder/cards');
        setPeople(req.data);
    }
    fetchData();
}, [])

const swiped = (direction, nameToDelete) => {
    console.log("removing:" +nameToDelete);
    //setLastDirection(direction);
}

const outOfFrame = (name) => {
    console.log(name + "left the screen");
}

    return ( 
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map(person => (
                <TinderCard className="swipe" key={person.name} preventSwipe={["up","down"]} onSwipe={(dir) => swiped(dir, person.name)} onCardLeftScreen = {() => outOfFrame(person.name)}>
                {person.imgUrl ? (
                    <div style={{backgroundImage: `url(${person.imgUrl})`}} className="card">
                        <h3>{person.name}</h3>
                    </div> ) : (
                    <div style={{backgroundImage: `url(${ProfilePhoto})`}} className="card">
                        <h3>{person.name}</h3>
                    </div>
                )}
                </TinderCard>
                ))}
            </div>
            
        </div>
    )
}

export default TinderCards
