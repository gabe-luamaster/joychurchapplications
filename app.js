document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("teams");
  const applyBtn = document.getElementById("applyBtn");

  if (!container || !window.APP_SETTINGS) return;

  // 🔥 HARD RESET (no duplicates ever)
  container.innerHTML = "";

  // Global applications toggle
  if (!APP_SETTINGS.applicationsOpen) {
    applyBtn.textContent = "Applications Closed";
    applyBtn.classList.add("opacity-50", "pointer-events-none");
    applyBtn.removeAttribute("href");
  }

  APP_SETTINGS.teams.forEach(team => {
    const statusClass =
      team.status === "Open"
        ? "bg-green-100 text-green-700"
        : "bg-red-100 text-red-700";

    const requirementsHTML = team.requirements
      ? `<p class="text-sm text-gray-600"><strong>Requirements:</strong> ${team.requirements}</p>`
      : "";

    const subteamsHTML = team.subteams
      ? `
        <div class="mt-3 ml-4 border-l pl-4 space-y-2">
          <p class="text-sm font-semibold text-gray-700">Sub-Teams</p>
          ${team.subteams
            .map(
              sub => `
              <div class="flex justify-between items-start text-sm">
                <div>
                  <p class="font-medium">${sub.name}</p>
                  <p class="text-gray-600">${sub.description}</p>
                </div>
                <span class="px-3 py-1 rounded-full text-xs bg-red-100 text-red-700">
                  ${sub.status}
                </span>
              </div>
            `
            )
            .join("")}
        </div>
      `
      : "";

    container.insertAdjacentHTML(
      "beforeend",
      `
      <div class="border rounded-lg p-4 flex justify-between items-start">
        <div>
          <h2 class="text-lg font-semibold">${team.name}</h2>
          <p class="text-sm text-gray-600 mt-1">
            <strong>Leaders:</strong> ${team.leaders.join(", ")}
          </p>
          <p class="text-sm text-gray-600">
            <strong>Description:</strong> ${team.description}
          </p>
          ${requirementsHTML}
          ${subteamsHTML}
        </div>

        <span class="px-4 py-1 rounded-full text-sm ${statusClass}">
          ${team.status}
        </span>
      </div>
      `
    );
  });
});
