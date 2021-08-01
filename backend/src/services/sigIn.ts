import {getCustomRepository} from 'typeorm';

import Email from '../models/Email';
import EmailRepository from '../repositories/EmailRepositories';
import AppErrors from '../errors/AppErrors'

interface Request{
    email: string;
    password: string;
}
class SigInService{
    public async execute({email, password}: Request): Promise<Email>{
        const emailsRepository = getCustomRepository(EmailRepository); 
                
        const checkUserExists = await emailsRepository.findOne({
            where: {email},
        });
        
        if (!checkUserExists || checkUserExists.password != password ){
            throw new AppErrors('Incorrect email user and passweord');
        }
        
        return checkUserExists;        
    }
}
export default SigInService;