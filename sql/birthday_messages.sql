-- Hostinger phpMyAdmin / MySQL에서 실행하세요.
-- Database: u866174927_Lsister

CREATE TABLE IF NOT EXISTS birthday_messages (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  author_name VARCHAR(20) NOT NULL,
  content VARCHAR(200) NOT NULL,
  edit_token CHAR(64) NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_edit_token (edit_token)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
