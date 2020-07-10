import { Component, OnInit } from '@angular/core';
import { Credentials } from '../models/credentials';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nombre: string;
  anio: number = new Date().getFullYear();

  credentials: Credentials = new Credentials();


  constructor(private authService: AuthService,
              private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.nombre = 'Katlheen Escoto';
    this.credentials.usuario_username = 'katlheen';
    this.credentials.usuario_password = 'katlheen';
  }

  onSubmit(){
    this.authService.login(this.credentials).subscribe(
      data => {
        console.log(data.response);
        this.tokenStorage.saveToken(data.response);
      }
    );
  }

}
