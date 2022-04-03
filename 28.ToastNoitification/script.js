const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const message = ["msg1", "msg2", "msg3", "msg4"];

const types = ["info", "success", "error"];

button.addEventListener("click", () => createNotification());

const createNotification = (message = null, type = null) => {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.classList.add(type ? type : getRandomType());

  notif.innerText = message ? message : getRandomMessage();

  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
};

const getRandomMessage = () => {
  return message[Math.floor(Math.random() * message.length)];
};
const getRandomType = () => {
  return types[Math.floor(Math.random() * types.length)];
};
