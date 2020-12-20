/**
 * CONFIGURACIÓN DEL SERVIDOR BÁSICO
 */
import express from 'express';
import colors from 'colors';
import morgan from 'morgan';
import cors from 'cors';
import TasksRoutes from './routes/tasks-routes';

const app = express();

/**
 * Middlewares
 */
const corsOptions = {};
app.use(cors({corsOptions}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

/**
 * Settings
 */
app.set('port', process.env.PORT || 3000);

/**
 * Rutas
 */
app.set('/', (req, res) => {
    res.json({ message: 'Welcome to my aplication.' });
});

app.use('/api/tasks', TasksRoutes);

export default app;