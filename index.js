class Jogador {
  constructor(nome, posicao, datanascimento, ano, nacionalidade, altura, peso){
    this.nome = nome;
    this.posicao = posicao;
    this.datanascimento = datanascimento;
    this.ano = ano;
    this.nacionalidade = nacionalidade;
    this.altura = altura;
    this.peso = peso;
  }

  mostrarAtributos(){
    console.log(this.nome)
    console.log(this.posicao)
    console.log(this.datanascimento)
    console.log(this.ano)
    console.log(this.nacionalidade)
    console.log(this.altura)
    console.log(this.peso)
  }
  
  calcularIdade(){
    return 2022 - this.ano
  }
  
  idade(){
    return this.calcularIdade()
  }

  calcularAposentar(){
    return 35 - this.idade()
  }
  
  aposentar(){
    return this.calcularAposentar()
  }
}

let jogador = new Jogador("Ronaldo", "atacante", "15/12", "1991", "australiano", "1,80", "70kg")
jogador.mostrarAtributos()
console.log(jogador.idade())
console.log(jogador.calcularAposentar())