# 🧪 Laboratório de TDD: Desafios Progressivos

Bem-vindo ao laboratório prático de **Desenvolvimento Guiado por Testes (TDD)**. Este repositório contém uma série de desafios projetados para evoluir suas habilidades em design de software, refatoração e testes automatizados.

O foco aqui não é apenas "fazer o teste passar", mas sim utilizar o ciclo **Red-Green-Refactor** para permitir que um design limpo emerja do seu código.

---

## 📁 Estrutura dos Desafios

Os desafios estão organizados por níveis de maturidade e aplicação de princípios **SOLID**:

### 🟢 Nível 1: [SRP (Single Responsibility Principle)](n1-srp/)
- **Foco**: Coesão e separação de preocupações.
- **Tarefa**: Refatorar um validador de usuário "monolítico" em pequenos validadores especializados, garantindo que cada função tenha apenas um motivo para mudar.

### 🟡 Nível 2: [DIP (Dependency Inversion Principle)](n2-dip/)
- **Foco**: Desacoplamento e testabilidade via Mocks.
- **Tarefa**: Isolar um serviço de notificação de suas dependências externas (Gateways), utilizando injeção de dependência e objetos simulados para validar o comportamento.

### 🔴 Nível 3: [Clean Design (Desconto de Vouchers)](n3-clean-design/)
- **Foco**: Design Emergente e Refatoração.
- **Tarefa**: Implementar uma calculadora de vouchers do zero seguindo o ciclo RGR, transformando requisitos de negócio em código limpo e testável.

---

## 🚀 Como começar

### Pré-requisitos
- [Node.js](https://nodejs.org/) v18 ou superior.

### Passo a Passo
1. Escolha um dos diretórios de desafio (`n1`, `n2` ou `n3`).
2. Entre na pasta do desafio e instale as dependências:
   ```bash
   npm install
   ```
3. Inicie os testes em modo watch:
   ```bash
   npm test
   ```
4. **Siga o Ciclo:** Observe o teste falhar (Red), faça-o passar da forma mais simples (Green) e então melhore o código (Refactor).

---

## ⚖️ Regras de Ouro do TDD

1. **Não escreva código de produção sem um teste falhando.** Se o teste já passa, você não tem uma justificativa para mudar o código.
2. **Saia do estado RED o mais rápido possível.** Não tente criar a solução perfeita de primeira. "Falsifique" o resultado se necessário para ver o verde.
3. **Não pule o passo REFACTOR.** É nesta fase que eliminamos duplicidade, melhoramos nomes e aplicamos padrões. Sem refatoração, o TDD é apenas "testes depois".

---

## 📚 Referências Essenciais

- **BECK, Kent.** *Test-Driven Development: By Example*. Addison-Wesley, 2002.
- **MARTIN, Robert C.** *Clean Code: A Handbook of Agile Software Craftsmanship*. Prentice Hall, 2008.
- **FEATHERS, Michael.** *Working Effectively with Legacy Code*. Prentice Hall, 2004.

---

## 🛠️ Tecnologias Utilizadas

- **Jest**: Framework de testes robusto e veloz.
- **Node.js**: Ambiente de execução JavaScript.
- **ES Modules**: Padrão moderno de módulos nativos do JavaScript.
