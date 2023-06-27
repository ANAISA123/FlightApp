import { Component } from '@angular/core';

@Component({
  selector: 'app-info-pilots',
  templateUrl: './info-pilots.component.html',
  styleUrls: ['./info-pilots.component.css']
})
export class InfoPilotsComponent {

  cosas: any[] =[
    {
        title:'Capitan',
        image: '../../../assets/img-pilot/capitan.png',
        desc:'Dirige todo el personal del avión y siempre va acompañado de su copiloto en la cabina. ',
    },
    {
        title:'Insignia',
        image: '../../../assets/img-pilot/divisa.png',
        desc:'Es otorgada para demostrar que el piloto es la excelencia y puede estar tranquilo en su vuelo.  ',
    },
    {
        title:'Auriculares',
        image: '../../../assets/img-pilot/cascos.png',
        desc:'Los usan para que la presion del avón no cause un daño en sus oidos, y para comunicarse entre ellos.',
    },
    {
        title:'Lentes',
        image: '../../../assets/img-pilot/lentes.png',
        desc:'Les sirven para evitar grandes impactos de luz, proteger sus ojos de los rayos del sol y verse muy cool. ',
    },
    {
        title:'Verificacion',
        image: '../../../assets/img-pilot/lista-de-verificacion.png',
        desc:'Es un checking que se realiza para verificar que todo este en optimas condiciones y el vuelo sea seguro.',
    },
    {
        title:'Radar',
        image: '../../../assets/img-pilot/radar.png',
        desc:'Ayuda a detectar los inconvenientes que ocurran en el ambiente, ya sean tormentas u otros aviones alrededor. ',
    },
]
}
