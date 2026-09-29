import { Component } from '@angular/core';
import { PessoaComponent } from './pessoa/pessoa';

@Component({
  selector: 'app-root',
  imports: [PessoaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
