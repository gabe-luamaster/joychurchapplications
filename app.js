document.addEventListener("DOMContentLoaded", () => {

const container = document.getElementById("teams")

if(!container || !window.APP_SETTINGS) return

container.innerHTML=""

APP_SETTINGS.teams.forEach(team=>{

const statusClass =
team.status === "Open"
? "bg-green-100 text-green-700"
: "bg-red-100 text-red-700"

const requirementsHTML =
team.requirements
? `<p class="text-sm text-gray-600"><strong>Requirements:</strong> ${team.requirements}</p>`
: ""

container.insertAdjacentHTML("beforeend",`

<div onclick="openApplication('${team.name}')"
class="team-card border rounded-lg p-4 flex justify-between items-start text-black smooth">

<div>

<h2 class="text-lg font-semibold">${team.name}</h2>

<p class="text-sm text-gray-600 mt-1">
<strong>Leaders:</strong> ${team.leaders.join(", ")}
</p>

<p class="text-sm text-gray-600">
<strong>Description:</strong> ${team.description}
</p>

${requirementsHTML}

</div>

<span class="px-4 py-1 rounded-full text-sm ${statusClass}">
${team.status}
</span>

</div>

`)

})

})

function openApplication(teamName){

const team = APP_SETTINGS.teams.find(t=>t.name===teamName)

if(!team || team.status==="Closed"){
alert("Applications for this team are currently closed.")
return
}

window.location.href =
"apply.html?team=" + encodeURIComponent(teamName)

}
