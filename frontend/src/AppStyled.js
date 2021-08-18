import styled from 'styled-components'

export const ContainerApp = styled('div')`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 45px;

    h1{
        font-family: sans-serif;
        color: rgba(0,0,0,0.5);
        letter-spacing: 3px;
    }

    .boxForm{
        width: 320px;
        display: flex;
        align-items: center;

        form{
            display: flex;

            div{
                margin-right: 15px;

                input{
                    width: 250px;
                    padding: 7px 10px;
                    font-size: 21px;
                    outline: 0;
                    border-top: none;
                    border-left: none;
                    border-right: none;
                    border-bottom: 1px solid #1E90FF;
                }
            }

            button{
                padding: 7px 30px;
                color: #1E90FF;
                font-family: sans-serif;
                text-transform: uppercase;
                background-color: transparent;
                border: 1px solid #1E90FF;
                border-radius: 5px;
                transition: all 0.3s ease;
                cursor: pointer;
            }
            button:hover{
                background-color: #1E90FF;
                border: 1px solid white;
                color: white;
            }
        }
    }
`