import { json, urlencoded } from 'body-parser';
import express from 'express';
import router from './routes';


const app = express();

app.use(express.static('images'));

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
	res.header('Access-Control-Expose-Headers', 'Content-Length');
	res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, token');
	if (req.method === 'OPTIONS') {
		return res.send(200);
	}
	return next();
});
app.use(json({ limit: '50mb', type: 'application/json' }));
app.use(urlencoded({
	limit: '50mb',
	extended: true,
}));

app.use('/api', router);


app.listen(3000, () => {
	console.log("App listening at port 3000");
});
