function userEnter(){
    username = document.getElementById("username_input").value;

    localStorage.setItem("username", username);

    window.location = "chat_room.html"
}