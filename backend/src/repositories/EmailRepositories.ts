import {EntityRepository, Repository} from 'typeorm'

import Email from '../models/Email'

@EntityRepository(Email) //este email(models) é o repositorio
class EmailRepository extends Repository<Email>{ //este email é o repositorio
    public async findByDate(email: Email): Promise<Email | null>{
        const findEmail = await this.findOne({
            where: {email},
        });
        return findEmail || null;
    }
}

export default EmailRepository;