import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menu:Menu[]=[];
  sidenav=false;
  logo='https://m.media-amazon.com/images/I/312EETiyXKL._AC_UF1000,1000_QL80_.jpg'
  constructor(private _menuservice:MenuService ) { }



  ngOnInit(): void {
    this.cargarmenu()
  }

  cargarmenu(){
    this._menuservice.getMenu().subscribe(data=>{
      console.log(data);
      this.menu=data;
    })
  }

  }
  

