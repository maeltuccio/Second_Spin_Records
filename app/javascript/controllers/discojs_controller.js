
import { Controller } from "@hotwired/stimulus";
import { Discojs } from "discojs";

// Connects to data-controller="discojs" in the HTML
export default class extends Controller {
  static targets = ["title", "artist", "genre", "label", "catNumber", "coverUrl", "coverImage", "releaseDate", "searchResults", "searchInput"];

  connect() {
    console.log("connect disco JS")
    const client = new Discojs({
      userToken: "itwUipbnoZdBpubnjQEDcuCgSmRbzqbqXHdhxLjh",  // Ton token API Discojs
    });

    this.client = client;
  }
// Search for a release
  search(event) {
    console.log("search")
    event.preventDefault();

    const query = this.searchInputTarget.value.trim();

    console.log(query);


    this.client.searchRelease(query)
      .then((data) => {
        console.log(data);
        this.displayResults(data);

      })
      .catch((error) => {
        console.error("Error during API call:", error);
        if (error.response) {
          console.log("API Error Response:", error.response.data); // Affiche la réponse détaillée de l'API
        }
      });
  }

  displayResults(data) {
    const results = data.results;

    if (!results || results.length === 0) {
      this.searchResultsTarget.innerHTML = "No results found.";
      return;
    }

    let html = '';
    results.forEach((disc) => {
      html += `
        <div class="search-result" data-action="click->discojs#fillForm" data-id="${disc.id}" data-title="${disc.title}"  data-year="${disc.year}" data-genre="${disc.style}" data-label="${disc.label}" data-catNumber="${disc.catno}" data-coverUrl="${disc.cover_image}">
          <strong>${disc.title}</strong>  (${disc.year}) (${disc.label}) (${disc.catno})
        </div>
      `;
    });

    this.searchResultsTarget.innerHTML = html;
  }

    fillForm(event) {
      const disc = event.currentTarget.dataset;
      console.log(disc);
      console.log(disc.catno);
      console.log(disc.cover_image)

        // Récupérer le premier genre (s'il existe) en utilisant [0]
    const firstGenre = disc.genre ? disc.genre.split(",")[0].trim() : "";  // On prend le premier genre s'il existe

    // Récupérer le premier label (s'il existe) en utilisant [0]
    const firstLabel = disc.label ? disc.label.split(",")[0].trim() : "";  // On prend le premier label s'il existe

      // Fill the form fields with the selected disc data
      this.titleTarget.value = disc.title.split(" - ")[1];
      this.artistTarget.value = disc.title.split(" - ")[0];
      this.genreTarget.value = firstGenre;
      this.labelTarget.value = firstLabel;
      this.releaseDateTarget.value = disc.year;
      this.catNumberTarget.value = disc.catnumber;
      this.coverUrlTarget.value = disc.coverurl;

      this.coverImageTarget.src = disc.coverurl; // Afficher l'image de couverture

      // Optionally, hide search results after selection
      this.searchResultsTarget.innerHTML = "";


    }


}
