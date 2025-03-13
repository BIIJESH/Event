// event.js
function loadContent() {
  const eventList = JSON.parse(localStorage.getItem("events")) || [];
  const pastEventList = JSON.parse(localStorage.getItem("pastEvents")) || [];
  const noticeList = JSON.parse(localStorage.getItem("notices")) || [];

  const eventListElement = document.getElementById("event-list");
  const pastEventListElement = document.getElementById("past-event-list");
  const noticeListElement = document.getElementById("notice-list");

  eventListElement.innerHTML = "";
  pastEventListElement.innerHTML = "";
  noticeListElement.innerHTML = "";

  // Display notices
  noticeList.forEach((notice) => {
    const noticeItem = document.createElement("div");
    noticeItem.className = "notice-item";
    noticeItem.innerHTML = `<h4>${notice}</h4>`;
    noticeListElement.appendChild(noticeItem);
  });

  // Display upcoming events
  eventList.forEach((event) => {
    const eventItem = document.createElement("div");
    eventItem.className = "event-item";
    eventItem.innerHTML = `
          <h3>${event.name} </h3>
      <p>${event.date}</p>
      <h6>${event.description}</h6>
    `;
    eventListElement.appendChild(eventItem);
  });

  // Display past events
  pastEventList.forEach((event) => {
    const eventItem = document.createElement("div");
    eventItem.className = "event-item past-event";
    eventItem.innerHTML = `
      <h3>${event.name} </h3>
      <p>${event.date}</p>
      <h6>${event.description}</h6>
    `;
    pastEventListElement.appendChild(eventItem);
  });
}

// Load content (notices, events) when the page loads
document.addEventListener("DOMContentLoaded", loadContent);
