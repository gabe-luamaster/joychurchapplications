const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 🔒 BACKEND DATA (YOU CONTROL THIS)
let teams = [
  {
    id: 1,
    name: "Creative Experience Team",
    leader: "Jordan Craft",
    description: "Fosters connections by visually welcoming guests.",
    status: "closed"
  },
  {
    id: 2,
    name: "Worship Team",
    leader: "Ryan Ruiz",
    description: "Leads worship through music during services.",
    status: "closed"
  },
  {
    id: 3,
    name: "Production Team",
    leader: "Caden Cole",
    description: "Handles lighting, sound, and visuals.",
    status: "closed"
  },
  {
    id: 4,
    name: "Media Team",
    leader: "Ezra Thompson",
    description: "Creates and manages content for Grace Media.",
    status: "closed"
  },
  {
    id: 5,
    name: "Operations Team",
    leader: "Micah Hall",
    description: "Coordinates behind-the-scenes operations.",
    status: "closed"
  }
];

// 🌐 FRONTEND READS THIS
app.get("/api/teams", (req, res) => {
  res.json(teams);
});

// 🔧 ADMIN WILL USE THIS LATER
app.post("/api/teams/update", (req, res) => {
  teams = req.body;
  res.json({ success: true });
});

app.listen(3000, () => {
  console.log("Backend running at http://localhost:3000");
});
