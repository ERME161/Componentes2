import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validar-correo',
  templateUrl: './validar-correo.page.html',
  styleUrls: ['./validar-correo.page.scss'],
})



export class ValidarCorreoPage implements OnInit{
  email: string;
  mensaje: string;

  validarCorreo(): boolean {
    // Expresión regular para validar el formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.email);
  }

  enviarMensaje() {
    if (this.validarCorreo()) {
      // Aquí puedes agregar la lógica para enviar el mensaje, por ejemplo, una alerta
      this.mensaje = `Mensaje enviado a ${this.email}`;
    } else {
      this.mensaje = 'Formato de correo electrónico inválido';
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
