
usu = window.prompt("Digite seu nome ")
senha = window.prompt(`Ok ${usu}. Digite a senha. senha: 12345`)


if (senha!=1234){
    window.alert("OPS! SENHA INCORRETA! TENTE 1234,riririri")
    do{
        senha1 = window.prompt("Digite a senha:")
    }while(senha1!=1234)
    
}else{
    emo = document.getElementById("emoji")
    window.alert(`Seja bem vindo!! ${emo} `)

}



