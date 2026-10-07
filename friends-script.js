// Friends Page Script
document.addEventListener("DOMContentLoaded", () => {
  const profileBtn = document.getElementById("profileBtn");
  const dropdownMenu = document.getElementById("dropdownMenu");

  if (profileBtn && dropdownMenu) {
    profileBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdownMenu.classList.toggle("active");
    });
  }

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".profile-dropdown")) {
      if (dropdownMenu) dropdownMenu.classList.remove("active");
    }
  });

  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("loggedInUser");
      localStorage.removeItem("loginTime");
      alert("You have been logged out");
      window.location.href = "index.html";
    });
  }

  // Add Friend button
  const addFriendBtn = document.getElementById("addFriendBtn");
  if (addFriendBtn) {
    addFriendBtn.addEventListener("click", () => {
      const username = prompt("Enter username to add:");
      if (username && username.trim()) {
        alert(`Friend request sent to ${username}!`);
      }
    });
  }

  // Accept/Decline buttons
  const acceptBtns = document.querySelectorAll(".request-card .primary");
  const declineBtns = document.querySelectorAll(".request-card .ghost");

  acceptBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".request-card");
      const name = card.querySelector("h4").textContent;
      alert(`You are now friends with ${name}!`);
      card.remove();
    });
  });

  declineBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".request-card");
      card.remove();
    });
  });

  // Friend actions
  const viewProfileBtns = document.querySelectorAll(".friend-item .ghost:nth-child(1)");
  const messageBtns = document.querySelectorAll(".friend-item .ghost:nth-child(2)");
  const joinBtns = document.querySelectorAll(".friend-item .ghost:first-child");
  const removeBtns = document.querySelectorAll(".danger-small");

  viewProfileBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const name = btn.closest(".friend-item").querySelector("h4").textContent;
      alert(`Viewing ${name}'s profile (Demo)`);
    });
  });

  messageBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const name = btn.closest(".friend-item").querySelector("h4").textContent;
      alert(`Opening chat with ${name} (Demo)`);
    });
  });

  joinBtns.forEach((btn) => {
    if (btn.textContent === "Join") {
      btn.addEventListener("click", () => {
        const game = btn.closest(".friend-item").querySelector("p").textContent;
        alert(`Joining game... (Demo)\n${game}`);
      });
    }
  });

  removeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const name = btn.closest(".friend-item").querySelector("h4").textContent;
      if (confirm(`Remove ${name} from friends?`)) {
        btn.closest(".friend-item").remove();
        alert(`${name} has been removed from your friends`);
      }
    });
  });

  // Friend search
  const friendSearch = document.getElementById("friendSearch");
  if (friendSearch) {
    friendSearch.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase();
      const friendItems = document.querySelectorAll("#allFriends .friend-item");
      
      friendItems.forEach((item) => {
        const name = item.querySelector("h4").textContent.toLowerCase();
        if (name.includes(query)) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
    });
  }
});
