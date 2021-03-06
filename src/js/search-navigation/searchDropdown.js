// OPEN AND CLOSE SEARCH
const search = document.querySelector('.navbar__item');

function searchDropdown() {
  search.addEventListener('click', () => {
    document.querySelector("#navbar__search-dropdown").classList.toggle("show");
  })
}
searchDropdown();
// OPEN AND CLOSE SEARCH ENDS!


// CLOSE SEARCH BY CLICKING OUTSIDE
const modalOuter = document.querySelector('.navbar__search');

function closeSearch() {
  modalOuter.classList.remove('show');
}

modalOuter.addEventListener('click', function(element) {
  const isOutside = !element.target.closest('.navbar__pushdown');
  if(isOutside) {
    closeSearch();
  }
});

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeSearch();
  }
});

// CLOSE SEARCH BY CLICKING OUTSIDE ENDS
