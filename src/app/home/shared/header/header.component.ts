import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../../services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,
              private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
  }

  public logOut(){
    this.tokenStorage.signOut();
    this.router.navigateByUrl(`/login`, {skipLocationChange: true}).then(()=>
    this.router.navigate([`/login`]));
  }

}
