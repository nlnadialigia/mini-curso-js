const pathJelly = 'images/jelly.png'
const jelly = Character`
    width: 20%;
    margin-top: 90px;
    ${pathJelly}
`
const WrapperCharacters = (css, children) => (`
    <div style="${css}">${children}</div>    
`)

const wrapperCharacters = WrapperCharacters`
    display: flex;
    justify-content: space-evenly;
    ${jelly+jelly+jelly}
`


