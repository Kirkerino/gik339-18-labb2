const url = "http://localhost:3000/users";

fetch(url)
  .then(response => response.json())
  .then(users => {
    const userList = document.createElement('ul');

    userList.style.listStyleType = 'none';
    userList.style.padding = '100px';
    userList.style.margin = '0';
    userList.style.display = 'grid';
    userList.style.gridTemplateColumns = 'repeat(2, 1fr)';
    userList.style.gridGap = '20px';
    userList.style.maxWidth = '850px';
    userList.style.margin = '0 auto';
    userList.style.background = 'linear-gradient(to bottom, rgb(50, 50, 50), rgb(40, 40, 40))';
    userList.style.border = `2px solid gray`;
    userList.style.borderRadius = '120px 10px 120px 10px';

    users.forEach(user => {
      const userItem = document.createElement('li');
      const nameSpan = document.createElement('span');

      nameSpan.textContent = `${user.firstName} ${user.lastName}`;
      nameSpan.style.fontFamily = 'Arial, sans-serif';
      nameSpan.style.fontSize = '20px';
      nameSpan.style.fontWeight = 'bold';

      const idSpan = document.createElement('span');

      idSpan.textContent = ` (${user.username})`;
      idSpan.style.fontFamily = 'Monospace, sans-serif';
      idSpan.style.verticalAlign = 'top';
      idSpan.style.lineHeight = '1.5em';
      idSpan.style.fontSize = '16px';
      idSpan.style.color = 'rgb(30, 30, 30)';

      userItem.appendChild(nameSpan);
      userItem.appendChild(idSpan);

      userItem.style.width = '380px';
      userItem.style.padding = '20px';
      userItem.style.background = `linear-gradient(to right, ${user.color}, rgba(255, 255, 255, 0))`;
      userItem.style.border = `1px solid ${user.color}`;
      userItem.style.borderRadius = '10px';

      userList.appendChild(userItem);
  });
  
    document.body.appendChild(userList);
  })
  .catch(error => console.error('Error:', error));
