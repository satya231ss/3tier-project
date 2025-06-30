-- IPL Teams
CREATE TABLE IF NOT EXISTS `ipl_teams` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL,
  `logo` VARCHAR(500)
);

-- Title Winners
CREATE TABLE IF NOT EXISTS `ipl_titles` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `team_id` INT,
  `year` INT,
  FOREIGN KEY (team_id) REFERENCES ipl_teams(id)
);

-- Captains per year
CREATE TABLE IF NOT EXISTS `team_captains` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `team_id` INT,
  `year` INT,
  `captain_name` VARCHAR(100),
  FOREIGN KEY (team_id) REFERENCES ipl_teams(id)
);

-- Points Table
CREATE TABLE IF NOT EXISTS `points_table` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `team_id` INT,
  `year` INT,
  `matches_played` INT,
  `wins` INT,
  `losses` INT,
  `points` INT,
  FOREIGN KEY (team_id) REFERENCES ipl_teams(id)
);

-- Players
CREATE TABLE IF NOT EXISTS `team_players` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `team_id` INT,
  `year` INT,
  `player_name` VARCHAR(100),
  `photo_url` VARCHAR(500),
  FOREIGN KEY (team_id) REFERENCES ipl_teams(id)
);
