const main = document.querySelector('main');
const fetchData = async function(url) {
  const response = await fetch(url);
  const data = await response.json();
  // Use the data
  console.log(data.url);

  main.innerHTML += `<img src="${data.url}" alt="Random Dog">`;
}

// Invoke our function
fetchData('https://random.dog/woof.json');
fetchData('https://random.dog/woof.json');
fetchData('https://random.dog/woof.json');
fetchData('https://random.dog/woof.json');
fetchData('https://random.dog/woof.json');
fetchData('https://random.dog/woof.json');
fetchData('https://random.dog/woof.json');
