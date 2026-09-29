import { Component } from '@angular/core';
import { pessoa } from './pessoa.model';
import { validarPessoa } from './pessoa.validacao';

@Component({
  selector: 'app-pessoa',
  imports: [],
  templateUrl: './pessoa.html',
  styleUrl: './pessoa.css'
})
export class PessoaComponent {

  pessoas: pessoa[] = [
    {
      id: 1,
      nome: 'João',
      curso: 'Engenharia',
      email: 'joao@email.com',
      ativo: true,
      telefone: '11999999999',
      vinculo: 'aluno'
    },
    {
      id: 2,
      nome: 'Maria',
      curso: 'Sistemas de Informação',
      email: 'maria@email.com',
      ativo: true,
      vinculo: 'aluno'
    },
    {
      id: 3,
      nome: 'Carlos',
      curso: 'Administração',
      email: 'carlos@email.com',
      ativo: false,
      telefone: '11888888888',
      vinculo: 'professor'
    },
    {
      id: 4,
      nome: 'Ana',
      curso: 'Direito',
      email: 'ana@email.com',
      ativo: true,
      telefone: '11777777777',
      vinculo: 'aluno'
    },
    {
      id: 5,
      nome: 'Joao123',
     curso: 'Medicina',
     email: 'joaoexemplo.com',
     vinculo: 'aluno',
     telefone: '123',
    ativo: true
   }
  ];

  resultados = this.pessoas.map(pessoa => ({
  pessoa,
  erros: validarPessoa(pessoa)
}));

}
