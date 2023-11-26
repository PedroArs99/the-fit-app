import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tfa-theme-toggler',
  templateUrl: './theme-toggler.component.html',
  styleUrl: './theme-toggler.component.scss',
})
export class ThemeTogglerComponent implements OnInit {
  prefersLightSchema = false;

  ngOnInit(): void {
    const prefersLightSchemaQuery = window.matchMedia('(prefers-color-scheme: light)');

    this.prefersLightSchema = prefersLightSchemaQuery.matches;
  }
}
