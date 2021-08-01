import React, {useCallback,useRef} from 'react';
import {FiArrowLeft,FiMail,FiUser,FiLock} from 'react-icons/fi';
import {FormHandles} from '@unform/core';
import {Form } from '@unform/web';
import * as Yup from 'yup';
import {Link,useHistory} from 'react-router-dom';

import {Container,Content,Background} from './styles';
import Input  from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationsErros';
import api from '../../services/api';

interface SignUpFromData {
  name: string;
  email: string;
  password: string;
}

const SingUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback (async (data: SignUpFromData) => {
    try{
      formRef.current?.setErrors({})
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('E-mail obrigatório').email('Informe um e-mail valido'),
        password: Yup.string().min(6,'minimo 6 digitos'),
      })
      await schema.validate(data, {
        abortEarly: false,
      });
      await api.post('/email',data);
      history.push('/');
    } catch(err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors)
    }
  },[history]);
  
  return (
    <Container>
    <Content>              
      <Form ref={formRef} onSubmit={handleSubmit}>   
        <h1>Faça seu cadastro</h1>  
        <Input 
          name="name" 
          icon={FiUser} 
          placeholder="Informe o seu nome"/>        
        <Input 
          name="email" 
          icon={FiMail} 
          placeholder="user.name@mail.com"/>
        <Input 
          name="password" 
          icon={FiLock} 
          type="password" 
          placeholder="*******"/>  
        <Button type="submit">Cadastar</Button>   
      </Form>
      <Link to="/">
        <FiArrowLeft />
          Voltar para logon
      </Link>
    </Content> 
    <Background/>              
  </Container>
  )
}   
  
;
export default SingUp;