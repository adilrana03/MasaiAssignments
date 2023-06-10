import React from 'react';
import { useState, useEffect } from 'react';

function TodoList(props) {
    const [state, setState] = useState([]);
    const [input, setInput] = useState({
        name: '',
        email: '',
        language: '',
        gender: '',
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        await fetch('http://localhost:3000/')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setState(data);
            });
    };

    const handleChange = async (e) => {
        await setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:3000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(input),
        });
        fetchData();
    };

    const handleDelete = async (id) => {
        await fetch(`http://localhost:3000/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        fetchData();
    };

    return (
        <div style={{ display: 'flex' }}>
            <div
                style={{
                    width: '20%',
                    height: '300px',
                    margin: '70px auto',
                    boxShadow: '0 0 10px black',
                    padding: '10px',
                    textAlign: 'center',
                }}
            >
                <h1>POST DATA</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        placeholder='Enter your name'
                        onChange={handleChange}
                        name='name'
                    />
                    <br></br>
                    <br></br>
                    <input
                        type='text'
                        placeholder='Enter your email'
                        onChange={handleChange}
                        name='email'
                    />
                    <br></br>
                    <br></br>
                    <input
                        type='text'
                        placeholder='Enter your language'
                        onChange={handleChange}
                        name='language'
                    />
                    <br></br>
                    <br></br>
                    <input
                        type='text'
                        placeholder='Enter your gender'
                        onChange={handleChange}
                        name='gender'
                    />
                    <br></br>
                    <br></br>
                    <input type='submit' />
                </form>
            </div>
            <div
                style={{
                    width: '50%',
                    margin: 'auto',
                    boxShadow: '0 0 10 black',
                    alignItems: 'center',
                    boxShadow: '0 0 10px black',
                    textAlign: 'center',
                    padding: '30px',
                }}
            >
                <h1>List of Users</h1>
                <table border='1px' cellPadding='5px'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Language</th>
                            <th>Gender</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.length &&
                            state.map((el) => {
                                return (
                                    <tr key={el.id}>
                                        <td>{el.id}</td>
                                        <td>{el.name}</td>
                                        <td>{el.email}</td>
                                        <td>{el.language}</td>
                                        <td>{el.gender}</td>
                                        <td>
                                            <button
                                                onClick={() =>
                                                    handleDelete(el.id)
                                                }
                                            >
                                                delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TodoList;
