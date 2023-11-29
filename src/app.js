import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import serviciosRouter from './router/servicios.routes';

const app = express();

// seting
app.set('PORT', process.env.PORT || 8181);

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my web aplication api' });
})

app.use('/api/servicios', serviciosRouter);

export default app;