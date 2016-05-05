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
  `LastName` text NOT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Base_User`
--

LOCK TABLES `Base_User` WRITE;
/*!40000 ALTER TABLE `Base_User` DISABLE KEYS */;
INSERT INTO `Base_User` VALUES (17,'quentin','journet','qjournet2@gmail.com','toto1705//','012345678','12 rue gabriel péri',NULL,1,0,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjE3LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjMwMDAiLCJqdGkiOiI3YTE4MTExNy1jMzExLTQzYTMtYmM5Ni05MjQ4OWRjNjBkYjkiLCJpYXQiOjE0NjI0MTA0NDgsImV4cCI6MTQ2MjQxNDA0OH0.jmi1WCvxdDBxmbanYfUzKrMiGdEyuPM6swcuudFy5-k');
/*!40000 ALTER TABLE `Base_User` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Comment_Dish`
--

DROP TABLE IF EXISTS `Comment_Dish`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Comment_Dish` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `DishId` int(11) NOT NULL,
  `FoodieId` int(11) NOT NULL,
  `Comment` text NOT NULL,
  `Mark` int(11) NOT NULL,
  `CreationDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Comment_Dish_Id_uindex` (`Id`),
  KEY `Comment_Dish_Foodie_fk` (`FoodieId`),
  KEY `Comment_Dish_Dish_fk` (`DishId`),
  CONSTRAINT `Comment_Dish_Dish_fk` FOREIGN KEY (`DishId`) REFERENCES `Dish` (`Id`),
  CONSTRAINT `Comment_Dish_Foodie_fk` FOREIGN KEY (`FoodieId`) REFERENCES `Foodie` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Comment_Dish`
--

LOCK TABLES `Comment_Dish` WRITE;
/*!40000 ALTER TABLE `Comment_Dish` DISABLE KEYS */;
/*!40000 ALTER TABLE `Comment_Dish` ENABLE KEYS */;
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
  `CreationDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Comment_Restaurant_Id_uindex` (`Id`),
  KEY `Comment_Restaurant_Foodie_fk` (`FoodieId`),
  KEY `Comment_Restaurant_Restaurant_fk` (`RestaurantId`),
  CONSTRAINT `Comment_Restaurant_Foodie_fk` FOREIGN KEY (`FoodieId`) REFERENCES `Foodie` (`Id`),
  CONSTRAINT `Comment_Restaurant_Restaurant_fk` FOREIGN KEY (`RestaurantId`) REFERENCES `Restaurant` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Comment_Restaurant`
--

LOCK TABLES `Comment_Restaurant` WRITE;
/*!40000 ALTER TABLE `Comment_Restaurant` DISABLE KEYS */;
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
  `RestaurantId` int(11) NOT NULL,
  `Name` text NOT NULL,
  `Description` text,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Dish_Id_uindex` (`Id`),
  KEY `Dish_Restaurant_fk` (`RestaurantId`),
  CONSTRAINT `Dish_Restaurant_fk` FOREIGN KEY (`RestaurantId`) REFERENCES `Restaurant` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Dish`
--

LOCK TABLES `Dish` WRITE;
/*!40000 ALTER TABLE `Dish` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Foodie`
--

LOCK TABLES `Foodie` WRITE;
/*!40000 ALTER TABLE `Foodie` DISABLE KEYS */;
INSERT INTO `Foodie` VALUES (7,17);
/*!40000 ALTER TABLE `Foodie` ENABLE KEYS */;
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
  KEY `Link_Menu_Dish_Menu_fk` (`MenuId`),
  KEY `Link_Menu_Dish_Dish_fk` (`DishId`),
  CONSTRAINT `Link_Menu_Dish_Dish_fk` FOREIGN KEY (`DishId`) REFERENCES `Dish` (`Id`),
  CONSTRAINT `Link_Menu_Dish_Menu_fk` FOREIGN KEY (`MenuId`) REFERENCES `Menu` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Link_Menu_Dish`
--

LOCK TABLES `Link_Menu_Dish` WRITE;
/*!40000 ALTER TABLE `Link_Menu_Dish` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Menu`
--

LOCK TABLES `Menu` WRITE;
/*!40000 ALTER TABLE `Menu` DISABLE KEYS */;
/*!40000 ALTER TABLE `Menu` ENABLE KEYS */;
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
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Restaurant_Id_uindex` (`Id`),
  KEY `Restaurant_User_fk` (`BaseUserId`),
  CONSTRAINT `Restaurant_User_fk` FOREIGN KEY (`BaseUserId`) REFERENCES `Base_User` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Restaurant`
--

LOCK TABLES `Restaurant` WRITE;
/*!40000 ALTER TABLE `Restaurant` DISABLE KEYS */;
/*!40000 ALTER TABLE `Restaurant` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-05-05  9:44:20