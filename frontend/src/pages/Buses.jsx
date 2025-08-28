import React from 'react'
import { useState } from 'react'
import API_BASE_URL from '../utils/api';


const Buses = () => {

    const [animals, setAnimals] = useState([]);

    const fetchAnimals = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/api/animals`);
            const data = await res.json();

            setAnimals(data);

        } catch (err) {
            console.error("server response error", err);

        }
    };

    return (
        <div>
            <div>Buses</div>

            <button
                onClick={fetchAnimals}
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 mt-4"
            >
                Load
            </button>

            <ul>
                {
                    animals.map((animal) => (
                        <li key={animal._id}>
                            <p><strong>Name:</strong>{animal.name}</p>
                            <p><strong>Name:</strong>{animal.name}</p>
                            <p><strong>Name:</strong>{animal.name}</p>

                        </li>
                    ))
                }

            </ul>






        </div>


    )
}

export default Buses