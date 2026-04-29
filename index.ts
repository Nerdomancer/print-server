import express from 'express';

const PORT = 3012;
const app = express();

app.get('/', (req: Request, res: Response) => {
	console.log("testing testing");
	res.send("wassup");
});

app.listen(PORT, ()=>{
	console.log("server sharted");
})
