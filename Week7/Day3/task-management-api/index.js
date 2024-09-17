import express from 'express';
import tasksRouter from './routes/tasks.js';

const app = express();
app.use(express.json());
app.use('/api/tasks', tasksRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;
