import express, {Express, Request, Response} from 'express';
import cors from 'cors';


const app: Express = express();
const port = 3333;
app.use(cors());

const wordsApi = {
    words:["HELLO","GUESS","WRITE","SMART","FUNNY"]
}

const getNewWord = ()=>{
    return wordsApi.words[Math.floor(Math.random() * wordsApi.words.length)]
}

app.get('/words', (req: Request,res: Response)=>{
    res.json(getNewWord());
});

app.listen(port, ()=>{
    console.log(`server running at local host:${port}`);
});