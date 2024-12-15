import { Controller } from "stimulus";
import { useSubmit } from "stimulus-use";

export default class extends Controller {
  static targets = ["form"];

  connect() {
    useSubmit(this);  // Utilisation de stimulus-use pour simplifier le submit
  }


  submit(event) {
    event.preventDefault();  // Empêche la soumission normale du formulaire
    this.element.querySelector("form").requestSubmit(); // Soumet le formulaire via Turbo
    this.element.querySelector("form").reset();  // Réinitialise le formulaire
  }
}
