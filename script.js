function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

async function download() {
  const url = document.getElementById("url").value.trim();
  const result = document.getElementById("result");
  const loader = document.getElementById("loading");

  // Reset UI
  result.innerHTML = "";

  // Validation
  if (!url || !url.includes("instagram.com")) {
    result.innerHTML = `
      <p class="error">❌ Please enter a valid Instagram URL</p>
    `;
    return;
  }

  // Show loader
  loader.classList.remove("hidden");

  try {
    // ⏳ Simulated delay (replace with backend API later)
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Success UI
    result.innerHTML = `
      <a href="#" class="download-link"
         onclick="alert('Backend download will be added next 🚀')">
        ⬇ Download Video
      </a>
    `;
  } catch (error) {
    result.innerHTML = `
      <p class="error">❌ Failed to fetch video. Try again.</p>
    `;
  } finally {
    // Hide loader
    loader.classList.add("hidden");
  }
}
