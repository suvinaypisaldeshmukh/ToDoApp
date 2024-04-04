// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Initialize Express app
const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Sample in-memory database
let todos = [];

// Route to get all todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

// Route to add a new todo
app.post('/todos', (req, res) => {
    const { title, description } = req.body;
    const newTodo = { id: todos.length + 1, title, description };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// Route to get a specific todo by ID
app.get('/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    const todo = todos.find(todo => todo.id === todoId);
    if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
    }
    res.json(todo);
});

// Route to update a specific todo by ID
app.put('/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    const todoIndex = todos.findIndex(todo => todo.id === todoId);
    if (todoIndex === -1) {
        return res.status(404).json({ message: 'Todo not found' });
    }
    const { title, description } = req.body;
    todos[todoIndex] = { ...todos[todoIndex], title, description };
    res.json(todos[todoIndex]);
});

// Route to delete a specific todo by ID
app.delete('/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    const todoIndex = todos.findIndex(todo => todo.id === todoId);
    if (todoIndex === -1) {
        return res.status(404).json({ message: 'Todo not found' });
    }
    todos.splice(todoIndex, 1);
    res.json({ message: 'Todo deleted successfully' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});