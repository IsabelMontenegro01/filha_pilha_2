// Importa as classes Fila e Pilha
const Fila = require('./fila');
const Pilha = require('./pilha');

// Criação das instâncias para fila e pilha
const filaAtendimento = new Fila();
const pilhaProntuarios = new Pilha();

// Adiciona 5 pacientes à fila
const pacientes = ['Maria', 'João', 'Ana', 'Pedro', 'Carla'];
pacientes.forEach(paciente => filaAtendimento.enfileirar(paciente));

// Exibe o próximo paciente a ser atendido
console.log(`👩‍⚕️ Próximo a ser atendido: ${filaAtendimento.frente()}`);

// Simula o atendimento de dois pacientes
for (let i = 0; i < 2; i++) {
    const atendido = filaAtendimento.desenfileirar();
    if (atendido) {
        pilhaProntuarios.empilhar(atendido);
    }
}

// Exibe o estado final da fila e da pilha
filaAtendimento.imprimir();
pilhaProntuarios.imprimir();
