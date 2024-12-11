// import { Controller } from "@hotwired/stimulus";
// import { Discojs } from "discojs";

// // Connects to data-controller="disco"
// export default class extends Controller {
//   connect() {
//     const client = new Discojs({
//       userToken: "itwUipbnoZdBpubnjQEDcuCgSmRbzqbqXHdhxLjh",
//     });

//     console.log(client);

//     client.searchDatabase({ query: "termes de la recherche" })
//     .then((data) => {
//     console.log(data);
//   });
//   }
// }

import { Controller } from "@hotwired/stimulus";
import { Discojs } from "discojs";

// Connects to data-controller="disco"
export default class extends Controller {
  static targets = ["title", "artist", "releaseDate", "searchResults", "searchInput"];

  connect() {
    const client = new Discojs({
      userToken: "itwUipbnoZdBpubnjQEDcuCgSmRbzqbqXHdhxLjh",  // Ton token API Discojs
    });

    this.client = client;
  }

  search(event) {
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
    console.log(results);

    if (!results || results.length === 0) {
      this.searchResultsTarget.innerHTML = "No results found.";
      return;
    }

    let html = '';
    results.forEach((disc) => {
      html += `
        <div class="search-result" data-action="click->discojs#fillForm" data-id="${disc.id}" data-title="${disc.title}"  data-year="${disc.year}">
          <strong>${disc.title}</strong> by  (${disc.year})
        </div>
      `;
    });

    console.log(html);
    this.searchResultsTarget.innerHTML = html;
  }

    fillForm(event) {
      const disc = event.currentTarget.dataset;
      console.log(disc);

      // Fill the form fields with the selected disc data
      this.titleTarget.value = disc.title.split(" - ")[1];
      this.artistTarget.value = disc.title.split(" - ")[0];
      this.genreTarget.value = disc.genre;
      this.labelTarget.value = disc.label;
      this.releaseDateTarget.value = disc.year;
      this.catNumberTarget.value = disc.catno;
      this.coverUrlTarget.value = disc.cover_url;

      // Optionally, hide search results after selection
      this.searchResultsTarget.innerHTML = "";
    }
}
