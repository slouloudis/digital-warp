
run this first: 
```sql
CREATE TABLE IF NOT EXISTS games (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    img_url TEXT,
    description TEXT NOT NULL,
    genre VARCHAR(50) NOT NULL,
    year_released INT NOT NULL,
    score DECIMAL(3, 2) NOT NULL,
    platform VARCHAR(100) NOT NULL,
    developer VARCHAR(100) NOT NULL
);
```

THEN THIS 

```sql

INSERT INTO games (title, description, genre, year_released, score, platform, developer) VALUES
('Eclipse Overdrive', 'A rogue AI battles for survival in a decaying metropolis.', 'Action RPG', 2148, 8.7, 'Neuromatrix VR, OmniConsole 7, HoloGrid', 'Synapse Studios'),
('Neon Shadows', 'Play as a shadow operative navigating a city under constant surveillance.', 'Stealth Thriller', 2148, 9.1, 'CyberDeck 9, VR Mirage, NetStream+', 'DarkCircuit Games'),
('Quantum Drift', 'Race through dynamic cyber highways in this high-octane thriller.', 'Racing', 2148, 8.3, 'SpeedNet VR, ConsoleX, HoloVision', 'Chrome Pulse'),
('Legends of Eldoria', 'Embark on a quest to save the enchanted world of Eldoria.', 'Fantasy RPG', 2147, 9.5, 'OmniConsole 7, HoloGrid, VR Mirage', 'Arcane Realms'),
('Steel Horizon', 'Command your fleet in a futuristic naval warfare scenario.', 'Tactical Strategy', 2146, 8.0, 'CyberDeck 9, ConsoleX, NetStream+', 'IronClad Studios'),
('Mystic Realms', 'Dive into a sprawling online world where magic and mystery await.', 'Fantasy MMORPG', 2145, 9.2, 'Neuromatrix VR, OmniConsole 7, HoloVision', 'DreamWeave Interactive'),
('Galactic Frontier', 'Explore uncharted planets and discover alien civilizations.', 'Sci-Fi Exploration', 2148, 8.9, 'SpeedNet VR, VR Mirage, NetStream+', 'StarQuest Studios'),
('Forest of Shadows', 'Venture into an eerie forest filled with ancient puzzles and malevolent spirits.', 'Horror Adventure', 2147, 8.5, 'ConsoleX, CyberDeck 9, HoloVision', 'DarkWood Games'),
('CyberRogue', 'Hack, stealth, and fight your way through a dystopian future.', 'Cyberpunk Action', 2148, 9.0, 'Neuromatrix VR, OmniConsole 7', 'NeonVibe Studios'),
('Dragonheart Chronicles', 'A fantasy adventure where you tame dragons and conquer kingdoms.', 'Fantasy Adventure', 2146, 8.8, 'OmniConsole 7, HoloGrid', 'Legendary Tales'),
('Nightmare Abyss', 'Survive the horrors lurking in the deepest parts of the abyss.', 'Survival Horror', 2147, 8.4, 'VR Mirage, ConsoleX', 'ShadowRealms'),
('TechnoWarrior', 'A futuristic combat game set in a world where technology rules.', 'Action', 2148, 8.6, 'CyberDeck 9, HoloVision', 'TechPulse Interactive'),
('Phantom Protocol', 'Uncover secrets and engage in espionage in a cyberpunk city.', 'Stealth', 2148, 9.1, 'NetStream+, VR Mirage', 'GhostOps Studio'),
('Realm of the Ancients', 'Explore ancient ruins and unlock the mysteries of the past.', 'Adventure', 2147, 8.7, 'OmniConsole 7, HoloGrid', 'AncientMyst Games'),
('NeuroFighter', 'A competitive fighting game with cybernetic enhancements.', 'Fighting', 2148, 8.9, 'SpeedNet VR, ConsoleX', 'FightTech Studios');


```