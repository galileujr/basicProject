import styled from 'styled-components';
import img from '../assets/img2.png';
import {shade} from 'polished';

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: stretch;
    background: #E5E5E5;
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    
    place-content: center;

    //flex: 1;
    width: 50%;
    min-width: 300px;
    max-width: 700px;
    background: #E5E5E5;
    font-family: Montserrat;
    color: #989FDB;
    align-items: center;
    form{
        //margin: 80px 0;
        width: 340px;
        text-align: center;;
        h1{
            margin-bottom: 24px;
            font-style: regular;
            font-size: 40px;
            line-height: 48px;
            vertical-align: top;
            color: #383E71;
            fill: solid;
        }
        p{
            padding: 16px; 
            font-style: normal;
            font-size: 16px;
            font-weight: 600;
            line-height: 20px;
            line-height: 103%;
            vertical-align: top;
            color: #989FDB;
            fill: solid;
            margin-bottom: 24px;            

        }
        a {
            display: block;
            margin-top: 24px;
            text-decoration: none;
            font-weight: bold;
            font-style: oblique;
            transition: color 0.2s;
            font-family: Montserrat;
            color: #989FDB;
            align-items: center;
            &:hover{
                color: ${shade(0.2,'#ff9000')};
            }  
        }
    }    
    > a {
        margin-top: 24px;
        text-decoration: none;
        transition: color 0.2s;
        font-family: Montserrat;
        color: #989FDB;

        display: flex;
        align-items: center;
        svg{
            margin-right: 5px;
        }
        &:hover{
            color: ${shade(0.2,'#ff9000')};
        }  
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${img}) no-repeat center;
    background-size: cover;
`;
