import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 7000;

app.use(function(_, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req: Request, res: Response) => {
  res.send(`{"info": "Express + TypeScript Server"}`);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
