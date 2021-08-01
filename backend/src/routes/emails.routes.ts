
import {Router} from 'express';
import {getCustomRepository, SimpleConsoleLogger} from 'typeorm';
import EmailRepository from '../repositories/EmailRepositories';

import CreateEmailService from '../services/CreateEmailServices';
import SigInService from '../services/sigIn';

const emailRouter = Router();

emailRouter.get('/', async (request,response) =>{
     const emailsRepository = getCustomRepository(EmailRepository);
     const emails = await emailsRepository.find();
    
    return response.json(emails);
})

emailRouter.post('/singUp',async (request, response) => {
    try{
        const {email, password} = request.body;
        const createEmail = new CreateEmailService();
        const emailCreate = await createEmail.execute({
            email,
            password,
        })        
        return response.json(emailCreate);
    }catch(err) {
        return response.status(400).json({error: err.message});
    }
});

emailRouter.post('/sigIn',async (request, response) => {
    try{
        const {email, password} = request.body;
        const createEmail = new SigInService();
        const emailCreate = await createEmail.execute({
            email,
            password,
        })        
        return response.json(emailCreate);
    }catch(err) {
        return response.status(400).json({error: err.message});
    }
});

export default emailRouter;

