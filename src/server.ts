import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import mustache from 'mustache-express';
require('dotenv').config();

import mainRoutes from './routes/index';
import passport from 'passport';

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));
server.use(cookieParser());
server.use(express.urlencoded({extended: true}));
server.use(require('express-session')({ secret: process.env.SECRET, resave: true, saveUninitialized: true }));
server.use(passport.initialize());
server.use(passport.session());

server.use('/', mainRoutes);

server.use((req: Request, res: Response)=>{
    res.status(404).send(`Pagina nao encontrada`);
});

server.listen(80);