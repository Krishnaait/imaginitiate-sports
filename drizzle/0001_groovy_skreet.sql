CREATE TABLE `contest_entries` (
	`id` int AUTO_INCREMENT NOT NULL,
	`contestId` int NOT NULL,
	`userId` int NOT NULL,
	`teamId` int NOT NULL,
	`points` decimal(10,2) NOT NULL DEFAULT '0',
	`rankPosition` int,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `contest_entries_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `contests` (
	`id` int AUTO_INCREMENT NOT NULL,
	`matchId` varchar(255) NOT NULL,
	`name` varchar(255) NOT NULL,
	`maxEntries` int NOT NULL,
	`currentEntries` int NOT NULL DEFAULT 0,
	`status` enum('upcoming','live','completed') NOT NULL DEFAULT 'upcoming',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `contests_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `team_players` (
	`id` int AUTO_INCREMENT NOT NULL,
	`teamId` int NOT NULL,
	`playerId` varchar(255) NOT NULL,
	`playerName` varchar(255) NOT NULL,
	`role` varchar(50) NOT NULL,
	`credits` decimal(5,2) NOT NULL,
	CONSTRAINT `team_players_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `user_teams` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`matchId` varchar(255) NOT NULL,
	`name` varchar(255) NOT NULL,
	`captainId` varchar(255) NOT NULL,
	`viceCaptainId` varchar(255) NOT NULL,
	`totalCreditsUsed` decimal(5,2) NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `user_teams_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `users` ADD `skillPoints` int DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE `contest_entries` ADD CONSTRAINT `contest_entries_contestId_contests_id_fk` FOREIGN KEY (`contestId`) REFERENCES `contests`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `contest_entries` ADD CONSTRAINT `contest_entries_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `contest_entries` ADD CONSTRAINT `contest_entries_teamId_user_teams_id_fk` FOREIGN KEY (`teamId`) REFERENCES `user_teams`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `team_players` ADD CONSTRAINT `team_players_teamId_user_teams_id_fk` FOREIGN KEY (`teamId`) REFERENCES `user_teams`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `user_teams` ADD CONSTRAINT `user_teams_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;