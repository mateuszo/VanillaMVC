import NoteModel from "./NoteModel.js";
import NoteController from "./NoteController.js";

const model = new NoteModel("Title", "Content");
const controller = new NoteController(model);
document.getElementById("app").appendChild(controller.view.element);