/*
=========================================================================
Nome do Projeto: Carrinho de Compras em Javascript
Finalidade: Cursos de Informática do IFSP campus Caraguatatuba 
Fonte Base: Projetos do Curso B7Web - https://b7web.com.br/ 
Autor: Denny Paulista Azevedo Filho
License: MIT License
========================================================================= 
*/

let modelsJson = [
    {id:1, name:'Banana', img:'img/banana.jpg', price:[5.79, 28.00, 55.00], sizes:['', '', ''], description:'<p>Valor calórico 134 kcal</p> <p>Carboidratos 10,32g</p>	<p>Proteínas 0,52g</p>'},
    {id:2, name:'Maça', img:'img/maca.jpg', price:[6.81, 34.00, 66.00], sizes:['', '', ''], description:'<p>Valor calórico. 95 kcal</p> <p>Carboidratos. 25,1 g</p> <p>Proteína. 0,5 g</p>'},{id:3, name:'Laranja', img:'img/laranja.jpg', price:[3.17, 15.00, 30.00], sizes:['', '', ''], description:'<p>Valor calórico 86 kcal</p> <p>Carboidratos 21,6 g</p> <p>Proteína 1,7 g </p>'},
    {id:4, name:'Limão', img:'img/limao.jpg', price:[2.83, 14.10, 28.00], sizes:['', '', ''], description:'<p>Valor calórico 17 kcal</p> <p>Carboidratos 5,4 g </p> <p>Proteína 0,6 g </p>'},
    {id:5, name:'Uva', img:'img/uva.jpg', price:[15.00, 73.00, 142.00], sizes:['', '', ''], description:'<p>Valor calórico 3 kcal </p> <p>Carboidratos 0,9 g</p> <p>Proteína.  0,1 g</p>'},
    {id:6, name:'Abacate', img:'img/abacate.jpg', price:[8.25, 16.00, 31.20], sizes:['', '', ''], description:'<p>Valor calórico 216 kcal</p> <p>Carboidratos 11,5 g</p> <p>Proteína. 2,7 g</p>'},
    {id:7, name:'Mamão', img:'img/mamao.jpg', price:[11.00, 53.00, 105.00], sizes:['', '', ''], description:'<p>Valor calórico 54 kcal</p> <p>Carboidratos 13,5 g</p> <p>Proteína 0,6 g</p>'},
    {id:8, name:'Melancia', img:'img/melancia.jpg', price:[2.20, 12.00, 23.00], sizes:['', '', ''], description:'<p>Valor calórico 86 kcal</p> <p>Carboidratos 21,6 g</p> <p>Proteína 1,7 g</p>'}   
];