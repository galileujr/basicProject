import styled, {css} from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps{
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean;
}
    
export const Container = styled.div<ContainerProps>`
    border-radius: 10px;
    stroke: solid;
    border: 1px solid #989FDB;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 16px;
    width: 100%;
    max-width: 256px;
    height: 48px;
    margin: auto;
    
    display: flex;
    align-items: center;

    border: 1px solid #989FDB;
    color: #989FDB;
    & + div{
        margin-top: 8px;
    }

    ${props => props.isErrored && css`
        border-color: #c53030;
    `}

    ${props => props.isFocused && css`
        color: #9D25B0;
        border-color: #9D25B0;
    `}

    ${props => props.isFilled && css`
        color: #9D25B0;
    `}

    

    input{  
        flex: 1;
        background: transparent;
        border: 0;
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 48px;
        align-items: center;
        color: #989FDB;
        
        &::placeholder{
            color: #989FDB;
        }
        & + input {
            margin-top: 8px;
        }
    }
    svg{
        margin-right: 2px;
    }
`;
export const Error = styled(Tooltip)`
    height: 20px;
    margin-left: 16px;
    svg {
        margin: 0;
    }
    span {
        background: #c53030;
        color: #fff;
        &::before {
            border-color: #c53030 transparent;
        }
    }
`;
    