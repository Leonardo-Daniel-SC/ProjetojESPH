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
