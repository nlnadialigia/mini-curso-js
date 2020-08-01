const root = document.querySelector("#root");
const textTitle = "Felicidade";

// Tagged Template String
const title = Title`
    color: var(--title-color);
    font-size: 60px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1.2px;

    ${textTitle};
`;
root.insertAdjacentHTML("beforeend", title);
root.insertAdjacentHTML("beforeend", wrapperCharacters);
root.insertAdjacentHTML("beforeend", slide);
