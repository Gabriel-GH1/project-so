import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})

export class FormularioComponent {
  userData = {
    nome: '',
    numero: '',
    duracao: ''
  };
  
  submitted = false;

  onSubmit(form: any) {
    this.submitted = true;
    console.log('Dados do formulário:', this.userData);
  }
}