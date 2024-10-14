import express from 'express';
import cors from 'cors';

export class Server {
  private app: express.Application;
  private apiPath: string = '/api';

  constructor() {
    this.app = express();
        
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(express.urlencoded({ 
      extended: true, 
    }));
  }

  private routes(): void {
    // this.app.use(this.apiPath + "/example", exampleRouter)
  }

  // listen function to start the server
  public listen(port: number = Number(process.env.SERVER_PORT)): void {
    if (!port || port < 0 || port > 65535 || isNaN(port)) {
      throw new Error('Invalid port number');
    }
    this.app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port} 🚀`);
    });
  }
}