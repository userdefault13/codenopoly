// server/index.js

require('./db');
require('dotenv').config();
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const cors = require('cors');
const User = require('./models/User');
const { v4: uuidv4 } = require('uuid');

// Create an Express app
const app = express();

// Allow Cross-Origin requests
app.use(cors());

const { v4: uuidv4 } = require('uuid');

app.post('/api/createRoom', (req, res) => {
    const roomId = uuidv4();
  // Store the room ID on the server or in the database (e.g., MongoDB)

  // You can also initialize the room's state (e.g., players, game board, etc.)
    res.status(200).json({ roomId });
});

app.post('/api/joinRoom', (req, res) => {
    const { roomId, playerName } = req.body;
    const room = MonopolyGame.getRoom(roomId);

    if (!room) {
        return res.status(404).json({ error: 'Room not found' });
    }

    // Check if the room has space for more players (e.g., limit to 4 players)
    if (room.players.length >= 4) {
        return res.status(400).json({ error: 'Room is full' });
    }

    // Add the player to the room
    room.players.push({ id: playerId, name: playerName, balance: 1500, position: 0, properties: [] });

    res.status(200).json({ message: 'Player joined the room' });
});

app.post('/api/startGame', (req, res) => {
    const { roomId } = req.body;
    const room = MonopolyGame.getRoom(roomId);

    if (!room) {
        return res.status(404).json({ error: 'Room not found' });
    }

    // Check if the room has enough players to start the game (e.g., at least 2 players)
    if (room.players.length < 2) {
        return res.status(400).json({ error: 'Not enough players to start the game' });
    }

    // Implement the game start logic here, e.g., distribute properties, set starting player, etc.

    // Broadcast the game state to all players
    // You can use WebSockets for real-time communication between the server and clients

    res.status(200).json({ message: 'Game started' });
});

// Set up GraphQL schema
const typeDefs = gql`
    type Query {
        hello: String
    }

    type Mutation {
        login(username: String!, password: String!): String
        # Add other mutations related to your game here
    }
`;

const resolvers = {
    Query: {
        hello: () => 'Hello, world!',
    },
    Mutation: {
        login: async (_, { username, password }) => {
        const user = await User.findOne({ username });
        if (!user) throw new Error('User not found');
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) throw new Error('Invalid password');
        // In a real application, generate a JWT token here and return it to the client
        return 'Login successful';
        },
        // Add resolver functions for other mutations related to your game here
    },
};

async function startServer() {
    const server = new ApolloServer({ typeDefs, resolvers });

  // Wait for the server to start
    await server.start();

  // Apply the GraphQL middleware to the Express app
    server.applyMiddleware({ app });

  // Start the server
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}${server.graphqlPath}`);
    });
}

// Call the async function to start the server
startServer();
