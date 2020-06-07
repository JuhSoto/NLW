//Rota: Endereço completo da requisiçao
 //Recurso: Qual entidade estamos acessando do sistema
 
 //GET: buscar informaçoes do backend
 //POST: criar informaçao no backend
 //PUT: atualizar informaçoes no backend
 //DELETE: remover informaçoes do backend

import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import { errors } from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());
app.listen(3333);