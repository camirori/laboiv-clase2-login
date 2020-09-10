import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombre;
  clave;
  mensaje='';

  usuarios: Usuario[] = [
    new Usuario('Admin','1234'),
    new Usuario('abc1','abc1')
  ];
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  login(){
    for (let user of this.usuarios) {
      if(user.nombre == this.nombre && user.clave== this.clave){
        this.route.navigate(['home']);
        //this.mensaje='Logged in';
        return;
      }
    }
    this.mensaje='Credenciales incorrectas';
  }

}
