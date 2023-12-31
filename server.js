const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

// Arreglo de tareas
const tasks = [
  {
    id: '123456',
    isCompleted: false,
    description: 'Walk the dog'
  }
];

// Ruta para obtener todas las tareas
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
