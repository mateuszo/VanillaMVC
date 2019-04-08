import NoteView from "./NoteView.js";

export default class NoteController{
    constructor(model){
        this.model = model;
        this.view = new NoteView(this, model);
    }

    handleSave(){
        alert("Controller is saving the note...");
    }

    handleClear() {
        alert("Clearing note...");
        this.model.title = "";
        this.model.content = "";
        this.view.update(this.model);
    }
}