export default class NoteView{
    constructor(controller, model){
        this.controller = controller;
        this.element = this.createElement(model);
        this.registerEventListeners()
    }

    registerEventListeners(){
        this.element.getElementsByTagName('a')[0]
            .addEventListener('click', this.controller.handleSave.bind(this.controller));
        this.element.getElementsByTagName('a')[1]
            .addEventListener('click', this.controller.handleClear.bind(this.controller));
    }

    update(model){
        this.element.innerHTML = this.render(model);
        this.registerEventListeners();
    }

    createElement(model){
        return document.createRange().createContextualFragment(this.render(model)).firstChild;
    }

    render(model){
        return `
        <div class="row">
            <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">
                            <input placeholder="Title" id="note_title" type="text" class="white-text validate"
                                   value="${model.title}">
                        </span>
                        <textarea id="note_content"
                                  class="white-text materialize-textarea">${model.content}</textarea>
                    </div>
                    <div class="card-action">
                        <a class="waves-effect waves-light btn">
                            <i class="material-icons left">save</i>
                            Save
                        </a>
                        <a class="waves-effect waves-light btn">
                            <i class="material-icons left">delete</i>
                            Clear
                        </a>
                    </div>
                </div>
            </div>
        </div>`.trim();
    }
}