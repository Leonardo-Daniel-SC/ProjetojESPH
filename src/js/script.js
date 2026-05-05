//limpeza e validação

const email="  email@email.com  ";
//trim remove os espaços inicio e fim
const emailLimpo= email.trim();
console.log(emailLimpo)

//validação
if(emailLimpo.includes("@")){
    console.log("email válido")
}else{
    console.log("email inválido")
}

//transformação de texto

const tituloArtigo="Como aprender JAVA RAIZ";

//metodo upper(maiusculo) e low(minusculo)
const texto1 = tituloArtigo.toUpperCase();
console.log(texto1)

//split - transforma o texto em array
const texto2= tituloArtigo.split(" ");
console.log(texto2)

//join - junta tudo em uma unica string
const texto3 = texto2.join(" ");
console.log(texto3)

//metodo toFixad
const precoProduto=199.99;
const desconto=0.15; //15%
const precoFinal= precoProduto *(1-desconto);
console.log(precoFinal);
//``templete string - concatenação
console.log(`R$${precoFinal.toFixed(2)}`);

//dim(dicument object model)

const Titulo=document.getElementById("titulo")

Titulo.innerText= "O DOM mudou o texto";

Titulo.style.color="blue";

/* CRIANDO O APP */
const produtos = [
    {nome:"Teclado Medânico",preco:300,emPromocao:true},
    {nome:"Mouse Gamer",preco:150,emPromocao:false},
    {nome:"Monitor Gamer",preco:1300,emPromocao:true},
    {nome:"Mouse Pad XL",preco:400,emPromocao:false},
];

const container = document.getElementById("listar-produtos");
const mostrarTotal = document.getElementById('resultado-total');

//MAP: transforma o array de oojetos em um array de strings html e css

function todosProdutos(lista){
    mostrarTotal.innerText="";
    const htmlProdutos = lista.map(item =>`
        <div class="card">
            <h3>${item.nome}</h3>
            <p>Preço: R$ ${item.preco}</p>
            ${item.emPromocao ? "<span class='tag'>Promoção</span>":""}
        </div>
        `).join('');//transforma o array em uma unica string

        container.innerHTML = htmlProdutos;
}

//FILTER - CRIA UMA NOVA LISTA APENAS COM O QUE ESCOLHER

function filtrarPromocoes(){
    const promocionais = produtos.filter(item =>item.emPromocao);
    todosProdutos(promocionais)
}

//REDUCE -  REDUZ O ARRAY A UM UNICO VALOR (SOMA DOS PREÇOS)

function calcularTotal(){
    const total = produtos.reduce((acumulador,item)=>{
        return acumulador + item.preco;
    },0);
    mostrarTotal.innerText= `Valor total R$ ${total}`;
}