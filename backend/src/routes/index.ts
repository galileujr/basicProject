import {Router} from 'express';
import emailRouter from './emails.routes';

const routes  = Router();

routes.use('/email',emailRouter);

export default routes;