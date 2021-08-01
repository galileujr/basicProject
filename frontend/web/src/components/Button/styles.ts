import styled from 'styled-components';
import {shade} from 'polished';

export const Container = styled.button`
    border-radius: 10px;
    height: 48px;
    border: 0;
    padding: 0 16px;
    width: 100%;
    max-width: 256px;
    background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);
    box-shadow: 0px 10px 25px #CF99DB;
    border-radius: 8px;
    margin-top: 16px;
    color: #FFFFFF;
    margin-bottom: 24px;
    transition: background-color 0.2s;
    &:hover{
        background: ${shade(0.2,'#9D25B0')};
    }      


  
`;