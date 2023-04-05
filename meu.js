
usu = window.prompt("Digite seu nome ")
senha = window.prompt(`Ok ${usu}Digite a senha. senha: 1234`)

if (senha!=1234){
    window.alert("SENHA INCORRETA!")
    do{
        senha1 = window.prompt("Digite a senha:")
    }while(senha1!=1234)
}else{
    window.alert("Seja bem vindo!! &#128540")

}



