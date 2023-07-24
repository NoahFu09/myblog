CREATE TABLE `blog`.`posts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `desc` VARCHAR(1000) NOT NULL,
  `img` VARCHAR(255) NOT NULL,
  `date` DATETIME NOT NULL,
  `uid` INT NOT NULL,
  `cat` VARCHAR(45) NOT NULL,
  `state` VARCHAR(45) NOT NULL, --1 公開, 2 編輯中, 3 不公開
  PRIMARY KEY (`id`),
  INDEX `uid_idx` (`uid` ASC),
  CONSTRAINT `uid`
    FOREIGN KEY (`uid`)
    REFERENCES `blog`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
