import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {MapPipe} from "./map.pipe"
import { JoinPipe } from './join.pipe'
import { LocalizePipe } from './localize.pipe'



@NgModule({
  declarations: [
    MapPipe,
    JoinPipe,
    LocalizePipe
  ],
  imports: [
    CommonModule
  ],
    exports: [
        MapPipe,
        JoinPipe,
        LocalizePipe
    ]
})
export class PipeModule { }
