import { Pipe, PipeTransform } from '@angular/core'
import { TranslatePipe } from '@ngx-translate/core'
import { DatePipe } from '@angular/common'

@Pipe({
  name: 'localize',
})
export class LocalizePipe implements PipeTransform {

  constructor(
    private translate: TranslatePipe,
    private date: DatePipe
  ) {
  }

  transform(value: Date|string, ...args: string[]): string {
    if(args.length === 0){
      const month = this.date.transform(value, 'MMM')
      return `${this.translate.transform(`dates.monthsShort.${month}`)} ${this.date.transform(value, 'd | HH:mm')}`
    }

    return ''
  }

}
