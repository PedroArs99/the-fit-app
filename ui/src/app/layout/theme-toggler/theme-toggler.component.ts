import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tfa-theme-toggler',
  templateUrl: './theme-toggler.component.html',
  styleUrl: './theme-toggler.component.scss',
})
export class ThemeTogglerComponent implements OnInit {
  prefersLightSchema = false;

  color?: any;

  ngOnInit(): void {
    const prefersLightSchemaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    this.prefersLightSchema = prefersLightSchemaQuery.matches;

    setTimeout(() => {
      const oklch = getComputedStyle(document.documentElement).getPropertyValue('--p');
      const [L, C, H] = oklch.split(' ').map((v) => +v);
      const [_, A, B] = this.oklch_to_oklab(L, C, H);
      const XYZ = this.oklab_to_xyz([L, A, B]);
      const [[R], [G], [Bl]] = this.XYZ_to_lin_sRGB(XYZ);

      this.color = [R * 255, G * 255, Bl * 255];
    }, 1000);
  }

  private oklch_to_oklab(L: number, C: number, H: number): number[] {
    const h = (Math.PI * H) / 180;

    let a = C * Math.cos(h);
    let b = C * Math.sin(h);

    return [L, a, b];
  }

  private oklab_to_xyz(lab: number[]): number[][] {
    const [L, A, B] = lab;

    // Given OKLab, convert to XYZ relative to D65
    var LMStoXYZ = [
      [1.2268798733741557, -0.5578149965554813, 0.28139105017721583],
      [-0.04057576262431372, 1.1122868293970594, -0.07171106666151701],
      [-0.07637294974672142, -0.4214933239627914, 1.5869240244272418],
    ];
    var OKLabtoLMS = [
      [0.99999999845051981432, 0.39633779217376785678, 0.21580375806075880339],
      [1.0000000088817607767, -0.1055613423236563494, -0.063854174771705903402],
      [1.0000000546724109177, -0.089484182094965759684, -1.2914855378640917399],
    ];

    let LMSnl = this.multiplyMatrices(OKLabtoLMS, [[L], [A], [B]]);
    LMSnl = [[LMSnl[0][0] ** 3], [LMSnl[1][0] ** 3], [LMSnl[2][0] ** 3]];

    return this.multiplyMatrices(LMStoXYZ, LMSnl);
  }

  private XYZ_to_lin_sRGB(XYZ: number[][]) {
    // convert XYZ to linear-light sRGB

    var M = [
      [30757411 / 17917100, -6372589 / 17917100, -4539589 / 17917100],
      [-19765991 / 29648200, 47925759 / 29648200, 467509 / 29648200],
      [792561 / 44930125, -1921689 / 44930125, 42328811 / 44930125],
    ];

    return this.multiplyMatrices(M, XYZ);
  }

  private multiplyMatrices(matrix1: number[][], matrix2: number[][]): number[][] {
    let result: number[][] = [];
    const rows1: number = matrix1.length;
    const cols1: number = matrix1[0].length;
    const rows2: number = matrix2.length;
    const cols2: number = matrix2[0].length;

    if (cols1 !== rows2) {
      console.log(rows1);
      console.log(rows2);

      console.error("Cannot multiply matrices, dimensions don't match");
      return result;
    }

    for (let i = 0; i < rows1; i++) {
      result[i] = [];
      for (let j = 0; j < cols2; j++) {
        let sum = 0;
        for (let k = 0; k < cols1; k++) {
          sum += matrix1[i][k] * matrix2[k][j];
        }
        result[i][j] = sum;
      }
    }

    return result;
  }
}
