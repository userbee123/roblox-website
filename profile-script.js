document.addEventListener("DOMContentLoaded", () => {
  const loggedInUser = localStorage.getItem("loggedInUser") || "Guest Player";
  const loginTime = localStorage.getItem("loginTime");

  const userNameEl = document.getElementById("userName");
  const userIdEl = document.getElementById("userId");
  const joinDateEl = document.getElementById("joinDate");
  const gameCountEl = document.getElementById("gameCount");
  const friendCountEl = document.getElementById("friendCount");
  const robuxEl = document.getElementById("robux");

  if (userNameEl) userNameEl.textContent = loggedInUser;
  if (userIdEl) userIdEl.textContent = loggedInUser.toLowerCase().replace(/\s+/g, "_");
  if (joinDateEl && loginTime) {
    const date = new Date(loginTime);
    joinDateEl.textContent = date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  }
  if (gameCountEl) gameCountEl.textContent = String(Math.floor(Math.random() * 50) + 5);
  if (friendCountEl) friendCountEl.textContent = String(Math.floor(Math.random() * 30) + 1);
  if (robuxEl) robuxEl.textContent = String((Math.floor(Math.random() * 5000) + 500).toLocaleString());

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

  const editProfileBtn = document.getElementById("editProfileBtn");
  if (editProfileBtn) {
    editProfileBtn.addEventListener("click", () => {
      const newName = prompt("Enter your new username:", loggedInUser);
      if (newName && newName.trim()) {
        localStorage.setItem("loggedInUser", newName.trim());
        location.reload();
      }
    });
  }

  const editAboutBtn = document.getElementById("editAboutBtn");
  if (editAboutBtn) {
    editAboutBtn.addEventListener("click", () => {
      const newBio = prompt("Edit your bio:", document.getElementById("userBio").textContent);
      if (newBio !== null) {
        document.getElementById("userBio").textContent = newBio || "Welcome to my profile!";
      }
    });
  }

  const editAvatarBtn = document.getElementById("editAvatarBtn");
  if (editAvatarBtn) {
    editAvatarBtn.addEventListener("click", () => {
      const emoji = prompt("Choose an avatar emoji:", "👤");
      if (emoji && emoji.trim()) {
        document.getElementById("userAvatar").textContent = emoji.trim();
      }
    });
  }

  const bannerBg = document.getElementById("bannerBg");
  if (bannerBg) {
    const colors = [
      "linear-gradient(135deg, rgba(0, 183, 255, 0.2), rgba(94, 234, 212, 0.1))",
      "linear-gradient(135deg, rgba(94, 234, 212, 0.2), rgba(0, 183, 255, 0.1))",
      "linear-gradient(135deg, rgba(250, 204, 21, 0.15), rgba(0, 183, 255, 0.1))"
    ];
    bannerBg.style.background = colors[Math.floor(Math.random() * colors.length)];
  }
});
