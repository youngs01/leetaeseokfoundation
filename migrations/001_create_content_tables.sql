-- Migration: Create content management tables
-- Created: 2026-02-20

-- Foundation News Table
CREATE TABLE IF NOT EXISTS foundation_news (
  id VARCHAR(50) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  summary TEXT NOT NULL,
  content TEXT,
  image VARCHAR(500),
  date DATE NOT NULL,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Lecture News Table
CREATE TABLE IF NOT EXISTS lecture_news (
  id VARCHAR(50) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  summary TEXT NOT NULL,
  content TEXT,
  image VARCHAR(500),
  date DATE NOT NULL,
  location VARCHAR(255),
  speaker VARCHAR(255),
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Press News Table
CREATE TABLE IF NOT EXISTS press_news (
  id VARCHAR(50) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  summary TEXT NOT NULL,
  content TEXT,
  image VARCHAR(500),
  date DATE NOT NULL,
  source VARCHAR(100),
  url VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Videos Table
CREATE TABLE IF NOT EXISTS videos (
  id VARCHAR(50) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  summary TEXT NOT NULL,
  content TEXT,
  image VARCHAR(500),
  youtube_id VARCHAR(50) NOT NULL,
  date DATE NOT NULL,
  duration VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Gallery Table
CREATE TABLE IF NOT EXISTS galleries (
  id VARCHAR(50) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  summary TEXT NOT NULL,
  content TEXT,
  image VARCHAR(500),
  date DATE NOT NULL,
  image_count INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Gallery Images Table (for storing multiple images per gallery)
CREATE TABLE IF NOT EXISTS gallery_images (
  id VARCHAR(50) PRIMARY KEY,
  gallery_id VARCHAR(50) NOT NULL,
  image_url VARCHAR(500) NOT NULL,
  alt TEXT,
  description TEXT,
  display_order INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (gallery_id) REFERENCES galleries(id) ON DELETE CASCADE
);

-- Books & Movies Table
CREATE TABLE IF NOT EXISTS books_movies (
  id VARCHAR(50) PRIMARY KEY,
  type VARCHAR(10) NOT NULL, -- 'book' or 'movie'
  title VARCHAR(255) NOT NULL,
  summary TEXT NOT NULL,
  content TEXT,
  image VARCHAR(500),
  author VARCHAR(255),
  director VARCHAR(255),
  publisher VARCHAR(255),
  published_date VARCHAR(20),
  release_date VARCHAR(20),
  runtime VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Thank You Letters Table
CREATE TABLE IF NOT EXISTS thank_you_letters (
  id VARCHAR(50) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  summary TEXT NOT NULL,
  content TEXT,
  image VARCHAR(500),
  date DATE NOT NULL,
  letter_type VARCHAR(50), -- '장학생', '해외사업', '국내사업'
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for faster queries
CREATE INDEX idx_foundation_news_date ON foundation_news(date DESC);
CREATE INDEX idx_lecture_news_date ON lecture_news(date DESC);
CREATE INDEX idx_press_news_date ON press_news(date DESC);
CREATE INDEX idx_videos_date ON videos(date DESC);
CREATE INDEX idx_galleries_date ON galleries(date DESC);
CREATE INDEX idx_books_movies_type ON books_movies(type);
CREATE INDEX idx_thank_you_letters_date ON thank_you_letters(date DESC);
CREATE INDEX idx_gallery_images_gallery_id ON gallery_images(gallery_id);
