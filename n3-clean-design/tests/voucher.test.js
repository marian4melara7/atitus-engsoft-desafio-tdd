import { calcularDesconto } from '../src/calculadoraVoucher.js';

describe('VoucherCalculator (RED State)', () => {
  test('deve aplicar 10% para o voucher NATAL10', () => {
    expect(calcularDesconto('NATAL10', 100)).toBe(10);
  });
});

