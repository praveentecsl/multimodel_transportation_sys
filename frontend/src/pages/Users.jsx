import React, { useEffect } from 'react'
import { useState } from 'react'
import API_BASE_URL from '../utils/api';
import { useNavigate } from 'react-router-dom';


const Users = () => {

    const [users, setUsers] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        gender: "",
        date: "",
        password: ""
    });
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/services")
    }

    const fetchUsers = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/api/users`);
            const data = await res.json();

            setUsers(data);

        } catch (err) {
            console.error("server response error", err);

        }
    };

    useEffect(() => {
        console.log("users:", users);
    }, [users])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleUpdate = async (id) => {
        try {
            const res = await fetch(`${API_BASE_URL}/api/users/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                await fetchUsers(); // refresh list
                setEditingId(null); // close edit mode
            }
        } catch (err) {
            console.error("update error", err);
        }
    };


    const handleDelete = async (id) => {
        try {
            const res = await fetch(`${API_BASE_URL}/api/users/${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                // update UI without re-fetching everything
                setUsers((prev) => prev.filter((a) => a._id !== id));
            }
        } catch (err) {
            console.error("delete error", err);
        }
    };



    return (
        <div>
            <h1>To get the user information press the Load button</h1>
            <div class="flex justify-between px-4 py-2">

                <button
                    onClick={fetchUsers}
                    className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 mt-4"
                >
                    Load
                </button>

                <button
                    onClick={handleNavigate}
                    className='bg-green-500 text-white px-2 py-1 rounded'
                >
                    Back
                </button>

            </div>

            <ul>
                {users.map((user) => (
                    <li key={user._id} className="border p-3 rounded mb-2">
                        {editingId === user._id ? (
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
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Message"
                                    className="border p-1 mr-2"
                                />
                                <input
                                    type="text"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    placeholder="date"
                                    className="border p-1 mr-2"
                                />
                                <input
                                    type="email"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    placeholder="gender"
                                    className="border p-1 mr-2"
                                />
                                <input
                                    type="text"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="password"
                                    className="border p-1 mr-2"
                                />
                                <button
                                    onClick={() => {
                                        if (window.confirm("are you gurentee this edit to sava")) {
                                            handleUpdate(user._id);
                                        }
                                    }}
                                    className="bg-green-500 text-white px-2 py-1 rounded"
                                >
                                    Save
                                </button>
                            </>
                        ) : (
                            <>
                                <p><strong>Name:</strong> {user.name}</p>
                                <p><strong>Email:</strong> {user.email}</p>
                                <p><strong>Phone:</strong> {user.phone}</p>
                                <p><strong>gender</strong> {user.gender}</p>
                                <p><strong>date:</strong> {user.date}</p>
                                <p><strong>password:</strong> {user.password}</p>
                                <button
                                    onClick={() => {
                                        setEditingId(user._id);
                                        setFormData({
                                            name: user.name,
                                            email: user.email,
                                            phone: user.phone,
                                            gender: user.gender,
                                            date: user.date,
                                            password: user.password,
                                        });
                                    }}
                                    className="bg-blue-500 text-white px-2 py-1 rounded"
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={() => {
                                        if (window.confirm("are you sure to delete this")) {
                                            handleDelete(user._id);

                                        }
                                    }}
                                    className="bg-red-500 text-white px-3 py-1 rounded mt-2"
                                >
                                    Delete
                                </button>
                            </>
                        )}
                    </li>
                ))}
            </ul>




        </div>
    )
}

export default Users