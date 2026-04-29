# Desafio Nível 2: DIP (Mocks)

O `ServicoNotificacao` depende diretamente de um `GatewayEmail` que simula uma chamada de rede demorada. 

**Tarefa:**
Refatore o código para injetar o gateway no construtor e utilize um **Mock** no teste para verificar se o método `enviar` foi chamado com os parâmetros corretos.
