# Desafio Nível 1: SRP (Single Responsibility Principle)

## O Problema
A função `userValidator` em `src/validator.js` está fazendo validações de Email, Senha e Idade em um único bloco. Isso torna o código difícil de manter e testar.

## Sua Missão
Utilize o **TDD** para extrair cada validação para sua própria função/objeto.
1. Crie testes para `EmailValidator`.
2. Crie testes para `PasswordValidator`.
3. Refatore a `userValidator` para apenas coordenar essas chamadas.

## Como rodar
1. `npm install`
2. `npm test`
