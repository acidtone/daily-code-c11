const main = document.querySelector('main');
const fetchData = async () => {
  const response = await fetch('https://random.dog/woof.json');
  const data = await response.json();
  // Use the data
  console.log(data.url);

  main.innerHTML += `<img src="${data.url}" alt="Random Dog">`;
}

const button = document.querySelector('button');
button.addEventListener('click', fetchData);