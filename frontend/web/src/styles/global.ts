import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-border-box;
    }
    body{
        background: #E5E5E5 ;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button{
        font: 16px Montserrat, sans-serif;
    }
    #root {
        //max-width: 256px;
        //margin: 0 auto;
        //padding: 40px 20px;
    }
    button{
        cursor: pointer;
    }

`;