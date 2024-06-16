import express, {Application, json, Request, Response } from 'express';
import cors from "cors";
import { jewelryRouter } from './routers/jewelryRouter';
import { singleRouter } from './routers/singleRouter';

const app: Application = express();
const port = 3000;

app.use(json());
app.use(cors());


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use("/api", jewelryRouter);
app.use("/api", singleRouter);


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});


