-- MySQL dump 10.13  Distrib 8.0.22, for macos10.15 (x86_64)
--
-- Host: 127.0.0.1    Database: hackathonProject
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `User` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(60) NOT NULL,
  `password` varchar(200) NOT NULL,
  `email` varchar(150) NOT NULL,
  `phone` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES (1,'Javier','$2b$10$gUo4EtjY..hkYBU.VurqXefvV3xXbUYXqq7UBb8FcrhDiS5M3Me/2','javier@mail.com',874747),(3,'David','$2b$10$cp2PIwPKOPsNzgm7l1caHOsq5yNMHHY4jBUVUTaoAaN6Yl3hPJMoG','David@email.com',665),(13,'Johnson','$2b$10$Qw2RgM.bjLLG.tGZHUmUMueYFL8z2Pd5cxI7RFfULpevrQ8CHLryW','johnson@mail.com',93848348),(14,'Nani','$2b$10$7e2O47gkVyT2wCgPDjZMbOTH.lHZlEaJ.bWtyJ7so4Z.QmCckiUw2','Nani@mail.com',38399834);
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User_Dashboard`
--

DROP TABLE IF EXISTS `User_Dashboard`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `User_Dashboard` (
  `idUser_Dashboard` int NOT NULL,
  `User_id` int NOT NULL,
  `scores` int NOT NULL,
  `timeFinish` datetime NOT NULL,
  PRIMARY KEY (`idUser_Dashboard`),
  KEY `fk_User_Dashboard_User_idx` (`User_id`),
  CONSTRAINT `fk_User_Dashboard_User` FOREIGN KEY (`User_id`) REFERENCES `User` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User_Dashboard`
--

LOCK TABLES `User_Dashboard` WRITE;
/*!40000 ALTER TABLE `User_Dashboard` DISABLE KEYS */;
INSERT INTO `User_Dashboard` VALUES (1,1,32,'2010-12-31 01:15:00'),(2,3,18,'2010-12-31 01:15:00'),(3,13,55,'2010-12-31 01:15:00');
/*!40000 ALTER TABLE `User_Dashboard` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-13  0:49:46
