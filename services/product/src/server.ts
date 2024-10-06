import express from 'express';
import cors from 'cors';
import { router } from './routes';
import { bootstrap } from './bootstrap';

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());
app.use('/api/v1', router);

app.listen(port, async () => {
  await bootstrap();
  console.log(`🚀 Product service listening on port ${port}`);
})

