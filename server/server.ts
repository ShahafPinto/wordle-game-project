import express, {Express, Request, Response} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {  checkGuess, Istate, setNewWord } from './gameLogic';

const app: Express = express();
const port = 3333;
app.use(cors());
const router = express.Router();

// to use body-parser as middle-ware:
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", router);


router.post('/handle',(req,res) => {
    const userguess = req.body
    console.log('the guess: ',userguess.guess)
    let state:Istate;
    if(userguess.guess){
        state=checkGuess(userguess.guess)
        console.log('the state: ',state)
        res.send({state})
    }
    
});

router.get('/words', (req: Request,res: Response)=>{
    res.json(setNewWord())
});

app.listen(port, ()=>{
    console.log(`server running at local host:${port}`)
});