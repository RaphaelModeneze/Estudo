import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { gradeRouter } from './routes/gradeRouter.js';
import dotend from 'dotenv';

import { db } from './models/index.js';

(async () => {
  try {
    await db.mongoose.connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado com sucesso ao MongoDB');
  } catch (error) {
    console.log('Erro ao conectar no MongoDB. ' + error);
    process.exit();
  }
})();

const appExpress = express();

appExpress.use(bodyParser.json());
appExpress.use(bodyParser.urlencoded({ extended: true }));
appExpress.use(
  cors({
    origin: 'http://localhost:8080',
  })
);
appExpress.use(gradeRouter);

gradeRouter.get('/', (req, res) => {
  res.send('API em execucao');
});

appExpress.listen(process.env.PORT || 8081, () => {
  console.log('API Bank Started...');
});
