const itemsContainer = document.querySelector(".items-list");
const foodForm = document.querySelector("#foodForm");

foodForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const label = e.target[0];
  const amount = e.target[1];

  itemsContainer.innerHTML += `
    <li class="expense">
      <img src="./assets/icon-coin.svg" alt="" />

      <div class="expense__details">
        <h3 class="expense__title">${label.value}</h3>

        <time class="expense__time" datetime="2019-03-09 14:54:39.929">
          09.03.2019 - 14:54
        </time>
      </div>

      <div class="expense__value">
        ${parseInt(amount.value, 10).toFixed(2)}
        PLN
      </div>
    </li>
  `;

  label.value = "";
  amount.value = "";
});
