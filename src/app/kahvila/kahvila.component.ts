import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-kahvila',
  templateUrl: './kahvila.component.html',
  styleUrls: ['./kahvila.component.css']
})
export class KahvilaComponent implements OnInit {
 @Output() myyntiTapahtuma = new EventEmitter<{poydanNumero:string, myyntiMaara:string}>();
 @Output() tarjoiluTapahtuma = new EventEmitter<{poydanNumero:string, myyntiMaara:string}>();

  myytyja = 0;
  tarjoiltuja = 0;
  uusipoydanNumero = '';
  uusimyyntiMaara = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  kahviaMyyty() {
    this.myyntiTapahtuma.emit({
      poydanNumero: this.uusipoydanNumero,
      myyntiMaara: this.uusimyyntiMaara
    });
    this.myytyja+= +this.uusimyyntiMaara;
    this.uusipoydanNumero='';
    this.uusimyyntiMaara='';
    
  }

  kahviaTarjoiltu() {
    this.tarjoiluTapahtuma.emit({
      poydanNumero: this.uusipoydanNumero,
      myyntiMaara: this.uusimyyntiMaara
    });
    this.tarjoiltuja+= +this.uusimyyntiMaara;
    this.uusipoydanNumero='';
    this.uusimyyntiMaara='';
    
  }

}
