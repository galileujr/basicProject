import {getCustomRepository} from 'typeorm';

import Email from '../models/Email';
import EmailRepository from '../repositories/EmailRepositories';
import AppErrors from '../errors/AppErrors'

interface Request{
    email: string;
    password: string;
}
class CreateEmailService{
    public async execute({email, password}: Request): Promise<Email>{
        const emailsRepository = getCustomRepository(EmailRepository); 
                
        const checkUserExists = await emailsRepository.findOne({
            where: {email},
        });
        
        if (checkUserExists){
            throw new AppErrors('Email address already used.');
        }
        
        const emailCreate = emailsRepository.create({
            email,
            password,            
        })

        await emailsRepository.save(emailCreate);
        
        return emailCreate;        
    }
}
export default CreateEmailService;