import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card-servico-aberto',
  templateUrl: './card-servico-aberto.component.html',
  styleUrls: ['./card-servico-aberto.component.scss']
})
export class CardServicoAbertoComponent implements OnInit {

  @Input() doughnutData: any;

  doughnutOptions

  constructor() { }

  ngOnInit(): void {

      // Valores mock
      const apiMockRentabilidadesService = [0, 1, 6];
      // =================================================================

      const categoriasRentabilidade = ['Alta', 'Média', 'Baixa'];
      const rentabilidades: number[] = [];

      apiMockRentabilidadesService.forEach(rentabilidadesResponse => rentabilidades.push(rentabilidadesResponse));

      this.doughnutData = {
        labels: categoriasRentabilidade,
        datasets: [
          {
            data: rentabilidades,
            backgroundColor: [
              '#219653',
              '#F2C94C',
              '#EB5757',
            ],
          },
        ],
      };



    this.initOptions();

  }

  private initOptions() {
    this.doughnutOptions = {
      cutoutPercentage: 55,
      rotation: Math.PI * 2,
      legend: {
        position: 'bottom',
        align: 'center',
        labels: {
          usePointStyle: true,
          fontSize: 10,
        },
      },
      tooltips: {
        mode: 'index',
        intersect: true,
        titleFontSize: 12,
        backgroundColor: '#333',
        titleFontColor: '#fff',
        bodyFontSize: 12,
        displayColors: false,
      },
      hover: {
        animationDuration: 0,
      },
      elements: {
        totalValueCenter: {
          text: this.doughnutData.datasets[0].data
            .reduce((total: number, currentValue: number) => total + currentValue),
          color: '#767676',
          fontStyle: 'Roboto Regular',
          sidePadding: 20,
          minFontSize: 25,
          lineHeight: 25,
        }
      },
      animation: {
        onComplete: (chartElement: any) => {
          if (chartElement.chart.config.options.elements.totalValueCenter) {
            // Get ctx from string
            const ctx = chartElement.chart.ctx;

            // Get options from the totalValueCenter object in options
            const centerConfig = chartElement.chart.config.options.elements.totalValueCenter;
            const fontStyle = centerConfig.fontStyle || 'Roboto Regular';
            const txt = centerConfig.text;
            const color = centerConfig.color || '#000';
            const maxFontSize = centerConfig.maxFontSize || 25;
            const sidePadding = centerConfig.sidePadding || 20;
            const sidePaddingCalculated = (sidePadding / 100) * (chartElement.chart.innerRadius * 2);
            // Start with a base font of 30px
            ctx.font = '30px ' + fontStyle;

            // Get the width of the string and also the width of the element minus 10 to give it 5px side padding
            const stringWidth = ctx.measureText(txt).width;
            const elementWidth = (chartElement.chart.innerRadius * 2) - sidePaddingCalculated;

            // Find out how much the font can grow in width.
            const widthRatio = elementWidth / stringWidth;
            const newFontSize = Math.floor(30 * widthRatio);
            const elementHeight = (chartElement.chart.innerRadius * 2);

            // Pick a new font size so it will not be larger than the height of label.
            let fontSizeToUse = Math.min(newFontSize, elementHeight, maxFontSize);
            let minFontSize = centerConfig.minFontSize;
            const lineHeight = centerConfig.lineHeight || 25;
            let wrapText = false;

            if (minFontSize === undefined) {
              minFontSize = 20;
            }

            if (minFontSize && fontSizeToUse < minFontSize) {
              fontSizeToUse = minFontSize;
              wrapText = true;
            }

            // Set font settings to draw it correctly.
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            const centerX = ((chartElement.chart.chartArea.left + chartElement.chart.chartArea.right) / 2);
            let centerY = ((chartElement.chart.chartArea.top + chartElement.chart.chartArea.bottom) / 2);
            ctx.font = fontSizeToUse + 'px ' + fontStyle;
            ctx.fillStyle = color;

            if (!wrapText) {
              ctx.fillText(txt, centerX, centerY);
              return;
            }

            let words = '';
            if (txt !== undefined) {
              words = txt.split(' ');
            }

            let line = '';
            const lines = [];

            // Break words up into multiple lines if necessary
            for (let n = 0; n < words.length; n++) {
              const testLine = line + words[n] + ' ';
              const metrics = ctx.measureText(testLine);
              const testWidth = metrics.width;

              if (testWidth > elementWidth && n > 0) {
                lines.push(line);
                line = words[n] + ' ';
              } else {
                line = testLine;
              }
            }
            // Move the center up depending on line height and number of lines
            centerY -= (lines.length / 2) * lineHeight;

            for (const currentLine of lines) {
              ctx.fillText(currentLine, centerX, centerY);
              centerY += lineHeight;
            }
            // Draw text in center
            ctx.fillText(line, centerX, centerY);
          }
        }
      },
      plugins: {
        datalabels: {
          display: false,
        }
      },
    };
  }

}
