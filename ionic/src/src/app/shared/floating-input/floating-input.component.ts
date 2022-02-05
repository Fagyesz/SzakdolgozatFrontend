import {Component, Input, OnInit, Output, EventEmitter, forwardRef} from '@angular/core'
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms"

@Component({
  selector: 'app-floating-input',
  templateUrl: './floating-input.component.html',
  styleUrls: ['./floating-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FloatingInputComponent),
      multi: true
    }
  ]
})
export class FloatingInputComponent implements OnInit, ControlValueAccessor  {
  @Input() labelClasses: string[] = []
  @Input() inputClasses: string[] = []
  @Input() classes: string[] = []
  @Input() inputType: string = ''
  @Input() placeholder: string = ''
  @Input() name!: string
  @Input() value!: string
  @Output() onChanged = new EventEmitter<string>()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  propagateChange = (_: any) => {}

  constructor() { }

  ngOnInit() {
    return
  }

  onChange(event: any) {
    this.value = event.detail.value
    this.propagateChange(this.value)
    this.onChanged.emit(this.value)
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn
  }

  registerOnTouched(fn: any): void {
    this.propagateChange = fn
  }

  writeValue(obj: any): void {
    this.value = obj
  }
}
