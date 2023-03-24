const jsonURL = './data.json';

fetch(jsonURL)
.then(response => response.json())
.then(data => {

    const jsonDataHtml = `
      <ul>
        <li>Name: ${data.category}</li>
        <li>Age: ${data.score}</li>
        <li>Email: ${data.img}</li>
      </ul>
    `;

    
});