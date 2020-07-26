const css = 
    `<style>
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
        box-sizing: border-box;
        background-color: #3c40c6;
        font-family: 'Press Start 2P', cursive;
        width: 500px;
        min-width: 768px;
        height: 500px;
        text-align: center;
        padding-top: 4rem;
    }
    </style>`

const head = document.querySelector('head')

head.insertAdjacentHTML('beforeend', css)
