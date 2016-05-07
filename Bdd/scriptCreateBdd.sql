-- MySQL dump 10.13  Distrib 5.5.49, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: spt2
-- ------------------------------------------------------
-- Server version	5.5.49-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `spt2`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `spt2` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `spt2`;

--
-- Table structure for table `Base_User`
--

DROP TABLE IF EXISTS `Base_User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Base_User` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `FirstName` text NOT NULL,
  `LastName` text,
  `Email` varchar(200) NOT NULL,
  `Password` text NOT NULL,
  `Phone` text NOT NULL,
  `AddressPart1` text NOT NULL,
  `AddressPart2` text,
  `IsFoodie` tinyint(1) NOT NULL DEFAULT '0',
  `IsRestaurant` tinyint(1) NOT NULL DEFAULT '0',
  `Token` text,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Base_User_Id_uindex` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Base_User`
--

LOCK TABLES `Base_User` WRITE;
/*!40000 ALTER TABLE `Base_User` DISABLE KEYS */;
INSERT INTO `Base_User` VALUES (17,'quentin','journet','qjournet2@gmail.com','5fee5ae1c5da17ee54b56abaa45e9355','012345678','12 rue gabriel péri',NULL,1,0,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjE3LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjMwMDAiLCJqdGkiOiJlNmVkNzg0NS0xZjQzLTQ3MjItYTJlZS00OWEyMTE0N2E5YTkiLCJpYXQiOjE0NjI0NTg1MzAsImV4cCI6MTQ2MjQ2MjEzMH0.bYVIJdCPbgyZuPKESYzIcTbYY2xXfebN5a-2c5arCv4'),(18,'restaurant','restaurant','restaurant@gmail.com','6d4b62960a6aa2b1fff43a9c1d95f7b2','0123465789','12 rue',NULL,0,0,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjE4LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjMwMDAiLCJqdGkiOiI1YjA1MjE0Ny01YTRjLTQ4MWQtYmVkZS0wOGUwZWM1NTUzOTciLCJpYXQiOjE0NjI0NTQzOTgsImV4cCI6MTQ2MjQ1Nzk5OH0.PqU_2VjRUDoMWVYxN_VX4o9KUbK1_YeAnmTucKgskO8'),(19,'foodie','foodie','foodie@foodie.com','889ea886e748fbd3dd317130a609f993','125489','dtc',NULL,1,0,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjE5LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjMwMDAiLCJqdGkiOiI4ZmUzYmY3Ny1hNmZkLTQwYzItYmU3OS0zYmNhOGFjY2Y5ZDYiLCJpYXQiOjE0NjI2MzQ3MDQsImV4cCI6MTQ2MjYzODMwNH0.xtCqcXEEnYS3LN7AmPtVbrDgDn5ZKmJ23Quazi6DqKU'),(20,'la bonne bouffe',NULL,'resto@resto.com','9c6350b0aa51300d30790de1192fbcf8','1246985','12 rue du resto',NULL,0,0,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIwLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjMwMDAiLCJqdGkiOiJlM2FkNTBmNS1jZWM2LTRkNDEtYmY2YS03OTQ5OTAwYzU1NjIiLCJpYXQiOjE0NjI2MzQ3MjIsImV4cCI6MTQ2MjYzODMyMn0.bAYkDJuTOn9695F8bIW-wqU3QGpWPaxOdP-rcJFlMmU');
/*!40000 ALTER TABLE `Base_User` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Close_Date`
--

DROP TABLE IF EXISTS `Close_Date`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Close_Date` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `RestaurantId` int(11) NOT NULL,
  `DateClosed` date NOT NULL,
  `DateReOpen` date NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Close_Date_Id_uindex` (`Id`),
  KEY `Close_Date_Restaurant_fk` (`RestaurantId`),
  CONSTRAINT `Close_Date_Restaurant_fk` FOREIGN KEY (`RestaurantId`) REFERENCES `Restaurant` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Close_Date`
--

LOCK TABLES `Close_Date` WRITE;
/*!40000 ALTER TABLE `Close_Date` DISABLE KEYS */;
/*!40000 ALTER TABLE `Close_Date` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Comment_Menu`
--

DROP TABLE IF EXISTS `Comment_Menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Comment_Menu` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `MenuId` int(11) NOT NULL,
  `FoodieId` int(11) NOT NULL,
  `Comment` text NOT NULL,
  `Mark` int(11) NOT NULL,
  `CreationDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Comment_Menu_Id_uindex` (`Id`),
  KEY `Comment_Menu_Menu_fk` (`MenuId`),
  KEY `Comment_Menu_Foodie_fk` (`FoodieId`),
  CONSTRAINT `Comment_Menu_Foodie_fk` FOREIGN KEY (`FoodieId`) REFERENCES `Foodie` (`Id`),
  CONSTRAINT `Comment_Menu_Menu_fk` FOREIGN KEY (`MenuId`) REFERENCES `Menu` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Comment_Menu`
--

LOCK TABLES `Comment_Menu` WRITE;
/*!40000 ALTER TABLE `Comment_Menu` DISABLE KEYS */;
/*!40000 ALTER TABLE `Comment_Menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Comment_Restaurant`
--

DROP TABLE IF EXISTS `Comment_Restaurant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Comment_Restaurant` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `FoodieId` int(11) NOT NULL,
  `RestaurantId` int(11) NOT NULL,
  `Comment` text,
  `Mark` int(11) NOT NULL,
  `CreationDate` datetime NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Comment_Restaurant_Id_uindex` (`Id`),
  KEY `Comment_Restaurant_Foodie_fk` (`FoodieId`),
  KEY `Comment_Restaurant_Restaurant_fk` (`RestaurantId`),
  CONSTRAINT `Comment_Restaurant_Foodie_fk` FOREIGN KEY (`FoodieId`) REFERENCES `Foodie` (`Id`),
  CONSTRAINT `Comment_Restaurant_Restaurant_fk` FOREIGN KEY (`RestaurantId`) REFERENCES `Restaurant` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Comment_Restaurant`
--

LOCK TABLES `Comment_Restaurant` WRITE;
/*!40000 ALTER TABLE `Comment_Restaurant` DISABLE KEYS */;
INSERT INTO `Comment_Restaurant` VALUES (2,7,1,'Bonjour',4,'2016-05-05 00:00:00'),(3,8,2,'I\'ll be back.\nPS - Malade en revenant',1,'2016-05-06 00:00:00'),(5,8,2,'Retester et finalement très bon',5,'2016-05-06 00:00:00');
/*!40000 ALTER TABLE `Comment_Restaurant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Dish`
--

DROP TABLE IF EXISTS `Dish`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Dish` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` text NOT NULL,
  `Description` text,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Dish_Id_uindex` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Dish`
--

LOCK TABLES `Dish` WRITE;
/*!40000 ALTER TABLE `Dish` DISABLE KEYS */;
INSERT INTO `Dish` VALUES (1,'Noodles','Very good noodles!!!'),(2,'Pasta','better than noodles!'),(3,'pizza','très bon');
/*!40000 ALTER TABLE `Dish` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Foodie`
--

DROP TABLE IF EXISTS `Foodie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Foodie` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `BaseUserId` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Foodie_Id_uindex` (`Id`),
  KEY `Foodie_Base_User_fk` (`BaseUserId`),
  CONSTRAINT `Foodie_Base_User_fk` FOREIGN KEY (`BaseUserId`) REFERENCES `Base_User` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Foodie`
--

LOCK TABLES `Foodie` WRITE;
/*!40000 ALTER TABLE `Foodie` DISABLE KEYS */;
INSERT INTO `Foodie` VALUES (7,17),(8,19);
/*!40000 ALTER TABLE `Foodie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Interest`
--

DROP TABLE IF EXISTS `Interest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Interest` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `FoodieId` int(11) NOT NULL,
  `Name` text NOT NULL,
  `Mark` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Interest_Id_uindex` (`Id`),
  KEY `Interest_Foodie_fk` (`FoodieId`),
  CONSTRAINT `Interest_Foodie_fk` FOREIGN KEY (`FoodieId`) REFERENCES `Foodie` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Interest`
--

LOCK TABLES `Interest` WRITE;
/*!40000 ALTER TABLE `Interest` DISABLE KEYS */;
/*!40000 ALTER TABLE `Interest` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Link_Dish_Restaurant`
--

DROP TABLE IF EXISTS `Link_Dish_Restaurant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Link_Dish_Restaurant` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `RestaurantId` int(11) NOT NULL,
  `DishId` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Link_Dish_Restaurant_Id_uindex` (`Id`),
  KEY `Link_Dish_Restaurant_Restaurant_fk` (`RestaurantId`),
  KEY `Link_Dish_Restaurant_Dish_fk` (`DishId`),
  CONSTRAINT `Link_Dish_Restaurant_Restaurant_fk` FOREIGN KEY (`RestaurantId`) REFERENCES `Restaurant` (`Id`),
  CONSTRAINT `Link_Dish_Restaurant_Dish_fk` FOREIGN KEY (`DishId`) REFERENCES `Dish` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Link_Dish_Restaurant`
--

LOCK TABLES `Link_Dish_Restaurant` WRITE;
/*!40000 ALTER TABLE `Link_Dish_Restaurant` DISABLE KEYS */;
INSERT INTO `Link_Dish_Restaurant` VALUES (3,2,1),(4,2,2),(5,2,3);
/*!40000 ALTER TABLE `Link_Dish_Restaurant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Link_Menu_Dish`
--

DROP TABLE IF EXISTS `Link_Menu_Dish`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Link_Menu_Dish` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `MenuId` int(11) NOT NULL,
  `DishId` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Link_Menu_Dish_Id_uindex` (`Id`),
  KEY `Link_Menu_Dish_Dish_fk` (`DishId`),
  KEY `Link_Menu_Dish_Menu_fk` (`MenuId`),
  CONSTRAINT `Link_Menu_Dish_Menu_fk` FOREIGN KEY (`MenuId`) REFERENCES `Menu` (`Id`) ON DELETE CASCADE,
  CONSTRAINT `Link_Menu_Dish_Dish_fk` FOREIGN KEY (`DishId`) REFERENCES `Dish` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Link_Menu_Dish`
--

LOCK TABLES `Link_Menu_Dish` WRITE;
/*!40000 ALTER TABLE `Link_Menu_Dish` DISABLE KEYS */;
INSERT INTO `Link_Menu_Dish` VALUES (2,1,2),(4,1,1),(5,3,2);
/*!40000 ALTER TABLE `Link_Menu_Dish` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Menu`
--

DROP TABLE IF EXISTS `Menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Menu` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `RestaurantId` int(11) NOT NULL,
  `Name` text NOT NULL,
  `Description` text,
  `Price` int(11) NOT NULL,
  `NbPerson` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Menu_Id_uindex` (`Id`),
  KEY `Menu_Restaurant_fk` (`RestaurantId`),
  CONSTRAINT `Menu_Restaurant_fk` FOREIGN KEY (`RestaurantId`) REFERENCES `Restaurant` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Menu`
--

LOCK TABLES `Menu` WRITE;
/*!40000 ALTER TABLE `Menu` DISABLE KEYS */;
INSERT INTO `Menu` VALUES (1,2,'PastaVsNoodle','qu\'elle est le meilleur pasta or noodle ?!',10,2),(3,2,'le test','test création menu in resto',12,2);
/*!40000 ALTER TABLE `Menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Message`
--

DROP TABLE IF EXISTS `Message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Message` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `SenderId` int(11) NOT NULL,
  `ReceiverId` int(11) NOT NULL,
  `Message` text NOT NULL,
  `Creation` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Message_Id_uindex` (`Id`),
  KEY `Message_serder_fk` (`SenderId`),
  KEY `Message_receiver__fk` (`ReceiverId`),
  CONSTRAINT `Message_serder_fk` FOREIGN KEY (`SenderId`) REFERENCES `Foodie` (`Id`),
  CONSTRAINT `Message_receiver__fk` FOREIGN KEY (`ReceiverId`) REFERENCES `Foodie` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Message`
--

LOCK TABLES `Message` WRITE;
/*!40000 ALTER TABLE `Message` DISABLE KEYS */;
/*!40000 ALTER TABLE `Message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Reservation`
--

DROP TABLE IF EXISTS `Reservation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Reservation` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `FoodieId` int(11) NOT NULL,
  `RestaurantId` int(11) NOT NULL,
  `Date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Hour` time NOT NULL,
  `NbPerson` int(11) NOT NULL DEFAULT '0',
  `Comment` text,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Reservation_Id_uindex` (`Id`),
  KEY `Reservation_Foodie_fk` (`FoodieId`),
  KEY `Reservation_Restaurant_fk` (`RestaurantId`),
  CONSTRAINT `Reservation_Foodie_fk` FOREIGN KEY (`FoodieId`) REFERENCES `Foodie` (`Id`),
  CONSTRAINT `Reservation_Restaurant_fk` FOREIGN KEY (`RestaurantId`) REFERENCES `Restaurant` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Reservation`
--

LOCK TABLES `Reservation` WRITE;
/*!40000 ALTER TABLE `Reservation` DISABLE KEYS */;
/*!40000 ALTER TABLE `Reservation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Restaurant`
--

DROP TABLE IF EXISTS `Restaurant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Restaurant` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `BaseUserId` int(11) NOT NULL,
  `OpenHour` time NOT NULL,
  `CloseHour` time NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Restaurant_Id_uindex` (`Id`),
  KEY `Restaurant_User_fk` (`BaseUserId`),
  CONSTRAINT `Restaurant_User_fk` FOREIGN KEY (`BaseUserId`) REFERENCES `Base_User` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Restaurant`
--

LOCK TABLES `Restaurant` WRITE;
/*!40000 ALTER TABLE `Restaurant` DISABLE KEYS */;
INSERT INTO `Restaurant` VALUES (1,18,'00:00:00','00:00:00'),(2,20,'00:00:00','00:00:00');
/*!40000 ALTER TABLE `Restaurant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment_dish`
--

DROP TABLE IF EXISTS `comment_dish`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comment_dish` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `LDishId` int(11) NOT NULL,
  `FoodieId` int(11) NOT NULL,
  `Comment` text NOT NULL,
  `Mark` int(11) NOT NULL,
  `CreationDate` datetime NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `comment_test_Id_uindex` (`Id`),
  KEY `comment_test_foodie_fk` (`FoodieId`),
  KEY `comment_test_l_Dish_fk` (`LDishId`),
  CONSTRAINT `comment_test_l_Dish_fk` FOREIGN KEY (`LDishId`) REFERENCES `Link_Dish_Restaurant` (`Id`) ON DELETE CASCADE,
  CONSTRAINT `comment_test_foodie_fk` FOREIGN KEY (`FoodieId`) REFERENCES `Foodie` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment_dish`
--

LOCK TABLES `comment_dish` WRITE;
/*!40000 ALTER TABLE `comment_dish` DISABLE KEYS */;
/*!40000 ALTER TABLE `comment_dish` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-05-08  0:08:09
