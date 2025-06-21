// index.js

function submitData(name, email) {
  // To pass the tests, don't forget to return your fetch!
  const formData = {
    name: name,
    email: email
  };

  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  return fetch("http://localhost:3000/users", configurationObject)
    .then(response => response.json())
    .then(data => {
      const main = document.querySelector('main');
      // Create <main> if it doesn't exist (though having it in HTML is better)
      if (!main) {
        const newMain = document.createElement('main');
        document.body.appendChild(newMain);
      }
      const p = document.createElement('p');
      p.textContent = `New User ID: ${data.id}`;
      document.querySelector('main').appendChild(p);
      return data;
    })
    .catch(error => {
      const main = document.querySelector('main');
      // Create <main> if it doesn't exist
      if (!main) {
        const newMain = document.createElement('main');
        document.body.appendChild(newMain);
      }
      const errorMessageDiv = document.createElement('div');
      errorMessageDiv.style.color = 'red';
      errorMessageDiv.textContent = `Error: ${error.message}`;
      document.querySelector('main').appendChild(errorMessageDiv);
    });
}

document.addEventListener('DOMContentLoaded', function() {
  // This listener is here for context, you might call submitData here for immediate testing
  // or primarily use the browser's console as described in the lab instructions.
});