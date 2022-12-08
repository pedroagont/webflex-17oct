// HIGHER ORDER FUNCTION (RECEIVES AND INVOKES CALLBACK)
const welcomeUser = (username, callback) => {
  callback(username);
};

// CALLBACK FUNCTIONS DECLARED
const missingDataCallback = (username) => {
  console.log(`Welcome ${username}! Your profile is missing some data! 🖋`);
};

const completeDataCallback = (username) => {
  console.log(`Welcome ${username}! Your profile is completed! ✅`);
};

// HIGHER ORDER FUNCTIONS INVOKED WITH A CALLBACK
welcomeUser('Pedro', completeDataCallback);
welcomeUser('Di', missingDataCallback);
welcomeUser('Jerome', missingDataCallback);
welcomeUser('Mario', completeDataCallback);

// HIGHER ORDER FUNCTION INVOKING AN ANONYMOUS FUNCTION
welcomeUser('Pete', (u) =>
  console.log(`Calling the user ${u} within the callback!`)
);
