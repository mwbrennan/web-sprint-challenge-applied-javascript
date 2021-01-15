const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const div = document.createElement('div');
  const time = document.createElement('span');
  const name = document.createElement('h1');
  const temperature = document.createElement('span');

  time.textContent = date;
  name.textContent = title;
  temperature.textContent = temp;

  div.classList.add('header');
  time.classList.add('date');
  temperature.classList.add('temp');

  div.appendChild(time);
  div.appendChild(name);
  div.appendChild(temperature);

  return div;

}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  document.querySelector(selector).appendChild(Header('Lambda Times', 'july 4', 88));
}

export { Header, headerAppender }
