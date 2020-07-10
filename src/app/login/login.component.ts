import { Component, OnInit } from '@angular/core';
import { Credentials } from '../models/credentials';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nombre: string;
  anio: number = new Date().getFullYear();

  credentials: Credentials = new Credentials();
  loginForm: FormGroup;
  submitted = false;


  constructor(private authService: AuthService,
              private tokenStorage: TokenStorageService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.nombre = 'Katlheen Escoto';
    this.loginForm = this.formBuilder.group({
      username : ['', Validators.required],
      password : ['', [Validators.required]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
        return;
      }

      this.credentials.usuario_username = this.loginForm.value.username;
      this.credentials.usuario_password = this.loginForm.value.password;

      this.authService.login(this.credentials).subscribe(
        data => {
          console.log(data.response);
          this.tokenStorage.saveToken(data.response);
          this.router.navigateByUrl(`/home`, {skipLocationChange: true}).then(()=>
          this.router.navigate([`/home`]));
        }
      );
  }

  onReset() {
      this.submitted = false;
      this.loginForm.reset();
  }

}
