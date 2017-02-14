import { Usuario } from './usuario';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  usuario: Usuario = {nome: "paulo.cayres", senha: "pccr0976"};
  usuarioLogado: boolean = false;

  constructor() { }

  validaUsuario(usuario: Usuario){
    if (usuario.nome === this.usuario.nome && usuario.senha === this.usuario.senha){
      this.usuarioLogado = true;
      console.log('logou');
      return true;

    } else {
      this.usuarioLogado = false;
      return false;
    }
  }

  usuarioValidado(){
    return this.usuarioLogado;
  }

}
