class Fila {
    constructor() {
      this.alunos = [];
    }
  
    // Adiciona um aluno ao final da fila
    enfileirar(aluno) {
      this.alunos.push(aluno);
      console.log(`📥 '${aluno}' entrou na fila.`);
    }
  
    // Remove o aluno do início da fila
    desenfileirar() {
      if (this.estaVazia()) {
        console.log('⚠️ A fila está vazia. Nenhum aluno para atender.');
        return null;
      }
      const removido = this.alunos.shift();
      console.log(`🚪 '${removido}' saiu da fila.`);
      return removido;
    }
  
    // Mostra o primeiro da fila, quem será o próximo atendido
    frente() {
      return this.alunos[0];
    }
  

    // Verifica se a fila está vazia
    estaVazia() {
      return this.alunos.length === 0;
    }
  
    // Tamanho da fila
    tamanho() {
      return this.alunos.length;
    }
  
    // Limpa a fila
    limpar() {
      this.alunos = [];
      console.log('🧹 Fila esvaziada.');
    }
  
    // Imprime a fila atual
    imprimir() {
      console.log('🚶‍♂️ Fila atual:', this.alunos.join(' -> ') || 'vazia');
    }
  }
  
  // DEMONSTRAÇÃO
  const fila = new Fila();
  fila.enfileirar ('Aluno 1');
  fila.enfileirar ('Aluno 2');
  fila.enfileirar ('Aluna 3');
  fila.enfileirar ('Aluno 4');

  fila.desenfileirar();

  console.log(`Primeiro da fila: ${fila.frente()}`);

  fila.imprimir();
