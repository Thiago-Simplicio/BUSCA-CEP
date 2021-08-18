import styled from 'styled-components'

export const BoxData = styled('div')`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;

    form{
        position: relative;
        box-shadow: 0px 5px 7px rgba(0,0,0,0.5);
        width: 75%;

        div{
            margin: 15px;
            display: flex;
            gap: 15px;

            label{
                font-size: 19px;
                font-family: sans-serif;
            }

            input{
                width: 100%;
                border: none;
                font-family: sans-serif;
                font-size: 18px;
            }
        }

        .box-button{
            display: flex;
            justify-content: flex-end;

            button{
                padding: 7px 7px;
                border: 1px solid blue;
                color: blue;
                font-family: sans-serif;
                text-transform: uppercase;
                transition: all 0.3s ease;
                border-radius: 5px;
                cursor: pointer;
            }
            button:hover{
                border: 1px solid white;
                color: white;
                background-color: blue;
            }
        }
        
    }
`