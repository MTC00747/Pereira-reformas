import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-topo',
  templateUrl: './menu-topo.component.html',
  styleUrls: ['./menu-topo.component.css']
})
export class MenuTopoComponent {
  menuAberto : boolean = false
  abrirMenu(){
    if(!this.menuAberto){
      this.menuAberto = true
      
    }else{
      this.menuAberto = false
    }
  }
}
