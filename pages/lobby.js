// pages/lobby.js

import { useState } from 'react';


const Lobby = () => {
    const [roomIdInput, setRoomIdInput] = useState('');
    const [playerNameInput, setPlayerNameInput] = useState('');

    const handleJoinRoom = async (e) => {
        e.preventDefault();
        try {
        const response = await fetch('/api/joinRoom', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ roomId: roomIdInput, playerName: playerNameInput }),
        });

        if (response.ok) {
            // Handle successful join, such as redirecting to the game room
            // For simplicity, we'll just reset the form fields here
            setRoomIdInput('');
            setPlayerNameInput('');
        } else {
            console.error('Failed to join room');
        }
        } catch (error) {
        console.error('Error joining room:', error);
        }
    };

    return (
        <div>
        <h1>Lobby</h1>
        <button onClick={handleCreateRoom}>Create New Room</button>

        <form onSubmit={handleJoinRoom}>
            <input
            type="text"
            placeholder="Room ID"
            value={roomIdInput}
            onChange={(e) => setRoomIdInput(e.target.value)}
            />
            <input
            type="text"
            placeholder="Your Name"
            value={playerNameInput}
            onChange={(e) => setPlayerNameInput(e.target.value)}
            />
            <button type="submit">Join Room</button>
        </form>
        </div>
    );
};

export default Lobby;
