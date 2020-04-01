const allBrands = document.getElementById("all-brands");

fetch("http://desafioonline.webmotors.com.br/api/OnlineChallenge/Make")
  .then(response => response.json())
  .then((data) => {
    data.Search.forEach((result) => {
      const brand = `<option>${result.Name}</option>`;
      all-brands.insertAdjacentHTML("beforeend", brand);
    });
  });

const form = document.getElementById("all-brands");

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = event.currentTarget.querySelector('.custom-select');
  results.innerHTML = '';
  allBrands(input.value);
});
