
-- 
-- Table structure for `JobCat`
-- 
drop database if exists JobCat_db;

CREATE DATABASE JobCat_db;
USE JobCat_db;
CREATE TABLE IF NOT EXISTS `JobCat_db` (
  `id` int(11) NOT NULL,
  `category` varchar(200) NOT NULL,
  `description` varchar(200) NOT NULL,
  `salary` DECIMAL(65,2) NOT NULL,
  `skills` varchar(200) NOT NULL,
  `interesting_facts` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `JobCat_db` ADD PRIMARY KEY (`id`);
ALTER TABLE `JobCat_db` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

CREATE TABLE IF NOT EXISTS `jobs_applied` (
  `company` varchar(200) NOT NULL,
  `cover_letter` varchar(200) NOT NULL,
  `resumefile` varchar(200) NOT NULL,
  `url` varchar(200) NOT NULL,
  `created` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  primary key (created)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
