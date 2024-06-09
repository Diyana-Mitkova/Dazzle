import express, {Application, json, Request, Response } from 'express';
import cors from "cors";

const app: Application = express();
const port = 3000;

app.use(json());
app.use(cors());


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/user=:id', (req: Request, res: Response): void => {
    const params = req.params

    res.send( params.id)
  });

  app.get('/user=:id/age=:number', (req: Request, res: Response): void => {
    const params = req.params

    res.send(`${params.id} - ${params.number}`)
  });

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});


