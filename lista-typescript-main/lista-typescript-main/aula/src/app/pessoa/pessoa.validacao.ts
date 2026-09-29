import { pessoa } from './pessoa.model';

const CURSOS_VALIDOS = [
  'Engenharia de Computação',
  'Sistemas de Informação',
  'Ciência da Computação'
];

export function validarNome(nome: string): string | null {
  const limpo = nome.trim();

  if (limpo.length < 3) {
    return 'O nome deve ter ao menos 3 caracteres.';
  }

  if (/\d/.test(limpo)) {
    return 'O nome não pode conter números.';
  }

  return null;
}

export function validarEmail(email: string): string | null {
  if (!email.trim()) {
    return 'O e-mail é obrigatório.';
  }

  if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(email)) {
    return 'O e-mail deve estar em um formato válido.';
  }

  return null;
}

export function validarTelefone(telefone?: string): string | null {
  if (!telefone) {
    return null;
  }

  const numeros = telefone.replace(/\D/g, '');

  if (numeros.length !== 10 && numeros.length !== 11) {
    return 'O telefone deve ter 10 ou 11 dígitos com DDD.';
  }

  return null;
}

export function validarCurso(curso: string): string | null {
  if (!CURSOS_VALIDOS.includes(curso)) {
    return 'O curso informado não é válido.';
  }

  return null;
}

export function validarPessoa(pessoa: pessoa): string[] {
  const erros: string[] = [];

  const erroNome = validarNome(pessoa.nome);
  const erroEmail = validarEmail(pessoa.email);
  const erroTelefone = validarTelefone(pessoa.telefone);
  const erroCurso = validarCurso(pessoa.curso);

  if (erroNome) {
    erros.push(erroNome);
  }

  if (erroEmail) {
    erros.push(erroEmail);
  }

  if (erroTelefone) {
    erros.push(erroTelefone);
  }

  if (erroCurso) {
    erros.push(erroCurso);
  }

  return erros;
}