import React from 'react';
import { useTransition } from 'react-spring';

import Toast from './Toast';
import { ToastMessage } from '../../hooks/toast'
import { Container } from './style';

interface ToastContainerProps{
    messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
    const messagesWithTransitions = useTransition(
      messages,
      {
        from: { right: '-120%', opacity: 0 },
        enter: { right: '0%', opacity: 1 },
        leave: { right: '-120%', opacity: 1 },
        keys: message => message.id,
      },
    );
    return (
        <Container>
            {messagesWithTransitions(( style, item,props, i ) => (
                <Toast key={i} style={style} message={item} />    
            ))}                
        </Container>
    );
};

export default ToastContainer;