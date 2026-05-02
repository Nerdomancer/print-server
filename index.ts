import express from 'express';

const fileUpload = require("express-fileupload");

const PORT = 3012;
const app = express();

app.use(fileUpload());

app.post("/upload", function (req: Request, res: Response){
	if(req.files && Object.keys(req.files).length !== 0){
		const uploadedFile = req.files.uploadFile;
		console.log(uploadedFile);
		const uploadPath = __dirname + "/uploads/" + uploadedFile.name;
		console.log(uploadPath);
		uploadedFile.mv(uploadPath, function (err) {
		if (err) {
			console.log(err);
			res.send("Failed !!");
		} else res.send("Successfully Uploaded !!");
    });
	}
})

app.get('/', (req: Request, res: Response) => {
	console.log("testing testing");
	res.sendFile("/home/nerdomancerkirou/projects/printserver/html/index.html");
});

app.listen(PORT, ()=>{
	console.log("server sharted");
})
