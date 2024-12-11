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
  static targets = ["title", "artist", "releaseDate", "searchResults"];

  connect() {
    const client = new Discojs({
      userToken: "itwUipbnoZdBpubnjQEDcuCgSmRbzqbqXHdhxLjh",
    });

    this.client = client;
  }

  search(event) {
    event.preventDefault();

    const query = event.target.value;  // Capture the query text (e.g., typed by user)

    if (query.length < 3) {  // Let's only trigger search for queries with more than 3 characters
      this.searchResultsTarget.innerHTML = "";
      return;
    }

    this.client.searchDatabase({ query })
      .then((data) => {
        this.displayResults(data);
      })
      .catch((error) => {
        console.error("Error during API call:", error);
      });
  }

  displayResults(data) {
    const results = data.result;

    if (!results || results.length === 0) {
      this.searchResultsTarget.innerHTML = "No results found.";
      return;
    }

    const html = results.map((disc) => {
      return `
        <div class="search-result" data-action="click->disco#fillForm" data-id="${disc.id}" data-title="${disc.title}" data-artist="${disc.artist.name}" data-release-date="${disc.year}">
          <strong>${disc.title}</strong> by ${disc.artist.name} (${disc.year})
        </div>
      `;
    }).join("");

    this.searchResultsTarget.innerHTML = html;
  }

  fillForm(event) {
    const disc = event.target.dataset;

    // Fill the form fields with the selected disc data
    this.titleTarget.value = disc.title;
    this.artistTarget.value = disc.artist;
    this.releaseDateTarget.value = disc.releaseDate;

    // Optionally, hide search results after selection
    this.searchResultsTarget.innerHTML = "";
  }
}
