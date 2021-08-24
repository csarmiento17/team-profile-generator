const generateTeam = (team) => {
  console.log("Team:", team);
  return `
  
  
  ${team
    .filter((employee) => employee.getRole() === "Manager")
    .map(({ name, id, email }) => {
      return `
      <div class="card" style="width: 18rem;">
            <div class="card-header">
           ${name} <br/>
           <i class="fas fa-mug-hot"></i>Manager</div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${email}">${email}</a></span></li>
           
            </ul>
        </div>
    `;
    })
    .join("")}
`;
};

// export function to generate entire page
module.exports = (team) => {
  // destructure page data by section
  //const { projects, about, ...header } = templateData;
  //console.log("templateData", team);
  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  
  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
       
        <nav class="flex-row">        
          <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
        </nav>
      </div>
    </header>
    <main class="container my-5">
    <div>
    ${generateTeam(team)}
    </div>
  
    </main>
   
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy;2021 My Team</h3>
    </footer>
  </body>
  </html>
  `;
};
