// pages/selectToken.js
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Import the useRouter hook

const SelectToken = () => {
    const [selectedToken, setSelectedToken] = useState('');
    const router = useRouter(); // Initialize the useRouter hook

    const handleTokenSelect = (token) => {
        setSelectedToken(token);
    };

    const handleContinue = () => {
        // Save the selected token for the player, e.g., by sending it to the backend
        // You can use a state management library like Redux or store it in a global context

        // For demonstration purposes, we'll just log the selected token here
        console.log('Selected Token:', selectedToken);

        // Navigate to the lobby page after selecting a token
        router.push('/lobby');
    };

    // List of available tokens
    const tokens = [
        'Top Hat',
        'Dog',
        'Car',
        'Boat',
        // Add more tokens as needed
    ];

    return (
        <div>
        <h1>Select Your Token</h1>
        <div>
            {tokens.map((token) => (
            <div key={token} onClick={() => handleTokenSelect(token)}>
                {selectedToken === token ? <strong>{token}</strong> : token}
            </div>
            ))}
        </div>
        <button onClick={handleContinue}>Continue</button>
        <br />
        <Link href="/lobby">
            Back to Lobby
        </Link>
        </div>
    );
};

export default SelectToken;
