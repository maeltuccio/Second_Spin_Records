import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="comment-form"
export default class extends Controller {
  static targets = ["form"];

  connect() {
    console.log("comment form connected");
    //useSubmit(this);  // Utilisation de stimulus-use pour simplifier le submit
  }


  submit(event) {
    //event.preventDefault();  // Empêche la soumission normale du formulaire
    this.element.requestSubmit(); // Soumet le formulaire via Turbo
  }

  reset() {
    console.log("reset");
    this.element.reset();  // Réinitialise le formulaire
  }
}
