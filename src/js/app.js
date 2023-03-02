const socket = io();


let userName = localStorage.getItem("id")?.trim()
let name = localStorage.getItem("name")?.trim();
if (!userName) {
  window.location.pathname = "/login";
}

chatForm.onsubmit = (e) => {
    console.log(userName);
    e.preventDefault();
    if (chatInput.value.trim()) {
        socket.emit("chatmessage", {
            name: name,
            text: chatInput.value.trim(),
            uuid: userName
        });
        chatInput.value = "";
        chatInfo = "";
    }
}
socket.on("sbvsdb", (data) => {
    console.log(data);
    messageInfo(data)
});

function messageInfo(data) {
    let chatmes = createElement("div", data.uuid == userName ? "chat1 chat" : " chat2 chat");
    chatelement = createElement("div", "chat", data.text)
    let namefor = createElement("span", "namefor", data.name == name ? "" : data.name);
    chatelement.appendChild(namefor)
    chatmes.appendChild(chatelement)
    chatWrapper.appendChild(chatmes)
scr()

}

function scr() {
    chatWrapper.scrollTop = chatWrapper.scrollHeight;
}
scr()

chatInput.focus();
chatInput.addEventListener("blur", (e) => {
    e.target.focus();
});