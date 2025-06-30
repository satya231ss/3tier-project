// Get all teams
app.get("/teams", (req, res) => {
  db.query("SELECT * FROM ipl_teams", (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

// Get titles
app.get("/titles", (req, res) => {
  db.query(
    `SELECT t.name, ti.year 
     FROM ipl_titles ti 
     JOIN ipl_teams t ON ti.team_id = t.id`,
    (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    }
  );
});

// Get captains per year
app.get("/captains", (req, res) => {
  db.query(
    `SELECT t.name, c.year, c.captain_name 
     FROM team_captains c 
     JOIN ipl_teams t ON c.team_id = t.id`,
    (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    }
  );
});

// Get points table by year
app.get("/points/:year", (req, res) => {
  const year = req.params.year;
  db.query(
    `SELECT t.name, p.* 
     FROM points_table p 
     JOIN ipl_teams t ON p.team_id = t.id 
     WHERE p.year = ?`,
    [year],
    (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    }
  );
});

// Get players by team and year
app.get("/players/:team_id/:year", (req, res) => {
  const { team_id, year } = req.params;
  db.query(
    `SELECT player_name, photo_url 
     FROM team_players 
     WHERE team_id = ? AND year = ?`,
    [team_id, year],
    (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    }
  );
});
