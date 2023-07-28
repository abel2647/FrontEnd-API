import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{

  logo='https://img.freepik.com/vector-premium/libro-abierto-leer-vector-simbolo_599395-337.jpg?w=740'
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ingresar() {
    this.router.navigateByUrl('/dashboard');
  }
}
