import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';

import AccountRoutes from './v1/routes/account';
dotenv.config();

const app: express.Application = express();
const PORT: string = process.env.PORT ?? '5000';

app.use(cors());
app.use(helmet());

// Routes
app.use(AccountRoutes);

app.listen(PORT, () => {
  console.log(`server up and running at http://localhost:${PORT}`);
});
