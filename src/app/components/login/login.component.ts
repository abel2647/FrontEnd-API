import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //logo = 'http://assets.stickpng.com/images/5847ea22cef1014c0b5e4833.png'
logo='https://img.freepik.com/vector-premium/libro-abierto-leer-vector-simbolo_599395-337.jpg?w=740'
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ingresar() {
    this.router.navigateByUrl('/dashboard');
  }
  registrar(){
    this.router.navigateByUrl('/registro');
  }
  }
  

