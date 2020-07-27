const css = 
    `<style>
    :root{
        --line-height: 10px;
        --slide-color: #ffd32a;
        --action-color: #ffeaa7;
    }

    *{
        margin: 0;
        padding: 0;
        border: none;
    }

    body{
        display: flex;
        background-color: #1e272e;
        justify-content: center;
        height: 100vh;
        align-items: center;
    }

    #root {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        box-sizing: border-box;
        background-color: #3c40c6;
        border: 25px solid black;
        font-family: 'Press Start 2P', cursive;
        width: 40vw;
        min-width: 768px;
        height: 65vh;
        text-align: center;
        padding-top: 4rem;
        padding-bottom: 8rem;
    }
    </style>`

const head = document.querySelector('head')

head.insertAdjacentHTML('beforeend', css)
