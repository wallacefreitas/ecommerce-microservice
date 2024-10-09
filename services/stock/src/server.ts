import express from 'express';
import cors from 'cors';
import { bootstrap } from './bootstrap';

const app = express();
const port = 3002;

app.use(express.json());
app.use(cors());

const server = app.listen(port, async () => {
  bootstrap();
  console.log(`🚀 Stock service listening on port ${port}`);
});