require('dotenv').config();
const http=require('http');
const app=require('./app/app.js');

const server=http.createServer(app);

console.log(process.env.PORT);

const PORT=process.env.PORT || 8000;
server.listen(PORT,()=>{
	console.log(`Server listening on port ${PORT}`)
})