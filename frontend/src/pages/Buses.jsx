import React, { useState } from 'react';
import API_BASE_URL from '../utils/api';
import { useNavigate } from 'react-router-dom';

const Buses = () => {
    const [animals, setAnimals] = useState([]);
    const [editValue, setEditValue] = useState({});
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

    const handleClick = () => navigate("/services");

    const updateAnimal = async (animal) => {
        try {
            const id = animal._id;
            const newMessage = editValue[id] || animal.message;

            const res = await fetch(`${API_BASE_URL}/api/animals/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: newMessage })
            });

            const data = await res.json();
            console.log("Update response:", data);

            // Clear input after update
            setEditValue((prev) => ({ ...prev, [id]: "" }));

            // Refresh list
            fetchAnimals();
        } catch (err) {
            console.error("Error updating animal:", err);
        }
    };

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
                {animals.map((animal) => (
                    <li key={animal._id} className="mb-4 border p-3 rounded">
                        <p><strong>Name:</strong> {animal.name}</p>
                        <p><strong>Email:</strong> {animal.email}</p>
                        <p><strong>Message:</strong> {animal.message}</p>

                        <input
                            type="text"
                            placeholder="New message"
                            value={editValue[animal._id] || ""}
                            onChange={(e) =>
                                setEditValue({ ...editValue, [animal._id]: e.target.value })
                            }
                            className="border p-2 rounded w-full mt-2"
                        />

                        <button
                            onClick={() => updateAnimal(animal)}
                            className="bg-blue-600 text-white px-3 py-1 rounded mt-2"
                        >
                            Update
                        </button>
                    </li>
                ))}
            </ul>

            <button
                onClick={handleClick}
                className="w-52 bg-orange-600 text-white p-3 rounded hover:bg-purple-500 transition"
            >
                Go Back
            </button>
        </div>
    );
};

export default Buses;
