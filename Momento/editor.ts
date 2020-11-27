import { Doc } from "./document(originator)";
import { DocumentHistory } from "./document-history(caretaker)";

const document = new Doc();
const history = new DocumentHistory();

document.set("content", "Hello World");
history.push(document.createState());

document.set("fontSize", "24");

// font size should be 24
console.log(document.get());

// undoing the font size change
const state = history.pop();

if (state) {
  document.undo(state);
}

// font size should be 16
console.log(document.get());
