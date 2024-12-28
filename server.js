  const firebaseConfig = {
    apiKey: "AIzaSyDge7ywyZwRcRnbH3-YBu2D7DLP4n3obIM",
    authDomain: "sahara-zerohunger.firebaseapp.com",
    databaseURL: "https://sahara-zerohunger-default-rtdb.firebaseio.com",
    projectId: "sahara-zerohunger",
    storageBucket: "sahara-zerohunger.appspot.com",
    messagingSenderId: "851403878212",
    appId: "1:851403878212:web:3433fda8ba36d5854db111"
  };

  // initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

