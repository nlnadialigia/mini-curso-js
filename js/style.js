const css = 
    `<style>
    :root{
        --line-height: 10px;
        --slide-color: #ffd32a;
        --action-color: #ffeaa7;
        --title-color: #B33771;
        --bg-color: #182C61;
    }

    *{
        margin: 0;
        padding: 0;
        border: none;
    }

    body{
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        background-color: #1e272e;
        height: 600px;
        width: 600px;
        transform: translate(-50%, -50%)
    
        
        
    }

    #root {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        box-sizing: border-box;
        background-color: var(--bg-color);
        border: 1px solid black;
        box-shadow: inset 0 0 2em silver, 0 0 2em var(--title-color);
        font-family: 'Rowdies', cursive;
        
        
        height: 65vh;
        text-align: center;
        padding-top: 4rem;
        padding-bottom: 8rem;
    }
    </style>`

const head = document.querySelector('head')

head.insertAdjacentHTML('beforeend', css)
