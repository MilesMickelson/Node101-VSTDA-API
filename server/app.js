const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

const initialData = [
  {
    todoItemId: 0,
    name: 'an item',
    priority: 3,
    completed: false
  },
  {
    todoItemId: 1,
    name: 'another item',
    priority: 2,
    completed: false
  },
  {
    todoItemId: 2,
    name: 'a done item',
    priority: 1,
    completed: true
  }
];

app.get('/', (req, res) => {
  var status = {
    status: 'ok'
  }
  res.status(200).send(status);
});

app.get('/api/TodoItems', (req, res) => {
  res.status(200).send(initialData);
});

app.get('/api/TodoItems/:number', (req, res) => {
  var itemId = req.params.number;
  var reqItem = initialData[itemId];
  res.status(200).send(reqItem);
});

app.post('/api/TodoItems/', (req, res) => {
  var newItem = {
    todoItemId: 0,
    name: 'unique item',
    priority: 1,
    completed: false
  }
  res.status(201).send(newItem);
});

app.delete('/api/TodoItems/:number', (req, res) => {
  var itemId = req.params.number;
  var delItem = initialData[itemId];
  if (delItem == itemId) {
    delItem - itemId;
  }
  res.status(200).send(delItem);
});

app.get('*', ( req, res) => {
  res.status(404).send('404 Error: Page not found');
});

module.exports = app;
