import express from 'express';
import cors from 'cors';
import { router } from './routes';
import { bootstrap } from './bootstrap';

const app = express();
const port = 3002;

app.use(express.json());
app.use(cors());
app.use('/api/v1', router);

app.listen(port, async () => {
  bootstrap();
  console.log(`🚀 Inventory service listening on port ${port}`);
});