<h1 align="center">
    <img src="https://ik.imagekit.io/l7cwocexhc/js_PXjeSd3cGP.jpeg">
</h1>

<h2 align="center">
    Mini Curso de Javascript Feliz!
</h2>

---

## Curso desenvolvido em 4 aulas por Marco Bruno (marcobrunodev).

O curso propõe formas de desenvolver o conteúdo todo em javascript, incluindo o html e css.

### :pushpin: Aula 01

:paperclip: **Conceito utilizado:** *insertAdjacentHTML*.

- É usado para inserir um texto como arquivo HTML em uma posição especificada. Este método é usado para alterar ou adicionar texto como HTML.

:paperclip: **Sintaxe:** 
```js
element.insertAdjacentHTML(posição, texto)
```

:paperclip: **Posição:** é a posição em relação ao elemento, e deve ser um dos seguintes tipos:

```js
'beforebegin'
Antes do elemento.

'afterbegin'
Dentro do elemento, antes de seu primeiro filho (childNode).

'beforeend'
Dentro do elemento, após seu último filho (childNode) .

'afterend'
Após o elemento.
```
:paperclip: **Texto:** é a string a ser analisada como HTML e inserido na árvore.

*Fonte*: https://developer.mozilla.org/pt-BR/docs/Web/API/Element/insertAdjacentHTML

---

### :pushpin: Aula 02

:paperclip: **Conceito utilizado:** *Tagged template strings*.

- É uma forma mais avançada da *template string*. Com eles, você tem a possibilidade de modificar a saída dos template strings usando uma função. 
- O primeiro argumento contém um array de literais. 
- Do segundo em diante e cada argumento subsequente contém valores previamente processados (algumas vezes chamados cooked) pelas expressões de substituição. 
- No final, a função retorna a string ja manipulada

:paperclip: **Exemplo:** 

```js
const a = 5;
const b = 10;

function tag(strings, ...values) {
  console.log(strings[0]); // "Hello "
  console.log(strings[1]); // " world"
  console.log(values[0]);  // 15
  console.log(values[1]);  // 50

  return "Bazinga!";
}

tag`Hello ${ a + b } world ${ a * b}`;
// "Bazinga!"
```

*Fonte*: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/template_strings

---
### :pushpin: Aula 03


---
### :pushpin: Aula 04


--- 
Desenvolvido 💖 por Nádia Ligia