import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pessoa',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pessoa.html',
  styleUrl: './pessoa.css'
})
export class Pessoa {

  // Identificação
  nome = '';
  dataNascimento = '';
  email = '';
  telefone = '';
  cpf = '';
  rg = '';
  nomedopai = '';
  nomedamae = '';
  pais = '';
  UForigem = '';
  cidade = '';

 

  salvar() {
    console.log({
      nome: this.nome,
      dataNascimento: this.dataNascimento,
     
      email: this.email,
      telefone: this.telefone,
      cpf: this.cpf,
      rg: this.rg,
      nomedopai: this.nomedopai,
      nomedamae: this.nomedamae,
      pais: this.pais,
      UForigem: this.UForigem,
      cidade: this.cidade,

    });
  }
}
