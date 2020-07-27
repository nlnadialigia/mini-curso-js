const pathGueio = 'images/gueio.png'
const gueio = Character`
    width: 10%;
    margin-top: 90px;
    ${pathGueio}
`
const WrapperCharacters = (css, children) => (`
    <div style="${css}">${children}</div>    
`)

const wrapperCharacters = WrapperCharacters`
    display: flex;
    justify-content: space-evenly;
    ${gueio+gueio+gueio}
`
