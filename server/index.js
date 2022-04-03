import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import notesRoutes from './routes/posts.js';

const app = express();

app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true})); 
app.use(cors());

app.use('/posts', notesRoutes);

const CONNECTION_URL = 'mongodb+srv://Shanza:tCxj9aJzWQtKsPtS@cluster0.5wpfo.mongodb.net/postsDb?retryWrites=true&w=majority';
const PORT =  5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

