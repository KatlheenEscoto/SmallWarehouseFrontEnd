import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nombre: string;
  anio: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
    this.nombre = 'Katlheen Escoto';
  }

}
