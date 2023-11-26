import { Signal } from "@angular/core"

export type Signalizable<T> = {
  isLoading: Signal<boolean>,
  value: Signal<T>
}