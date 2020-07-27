const states = [true, false, false]

function showItems(stateItems) {    
    const item = Item`
        .item{
            list-style: none;
            height: calc(var(--line-height)*3);
            width: calc(var(--line-height)*3);
            background-color: var(--slide-color); 
            transition: transform 100ms linear;
            cursor: pointer;
        }
        `

    const itemActive = Item`
       .item.active{
            transform: scale(1.6);
        }

        ${'active'}
    
    `

    const items = stateItems.map(state =>{
        if (state) {
            return itemActive
        } else {
            return item
        }
    })

    console.log(items.join(''));

    return items.join('')
}

function handleClick() {
    const {target} = event
    const allItems = document.querySelectorAll('.item')

    const action = document.querySelector('.action')

    allItems.forEach(item => item.classList.remove('active'))
    target.classList.add('active')
}

function createStyle(css) {
    const head = document.querySelector('head')

    const style = `
        <style>
            ${css}
        </style>
    `
    head.insertAdjacentHTML('beforeend', style)
}

const Action = (css) => {
    createStyle(css)

    return(
        `<li class="action"></li>`  
    )
}

const Item = (css, className) => {
    createStyle(css)

    return (`
    <li 
        class="item" ${className}
        onclick="handleClick(event)">
    </li>
`)}

const Slide = (css, content = '') => (
    `<ul style="${css}">${content}</ul>`
)

const action = Action`
    .action{
        list-style: none;
        height: calc(var(--line-height)*4);
        width: calc(var(--line-height)*4);
        background-color: var(--action-color);
        position: absolute;
        left: -5px;
    }

    .action.second{
        transform: translateX(268px);
    }

    .action.third{
        transform: translateX(540px);
    }
`

const slide = Slide`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 80%;
    height:var(--line-height);
    margin-top: 90px;
    background-color: var(--slide-color);
    ${showItems(states) + action}
`
