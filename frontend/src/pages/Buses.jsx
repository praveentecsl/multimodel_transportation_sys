import React from 'react'
import { useState } from 'react'
import API_BASE_URL from '../utils/api';
import { useNavigate } from 'react-router-dom';

const Buses = () => {

    const [animals, setAnimals] = useState([]);
    const navigate = useNavigate();

    const fetchAnimals = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/api/animals`);
            const data = await res.json();
            setAnimals(data);

        } catch (err) {
            console.log("server response an error", err);

        }
    };

    const handleClick = () => {
        navigate("/services")
    }


    return (
        <div>
            <div>Buses</div>
            <button
                onClick={fetchAnimals}
                className="w-52 bg-green-600 text-white p-3 rounded hover:bg-green-500 transition"

            >
                Load
            </button>

            <ul>
                {
                    animals.map((animal) => (
                        <li key={animal._id} >
                            <p><strong>Name:</strong>{animal.name}</p>
                            <p><strong>Emai:</strong>{animal.email}</p>
                            <p><strong>Name:</strong>{animal.message}</p>

                        </li>
                    ))
                }
            </ul>

            <button
                onClick={handleClick}
                className="w-52 bg-orange-600 text-white p-3 rounded hover:bg-purple-500 transition"

            >
                go back</button>


        </div>
    )
}

export default Buses