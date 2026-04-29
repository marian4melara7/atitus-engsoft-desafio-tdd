export function validadorUsuario(usuario) {
  if (!usuario.email.includes('@')) return false;
  if (usuario.password.length < 8) return false;
  if (usuario.age < 18) return false;
  return true;
}
