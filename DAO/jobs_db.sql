
-- 
-- Table structure for `tasks`
-- 
CREATE DATABASE jobs_db;
USE jobs_db;
CREATE TABLE IF NOT EXISTS `jobs_db` (
  `id` int(11) NOT NULL,
  `job_listing` varchar(200) NOT NULL,
  `description` varchar(200) NOT NULL,
  `salary` DECIMAL(66,13) NOT NULL,
  `skills` varchar(200) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `jobs_db` ADD PRIMARY KEY (`id`);
ALTER TABLE `jobs_db` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

/*
INSERT INTO `jobs_db` (`id`, `job_listing`, `description`, `salary`, `skills`, `status` `created_at`) VALUES
(1, 'Web Developer', 'Web developers are responsible for the look of the site. They are also responsible for the site’s technical aspects, such as its performance and capacity, which are measures of a website’s speed and how much traffic the site can handle. In addition, web developers may create content for the site',  66.13, 'HTML', 1, '2016-04-10 23:50:40'),
(2, 'Software Engineer', 'Designs software', 44.00, 'Backend',  1, '2016-04-10 23:50:40'),
/*(3, 'Fix bugs', 1, '2016-04-10 23:50:40'),
(4, 'Refactor Code', 1, '2016-04-10 23:50:40'),
(5, 'Push to prod', 1, '2016-04-10 23:50:50');*/


