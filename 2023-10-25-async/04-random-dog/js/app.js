const fetchData = async function() {
  const response = await fetch('https://random.dog/woof.json');
  const data = await response.json();
  // Use the data
  console.log(data.url);

  const main = document.querySelector('main');
  main.innerHTML = `<img src="${data.url}" alt="Random Dog">`;
}

// Invoke our function
fetchData();