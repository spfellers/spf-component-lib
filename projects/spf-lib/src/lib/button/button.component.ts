import {
  Component,
  OnInit,
  Input,
  Output,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'spf-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {
  @Input() label: string;

  constructor(elementRef: ElementRef) {}

  ngOnInit() {}
}
