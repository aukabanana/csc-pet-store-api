import express from 'express';
import morgan from 'morgan';
import petRouter from './routes/pet.route';
import { Request,Response } from 'express';

const app = express();
const PORT = 3000;

// Middleware
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send("Connected");
})
app.use('/api/pets', petRouter);

// Start
app.listen(PORT, () => {
  console.log(`Pet Store API running on http://localhost:${PORT}`);
});