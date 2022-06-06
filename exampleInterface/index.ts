import { Invoice, Payment } from "./classImplementsInterface";
import { HasPrint } from "./interfaceForClass";

const documentOne: HasPrint = new Invoice('Vinamilk', 'drink milk', 5000000)
const documentTwo: HasPrint = new Payment('Vietnam Airlines', 'fly', 25000000)

const allDocument: HasPrint[] = []
allDocument.push(documentOne)
allDocument.push(documentTwo)

console.log(allDocument);
console.log(documentOne.print());

