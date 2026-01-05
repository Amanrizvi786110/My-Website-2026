function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

async function download() {
  const url = document.getElementById("url").value;
  const result = document.getElementById("result");
  const loader = document.getElementById("loading");

  result.innerHTML = "";

  if (!url.includes("instagram.com")) {
    result.innerHTML = "<p class='error'>❌ Please enter a valid Instagram URL</p>";
    return;
  }

  loader.classList.remove("hidden");

  try {
    // Simulated delay (replace with backend later)
    await new Promise(resolve => setTimeout(resolve, 2000));

    result.innerHTML = `
      <a href="#" onclick="alert('Backend required')">
        ⬇ Download Video
      </a>
    `;
  } catch (e) {
    result.innerHTML = "<p class='error'>❌ Failed to fetch video</p>";
  } finally {
    loader.classList.add("hidden");
  }
}
