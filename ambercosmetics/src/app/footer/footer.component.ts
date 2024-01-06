import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,RouterModule, ReactiveFormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

    formGroup: FormGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email:  new FormControl('', [Validators.required]),
      message:  new FormControl('', [Validators.required]),
    });


    sendForm() {
      this.formGroup.markAllAsTouched();
      if(this.formGroup.valid){
        alert('Formulário enviado com sucesso!');
        return;
      }
      alert('Formulário inválido!');
      return;
    }
}
