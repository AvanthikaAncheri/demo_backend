const express = require('express')
const cors = require('cors')
const router = require('./Router')
const connection = require('./Config/mongo')
const dotenv = require('dotenv')

connection()

const app = express()
app.use(express.json())
app.use(cors())
app.use('/',router)

dotenv.config()
const Port = process.env.port || 4000
app.listen(Port,console.log(`Server running at port : ${Port}`))


// Here are some sample machine test questions for Node.js:

// Question: Write a Node.js program that reads a JSON file containing an array of objects, sorts the objects by a specific property, and then writes the sorted objects back to a new JSON file.

// Question: Implement a simple RESTful API using Express.js that allows users to perform CRUD operations on a collection of items (e.g., books, products). Include routes for creating, reading, updating, and deleting items.

// Question: Write a Node.js program that uses the fs module to recursively list all files in a given directory and its subdirectories. Print the file paths to the console.

// Question: Create a simple authentication system in Node.js using JWT (JSON Web Tokens). Implement routes for user signup, login, and access to protected routes using JWT.

// Question: Write a Node.js program that connects to a MongoDB database using Mongoose and defines a schema for a "User" collection. Implement CRUD operations for managing user data.

// Question: Implement a real-time chat application using Socket.IO and Express.js. Allow users to join chat rooms and exchange messages in real time.

// Question: Write a Node.js program that uses the http module to create a simple HTTP server. The server should respond with "Hello, World!" for all requests.