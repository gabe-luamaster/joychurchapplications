window.APP_SETTINGS = {
  applicationsOpen: true, // false = closes apply button

  teams: [
    {
      name: "Dream Team",
      leaders: ["N/A"],
      description:
        "Welcomes guests and helps everyone feel comfortable.",
      status: "Open"
    },
    {
      name: "Worship Team",
      leaders: ["Lyca"],
      description:
        "Leads worship through music during services.",
      status: "Closed"
    },
    {
      name: "Production Team",
      leaders: ["Zyphic"],
      description:
        "Handles lighting and technical production.",
      status: "Closed"
    },
    {
      name: "Media Team",
      leaders: ["Joey"],
      description:
        "Creates and manages media content.",
      requirements: "Must have a PC to apply!",
      status: "Closed",
      subteams: [
        {
          name: "Streamer Team",
          description:
            "Provides camera angles for livestreams.",
          status: "Closed"
        }
      ]
    },
    {
      name: "Ministerial Team",
      leaders: ["Pastor Gabriel"],
      description:
        "Delivers God’s Word and spiritual guidance.",
      status: "Closed"
    }
  ]
};
