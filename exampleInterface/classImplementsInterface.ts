import { HasPrint } from "./interfaceForClass";

export class Invoice implements HasPrint {
  constructor(
    readonly client: string,
    private work: string,
    public amount: number
  ) {}

  print() {
    return `${this.client} owes ${this.amount} dollar(s) for this work: ${this.work}`
  }
}

export class Payment implements HasPrint {
  constructor(
    readonly recipient: string,
    private job: string,
    public amt: number
  ) {}

  print() {
    return `I owe ${this.recipient} ${this.amt} dollar(s) for this job: ${this.job}`
  }
}