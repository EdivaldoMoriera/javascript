function aluno(){
    
    let nome, n1, n2, media
  nome = prompt('informe o nome do aluno')
  n1 = Number(prompt('informe a nota do aluno')) 
  n2 = Number(prompt('informe a nota do aluno')) 
  media = (n1 +n2)/2
  alert(` O aluno ${nome} ficou com as medias ${media} e foi aprovado`)
}