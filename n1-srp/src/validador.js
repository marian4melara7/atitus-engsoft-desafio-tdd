export function validadorUsuario(usuario) {
  const emailValido = usuario.email.includes('@');
  const senhaValida = usuario.password.length >= 8;
  const idadeValida = usuario.age >= 18;

  return emailValido && senhaValida && idadeValida;
}
