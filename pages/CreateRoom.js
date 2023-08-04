// frontend/pages/CreateRoom.js

import { useState } from 'react';
import axios from 'axios';

const CreateRoom = () => {
  const [roomName, setRoomName] = useState('');

  const handleCreateRoom = async () => {
    try {
      // Send a POST request to the backend API to create a new room
      const response = await axios.post('/api/createRoom', {
        roomName: roomName,
        // Add other necessary data for room creation
      });

      // If the response is successful, navigate to the newly created room
      if (response.data.success) {
        window.location.href = `/gameroom/${response.data.roomId}`;
      }
    } catch (error) {
      console.error('Error creating room:', error);
    }
  };

  return (
    <div>
      <input type="text" value={roomName} onChange={(e) => setRoomName(e.target.value)} />
      <button onClick={handleCreateRoom}>Create Room</button>
    </div>
  );
};

export default CreateRoom;
