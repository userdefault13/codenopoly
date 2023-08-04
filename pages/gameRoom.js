// pages/gameroom/[roomId].js
import { useRouter } from 'next/router';

const GameRoom = () => {
  const router = useRouter();
  const { roomId } = router.query; // Access the dynamic route parameter 'roomId'

  return (
    <div>
      <h1>Game Room {roomId}</h1>
      {/* Add your game room UI and logic here */}
    </div>
  );
};

export default GameRoom;
