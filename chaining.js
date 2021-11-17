function welcome() {
  return Promise.resolve("Welcome to Class");
}
function goodbye() {
  return Promise.resolve("Go forth to your team rooms");
}

function lesson() {
  return Promise.resolve("Stuff about Engineering and Code");
}

welcome()
  .then((welcomeResponse) => goodbye().then((goodbye) => [welcomeResponse].concat(goodbye)))
  .then((joinedMessage) => {
    console.log(joinedMessage);
  });
