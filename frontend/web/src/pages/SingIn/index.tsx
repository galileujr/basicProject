import React, {useRef,useCallback} from 'react';
import {FiLogIn,FiMail,FiLock} from 'react-icons/fi';
import {Form } from '@unform/web';
import {FormHandles} from '@unform/core';

import {Container,Content,Background} from './styles';
import Input  from '../../components/Input';
import Button from '../../components/Button';
import * as Yup from 'yup';
import {Link,useHistory} from 'react-router-dom';
import getValidationErrors from '../../utils/getValidationsErros';
import {useAuth} from '../../hooks/AuthContext';
import {useToast} from '../../hooks/toast';

interface SingInFormData{
  email: string;
  password: string;
}

const SingIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();
  
  const handleSubmit = useCallback (async (data: SingInFormData) => {
    try{
      formRef.current?.setErrors({})
      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório').email('Informe um e-mail valido'),
        password: Yup.string().required('Senha obirgatória'),
      })
      await schema.validate(data, {
        abortEarly: false,
      });
      await signIn({
        email: data.email,
        password: data.password,
      });
      history.push('/Repository');
    } catch(err) {
      if (err instanceof Yup.ValidationError){
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors)
      }
      addToast({
        type: 'error',
        title: 'Erro na autenticação',
        description: 'Ocorreu um erro ao fazer login'
      });   
    }
  },[signIn,history,addToast]);
  return (   
    <Container>
      <Background/>    
      <Content>              
        <Form ref={formRef} onSubmit={handleSubmit}>   
          <h1>Olá, seja bem vindo</h1>  
          <p>Para acessar a plataforma,faça seu login</p>
          <Input 
            name="email" 
            icon={FiMail} 
            placeholder="user.name@mail.com"/>
          <Input 
            name="password" 
            icon={FiLock} 
            type="password" 
            placeholder="*******"/>  
          <Button type="submit">Entrar</Button>   
        </Form>
        <Link to="/singup">
          <FiLogIn />
            Criar conta
        </Link>
      </Content>              
    </Container>
  )
  };
export default SingIn;