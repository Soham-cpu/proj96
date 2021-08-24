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

user_name = localStorage.getItem("username");
room_name = localStorage.getItem("roomname");

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();

function send() {
      msg = document.getElementById("msg_input").value;
      firebase.database().ref(room_name).push({
            like: 0
            message : msg
            name : user_name
      });
}

function logout() {
      localStorage.removeItem("roomname");
      localStorage.removeItem("username");
      window.location.replace("index.html");
}
