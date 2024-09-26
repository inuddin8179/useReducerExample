
import React, { useReducer } from 'react';


const initialState = {
    username: '',
    email: '',
};


const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USERNAME':
            return { ...state, username: action.payload };
        case 'SET_EMAIL':
            return { ...state, email: action.payload };
        case 'RESET':
            return initialState; 
        default:
            return state;
    }
};

const Form = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("form is submitted")
        console.log('Submitted:', state);
       
        dispatch({ type: 'RESET' });
    };

    return (
        <div>
            <h2>User Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                   
                        <input
                        placeholder='username'
                            type="text"
                            value={state.username}
                            onChange={(e) => dispatch({ type: 'SET_USERNAME', payload: e.target.value })}
                        />
                  
                </div>
                <br />
                <div>
                  
                        <input
                        placeholder='email'
                            type="email"
                            value={state.email}
                            onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
                        />
                  
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
            <h3>Current State:</h3>
            <p>Username: {state.username}</p>
            <p>Email: {state.email}</p>
        </div>
    );
};

export default Form;
