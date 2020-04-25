import express from 'express';
import{routesConfig as skillRoute} from './modules/routes.config';

const router = express.Router();


skillRoute(router);

export default router;