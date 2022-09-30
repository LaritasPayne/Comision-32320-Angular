import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

import localeEs from '@angular/common/locales/es-AR';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  public POKEMONS: Array<Pokemon> = [
    {
      id: 1,
      nombre: 'bulbasaur',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
      habilidades: ['Latigo cepa', 'Gruñido', 'Bomba de fuego'],
      fechaDeCaptura: this.fechaCapturado(30),
    },
    {
      id: 2,
      nombre: 'charmander',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg',
      habilidades: ['Lanzallamas', 'Malicioso'],
      fechaDeCaptura: this.fechaCapturado(50),
    },
    {
      id: 3,
      nombre: 'squirtle',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg',
      habilidades: ['Chorro de agua', 'Gruñido'],
      fechaDeCaptura: this.fechaCapturado(120),
    },
    {
      id: 4,
      nombre: 'pikachu',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg',
      habilidades: ['Impactrueno', 'Ataque rápido'],
      fechaDeCaptura: this.fechaCapturado(800),
    },

    {
      id: 5,
      nombre: 'mewtwo',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/150.svg',
      habilidades: ['Psiquico', 'Bola sombra'],
      fechaDeCaptura: this.fechaCapturado(600),
    },

    {
      id: 6,
      nombre: 'mew',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/151.svg',
      habilidades: ['Rayo solar', 'Giro bola'],
      fechaDeCaptura: this.fechaCapturado(60),
    },
  ];

  constructor() {}

  fechaCapturado(horasEnMinutos: number): Date {
    const fechaActual = new Date();
    const fechaActualEnMilisegundos = fechaActual.getTime();
    const milisegundos = horasEnMinutos * 60000;
    const fechaCapturada = new Date(fechaActualEnMilisegundos - milisegundos);

    return fechaCapturada;
  }

  ngOnInit(): void {}
}
