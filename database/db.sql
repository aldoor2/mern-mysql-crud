-- create the table tasks
CREATE TABLE IF NOT EXISTS `tasks` (
  `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
  `title` VARCHAR(200) NOT NULL,
  `description` VARCHAR(300),
  `done` BOOLEAN NOT NULL DEFAULT 0,
  `createAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- renaming the column createAt to createdAt
ALTER TABLE tasks RENAME COLUMN `createAt` TO `createdAt`;