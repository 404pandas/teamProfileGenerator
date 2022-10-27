const generateManager = function (manager) {
  return `
  <div class="snote">
    <li>
    <img
    src="../assets/favpng_drawing-pin.png"
    id="thumbtack"
    height="30"
    width="30"
    alt="Red thumbtack"
  />
      <h3>${manager.name}</h3>
      <h4>Manager</h4>
      <img src="../assets/doodle1.png"
      id="doodle"
      height="80"
      width="80"
      alt="Randomly generated crayon doodles"
    />
      <p class="id">ID: ${manager.id}</p>
      <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
      <p class="office">Office Number: ${manager.officeNumber}</p>
    </li>
  </div>
  `;
};

// create Engineer card
const generateEngineer = function (engineer) {
  return `
  <div class="snote">
    <li>
    <img
    src="../assets/favpng_drawing-pin.png"
    id="thumbtack"
    height="30"
    width="30"
    alt="Red thumbtack"
  />
      <h3>${engineer.name}</h3>
      <h4>Engineer</h4>
      <img src="../assets/doodle2.png"
      id="doodle"
      height="80"
      width="80"
      alt="Randomly generated crayon doodles"
    />
      <p class="id">ID: ${engineer.id}</p>
      <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
      <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
    </li>
  </div>
  `;
};

// create Intern card
const generateIntern = function (intern) {
  return `
  <div class="snote">
    <li>
    <img
    src="../assets/favpng_drawing-pin.png"
    id="thumbtack"
    height="30"
    width="30"
    alt="Red thumbtack"
  />
      <h3>${intern.name}</h3>
      <h4>Intern</h4>
      <img src="../assets/doodle3.png"
      id="doodle"
      height="80"
      width="80"
      alt="Randomly generated crayon doodles"
    />
      <p class="id">ID: ${intern.id}</p>
      <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
      <p class="school">School: ${intern.school}</p>
    </li>
  </div>
  `;
};

// create AssistantToTheRegionalManager card
const generateAssistantToTheRegionalManager = function (
  AssistantToTheRegionalManager
) {
  return `
  <div class="snote">
  <li>
  <img
  src="../assets/favpng_drawing-pin.png"
  id="thumbtack"
  height="30"
  width="30"
  alt="Red thumbtack"
/>
      <h3>${AssistantToTheRegionalManager.name}</h3>
      <h4>Assistant <strike>to the</strike> Regional Manager</h4>
      <img src="../assets/doodle4.png"
      id="doodle"
      height="80"
      width="80"
      alt="Randomly generated crayon doodles"
    />
      <p class="id">ID: ${AssistantToTheRegionalManager.id}</p>
      <p class="email">Email:<a href="mailto:${AssistantToTheRegionalManager.email}">${AssistantToTheRegionalManager.email}</a></p>
      <p class="school">Github: <a href="https://github.com/${AssistantToTheRegionalManager.github}">${AssistantToTheRegionalManager.github}</p>
      
    </li>
  </div>
  `;
};

// push array to page
generateHTML = (data) => {
  // array for cards
  pageArray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    // call manager function
    if (role === "Manager") {
      const managerCard = generateManager(employee);

      pageArray.push(managerCard);
    }

    // call engineer function
    if (role === "Engineer") {
      const engineerCard = generateEngineer(employee);

      pageArray.push(engineerCard);
    }

    // call intern function
    if (role === "Intern") {
      const internCard = generateIntern(employee);

      pageArray.push(internCard);
    }

    // call AssistantToTheRegionalManager function
    if (role === "AssistantToTheRegionalManager") {
      const AssistantToTheRegionalManagerCard =
        generateAssistantToTheRegionalManager(employee);

      pageArray.push(AssistantToTheRegionalManagerCard);
    }
  }

  // joining strings
  const employeeCards = pageArray.join("");

  // return to generated page
  const generateTeam = generateTeamPage(employeeCards);
  return generateTeam;
};

// generate html page
const generateTeamPage = function (employeeCards) {
  return `
<!DOCTYPE html>

<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <link rel="stylesheet" href="reset.css" />
  <link rel="stylesheet" href="style.css" />
  <title>Team Profile</title>
</head>

<body>

  <header>
    Team Profile
  </header>

  <main>
    <div class="container">
      <div class="snote" id="team-cards">
        <!--Team Cards-->
        <ul>
          ${employeeCards}
        </ul>
      </div>
    </div>
  </main>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
</body>

</html>


`;
};

// export to index
module.exports = generateHTML;
