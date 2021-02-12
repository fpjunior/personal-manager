import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

/**
 * formGroup?: FormGroup;
 * hiddenMiddle: boolean;
 * model: string;
 * canceled?: boolean;
 * iconMiddle?: string;
 * labelMiddle?: string;
 * iconLeft?: string;
 * labelLeft?: string;
 * activeIndex?: number;
 * disableNext?: boolean;
 * nextButtonLabel?: string;
 */
@Component({
  selector: 'generic-buttons',
  templateUrl: './generic-buttons.component.html',
  styleUrls: ['./generic-buttons.component.scss']
})
export class GenericButtonsComponent {

  @Input() formGroup?: FormGroup;
  @Input() hiddenMiddle = false;
  @Input() disableSubmit = false;

  /**
   * MODELO DOS BOTÕES:
   * standard = SALVAR E CANCELAR
   * steps = STEPS ANTERIOR E PROXIMO
   * three-center = TRÊS BOTÕES CENTRALIZADOS
   * three-left = TRÊS BOTÕES, UM COLADO A ESQUERDA
   * cancel = APENAS CANCELAR
   */
  @Input() model: string;

  /**
   * SE O BOTÃO É DE CANCELAR OU SAIR
   *
   */
  @Input() canceled? = true;
  @Output() cancelEvent = new EventEmitter();

  /**
   * BOTÃO Do MEIO
   */
  @Input() iconMiddle?: string;
  @Input() labelMiddle?: string;
  @Output() middleEvent?= new EventEmitter();

  /**
   * BOTÃO DA ESQUERDA
   */
  @Input() iconLeft?: string;
  @Input() labelLeft?: string;
  @Output() leftEvent?= new EventEmitter();

  /**
   * BOTÃO DE STEPS
   */
  @Output() previousEvent?= new EventEmitter();
  @Output() nextEvent?= new EventEmitter();
  @Input() activeIndex?: number;
  @Input() disableNext? = true;
  @Input() nextButtonLabel? = "Próximo";



  constructor() { }

}
