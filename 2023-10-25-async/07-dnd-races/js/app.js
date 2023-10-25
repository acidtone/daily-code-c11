const main = document.querySelector('main');
const fetchData = async () => {
  const response = await fetch('https://www.dnd5eapi.co/api/races');
  const data = await response.json();
  // Use the data
  console.log(data);

  let content = '';

  for (const race of data.results) {
    console.log(race);
    content += `<li><a href="https://www.dnd5eapi.co${race.url}">${race.name}</a></li>`
  }
  

  main.innerHTML = `<ul>${content}</ul>`;
}

fetchData();