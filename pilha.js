//Pilha:

// Classe Pilha
class Pilha {
    constructor() {
      this.documentos = [];
    }
  
    empilhar(documento) {
      this.documentos.push(documento);
      console.log(`✔️ Elemento '${documento}' empilhado.`);
    }
  
    desempilhar() {
      if (this.estaVazia()) {
        console.log('⚠️ A pilha está vazia. Nada a desempilhar.');
        return null;
      }
      const removido = this.documentos.pop();
      console.log(`❌ Elemento '${removido}' desempilhado.`);
      return removido;
    }
  
    topo() {
      if (this.estaVazia()) {
        return null;
      }
      return this.documentos[this.documentos.length - 1];
    }
  
    estaVazia() {
      return this.documentos.length === 0;
    } //
  
    tamanho() {
      return this.documentos.length;
    }
  
    limpar() {
      this.documentos = [];
      console.log('🧹 Pilha esvaziada.');
    }
  
    imprimir() {
      console.log('📦 Pilha atual:', this.documentos.slice().reverse().join(' <- topo'));
    }
  }
  
  // DEMONSTRAÇÃO
  const pilha = new Pilha();
  pilha.empilhar('Documento A');
  pilha.empilhar('Documento B');
  pilha.empilhar('Documento C');
  pilha.empilhar('Documento D');

  pilha.desempilhar();

  pilha.topo();
  
  pilha.imprimir(); 