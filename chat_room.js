var firebaseConfig = {
  apiKey: "AIzaSyCuDaeNbXRs5tkWWxutRw19srM_MflXStg",
  authDomain: "chatwebapp-5d9d1.firebaseapp.com",
  databaseURL: "https://chatwebapp-5d9d1-default-rtdb.firebaseio.com",
  projectId: "chatwebapp-5d9d1",
  storageBucket: "chatwebapp-5d9d1.appspot.com",
  messagingSenderId: "138274744842",
  appId: "1:138274744842:web:022207e06951980e374df3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome " + "'" + username + "'" + "!";

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log("Room name is - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row
      //End code
    });
  });
}
getData();

function addRoom() {
  room_name = document.getElementById("add_room_input").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room"
  });
  localStorage.setItem("roomname", room_name);
  window.location = "chat_app.html";
}

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("roomname", name);
  window.location = "chat_app.html";
}

function logout(){
  localStorage.removeItem("roomname");
  localStorage.removeItem("username");
  window.location = "index.html";
}
