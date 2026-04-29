export function calcularDesconto(codigo, valor) {
  if (codigo === 'DESC10') return valor * 0.1;
  if (codigo === 'DESC20') return valor * 0.2;
  if (codigo === 'FIXO50') return 50;
  return 0;
}
