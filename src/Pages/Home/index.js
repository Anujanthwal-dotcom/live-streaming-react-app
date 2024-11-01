import React from 'react';
import { useState } from 'react';
import {useNavigate } from 'react-router-dom';
function Home() {

    const [roomCode, setRoomCode] = useState('');
    const Navigate = useNavigate();
    const handleFormSubmit = (e) => {
        e.preventDefault();
        Navigate('/room/'+roomCode);
    }
    
    return(
        <div className='Home'>
            <form onSubmit={handleFormSubmit} className='form'>
                <div>
                    <label>Enter room code</label>
                    <input value = {roomCode} onChange={(e) => setRoomCode(e.target.value)} type='text>' required placeholder='Enter room code'/>
                    
                </div>
                <button type = "submit">Join</button>
            </form>
        </div>
    );
}

export default Home;