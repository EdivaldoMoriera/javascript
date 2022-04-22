function aluno(){
    
    let nome, n1, n2, media
  nome = prompt('informe o nome do aluno')
  n1 = Number(prompt('informe a nota do aluno')) 
  n2 = Number(prompt('informe a nota do aluno')) 
  media = (n1 +n2)/2
  if(media<5){
    alert(` O aluno ${nome} foi reprovado com a media ${media} `)
  }
  else if(media>5 && media<7){
    alert(` O aluno ${nome} foi aprovado com a media ${media} 'REGULAR`)

  }
  else if(media>7 && media<8.5){
    alert(` O aluno ${nome} foi aprovado com a media ${media} 'BOM`)

  }
  else if(media == 10){
    alert(` O aluno ${nome} foi aprovado com a media ${media} 'ÓTIMO`)

  }
  else{
    alert(` a media entre ${n1} e ${n2} é ${media} não pode ser aplicada para média escolar`)
  }

 
}