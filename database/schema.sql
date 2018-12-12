-- ---
-- HOW TO USE 
-- PIPE THIS FILE INTO YOUR MYSQL DATABASE TO CLEAN THE DB AND TABLES
--
--

-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;


--  DROP DATABASE IF EXISTS devdb001;
--  CREATE DATABASE devdb001;


USE devdb001;


-- ---
-- Table 'users'
-- 
-- ---

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INTEGER NOT NULL AUTO_INCREMENT,
  created_at TIMESTAMP NULL DEFAULT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  -- need identifying info
  PRIMARY KEY (id)
)


-- ---
-- Table 'contacts'
-- 
-- ---

DROP TABLE IF EXISTS contacts;

CREATE TABLE contacts (
  id INTEGER NOT NULL AUTO_INCREMENT,
  created_at TIMESTAMP NULL DEFAULT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  user INTEGER NOT NULL,
  given_name VARCHAR(255) NOT NULL,
  preferred_name VARCHAR(255) NOT NULL,
  middle_name VARCHAR(255) NULL DEFAULT NULL,
  family_name VARCHAR(255) NOT NULL,
  maiden_name VARCHAR(255) NULL DEFAULT NULL,
  gender VARCHAR(255) NOT NULL,
  birth_year SMALLINT NULL DEFAULT NULL,
  birth_month TINYINT NULL DEFAULT NULL,
  birth_day TINYINT NULL DEFAULT NULL,
  id_city INTEGER NULL DEFAULT NULL,  -- ref
  id_employer INTEGER NULL DEFAULT NULL,  -- ref
  spouse INTEGER NULL DEFAULT NULL, -- ref
  occupation VARCHAR(255) NULL DEFAULT NULL,
  last_contacted DATE NULL DEFAULT NULL,
  date_met DATE NULL DEFAULT NULL,
  how_met TEXT NULL DEFAULT NULL,
  id_photo INTEGER NULL DEFAULT NULL,  -- ref
  id_business_card INTEGER NULL DEFAULT NULL,  -- ref

  PRIMARY KEY (id)

  -- food preferences
  -- color preferences
  -- personality type
  -- style
  -- life events 

)


-- ---
-- Table 'phone_numbers'
-- 
-- ---

DROP TABLE IF EXISTS phone_numbers;

CREATE TABLE phone_numbers (
  id INTEGER NOT NULL AUTO_INCREMENT,
  created_at TIMESTAMP NULL DEFAULT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  id_contact INTEGER NOT NULL,
  digits VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (id)
)


-- ---
-- Table 'emails'
-- 
-- ---

DROP TABLE IF EXISTS emails;

CREATE TABLE emails (
  id INTEGER NOT NULL AUTO_INCREMENT,
  created_at TIMESTAMP NULL DEFAULT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  id_contact INTEGER NOT NULL,
  email_address VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (id)
)


-- ---
-- Table 'cities'
-- 
-- ---

DROP TABLE IF EXISTS cities;

CREATE TABLE cities (
  id INTEGER NOT NULL AUTO_INCREMENT,
  created_at TIMESTAMP NULL DEFAULT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  city VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (id)
)


-- ---
-- Table 'employers'
-- 
-- ---

DROP TABLE IF EXISTS employers;

CREATE TABLE employers (
  id INTEGER NOT NULL AUTO_INCREMENT,
  created_at TIMESTAMP NULL DEFAULT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  employer VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (id)
)


-- ---
-- Table 'groups'
-- 
-- ---

DROP TABLE IF EXISTS groups;

CREATE TABLE groups (
  id INTEGER NOT NULL AUTO_INCREMENT,
  created_at TIMESTAMP NULL DEFAULT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  group VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (id)
)


-- ---
-- Table 'contact_groups'
-- 
-- ---

DROP TABLE IF EXISTS contact_groups;

CREATE TABLE contact_groups (
  id INTEGER NOT NULL AUTO_INCREMENT,
  created_at TIMESTAMP NULL DEFAULT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  id_contact VARCHAR(255) NULL DEFAULT NULL,
  id_groups VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (id)
)


-- ---
-- Table 'interaction_type'
-- 
-- ---

DROP TABLE IF EXISTS interaction_type;

CREATE TABLE interaction_type (
  id INTEGER NOT NULL AUTO_INCREMENT,
  created_at TIMESTAMP NULL DEFAULT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  type VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (id)
)


-- ---
-- Table 'interactions'
-- 
-- ---

DROP TABLE IF EXISTS interactions;

CREATE TABLE interactions (
  id INTEGER NOT NULL AUTO_INCREMENT,
  created_at TIMESTAMP NULL DEFAULT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  id_contact VARCHAR(255) NULL DEFAULT NULL,
  id_interaction_type VARCHAR(255) NULL DEFAULT NULL,
  desccription MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (id)
)


-- ---
-- Table 'notes'
-- 
-- ---

DROP TABLE IF EXISTS notes;

CREATE TABLE notes (
  id INTEGER NOT NULL AUTO_INCREMENT,
  created_at TIMESTAMP NULL DEFAULT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  note VARCHAR(255) NULL DEFAULT NULL,
  id_interaction INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
)


-- ---
-- Table 'photos'
-- 
-- ---

DROP TABLE IF EXISTS photos;

CREATE TABLE photos (
  id INTEGER NOT NULL AUTO_INCREMENT,
  created_at TIMESTAMP NULL DEFAULT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  type VARCHAR(255),
  description TEXT NULL DEFAULT NULL,
  url TEXT NULL DEFAULT NULL,
  PRIMARY KEY (id)
)


-- TABLES TO ADD
-- descriptions
-- contacts_phone_numbers
-- contacts_emails
-- addresses
-- contacts_addresses
-- states
-- countries
-- contacts_events
-- industries
-- industries_events
-- occupations
-- events
  -- life events
-- preferences
  -- colors
  -- foods
  -- animals
  -- locations
  -- activites
  -- books
  -- movies
  -- shows
  -- styles
  -- sportsTeams
-- personality profiles
