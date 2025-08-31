import React, { useEffect } from 'react'
import { useState } from 'react'
import API_BASE_URL from '../utils/api';
import { useNavigate } from 'react-router-dom';


const Buses = () => {

    const [animals, setAnimals] = useState([]);
    const navigate = useNavigate();
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });


    const fetchAnimals = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/api/animals`);
            const data = await res.json();

            setAnimals(data);

        } catch (err) {
            console.error("server response error", err);

        }
    };

    const handleClick = () => {
        navigate("/services")
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        console.log("animals:", animals);
    }, [animals])

    const handleUpdate = async (id) => {
        try {
            const res = await fetch(`${API_BASE_URL}/api/animals/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                await fetchAnimals(); // refresh list
                setEditingId(null); // close edit mode
            }
        } catch (err) {
            console.error("update error", err);
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
                {animals.map((animal) => (
                    <li key={animal._id} className="border p-3 rounded mb-2">
                        {editingId === animal._id ? (
                            <>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Name"
                                    className="border p-1 mr-2"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    className="border p-1 mr-2"
                                />
                                <input
                                    type="text"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Message"
                                    className="border p-1 mr-2"
                                />
                                <button
                                    onClick={() => handleUpdate(animal._id)}
                                    className="bg-green-500 text-white px-2 py-1 rounded"
                                >
                                    Save
                                </button>
                            </>
                        ) : (
                            <>
                                <p><strong>Name:</strong> {animal.name}</p>
                                <p><strong>Email:</strong> {animal.email}</p>
                                <p><strong>Message:</strong> {animal.messsage}</p>
                                <button
                                    onClick={() => {
                                        setEditingId(animal._id);
                                        setFormData({
                                            name: animal.name,
                                            email: animal.email,
                                            message: animal.message,
                                        });
                                    }}
                                    className="bg-blue-500 text-white px-2 py-1 rounded"
                                >
                                    Edit
                                </button>
                            </>
                        )}
                    </li>
                ))}
            </ul>

            <button
                onClick={handleClick}
                className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-purple-700 mt-4"
            >
                Back
            </button>

            <button
                //onClick={handleUpdate}
                className="bg-sky-600 text-white px-6 py-2 rounded hover:bg-yellow-500 mt-4"
            >
                Update
            </button>









        </div>


    )
}

export default Buses