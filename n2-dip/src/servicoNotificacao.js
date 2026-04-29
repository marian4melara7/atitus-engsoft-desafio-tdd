export class ServicoNotificacao {
  constructor(gatewayEmail) {
    this.gatewayEmail = gatewayEmail;
  }

  enviarBoasVindas({ email }) {
    return this.gatewayEmail.enviar(email, 'Bem-vindo!');
  }
}
