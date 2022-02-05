export interface ICheck {
  logic(url: string): any
  check(): Promise<boolean>
}
