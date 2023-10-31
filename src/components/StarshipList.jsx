import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const StarshipList = (props) => {
    if (!props.starships) {
        return 
        <h2>Loading starships please wait...</h2>
    } else {

        let navigate = useNavigate()

        const showStarship = (key) => {
            navigate(`${key}`)
        }

        return (
            <div className="starship-grid">
                <h2>List of Starships</h2>
                {props.starships.map((starship, key) => (
                    <div key = {key} onClick={()=>showStarship(key)} className="card">
                        <h3>{starship.name}</h3>
                        <ul>
                            <li>Model: {starship.model}</li>
                            <li>Manufacturer: {starship.manufacturer}</li>
                            <li>Cost In Credits: {starship.cost_in_credits}</li>
                        </ul>
                    </div>
                ))}

            </div>
        )}   
}

export default StarshipList