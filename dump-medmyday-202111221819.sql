-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: 34.124.158.163    Database: medmyday
-- ------------------------------------------------------
-- Server version	8.0.18-google

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
-- Table structure for table `ADMIN`
--

DROP TABLE IF EXISTS `ADMIN`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ADMIN` (
  `Username` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Password` varchar(90) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Created_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Updated_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`Username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ADMIN`
--

LOCK TABLES `ADMIN` WRITE;
/*!40000 ALTER TABLE `ADMIN` DISABLE KEYS */;
INSERT INTO `ADMIN` VALUES ('admin001','$2a$12$SCFTq8a4I1pgGfLM/vfYiOZFhhvxYI/PFW0oqNwKEaD7RpgUZBNv.','2021-11-21 18:00:07','2021-11-21 18:00:07');
/*!40000 ALTER TABLE `ADMIN` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `APPOINTMENT`
--

DROP TABLE IF EXISTS `APPOINTMENT`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `APPOINTMENT` (
  `Appointment_id` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Appoint_time` datetime NOT NULL,
  `Created_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Updated_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Consultation_id` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Appointed_at` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `Appointed_by` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  PRIMARY KEY (`Appointment_id`),
  KEY `APPOINTMENT_CONSULTATION` (`Consultation_id`),
  KEY `APPOINTMENT_CLINIC` (`Appointed_at`),
  KEY `APPOINTMENT_DOCTOR` (`Appointed_by`),
  CONSTRAINT `APPOINTMENT_CLINIC` FOREIGN KEY (`Appointed_at`) REFERENCES `CLINIC` (`Clinic_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `APPOINTMENT_CONSULTATION` FOREIGN KEY (`Consultation_id`) REFERENCES `CONSULTATION` (`Consultation_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `APPOINTMENT_DOCTOR` FOREIGN KEY (`Appointed_by`) REFERENCES `DOCTOR` (`Username`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `APPOINTMENT`
--

LOCK TABLES `APPOINTMENT` WRITE;
/*!40000 ALTER TABLE `APPOINTMENT` DISABLE KEYS */;
/*!40000 ALTER TABLE `APPOINTMENT` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CHATROOM`
--

DROP TABLE IF EXISTS `CHATROOM`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CHATROOM` (
  `Chatroom_id` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Message_count` int(11) NOT NULL DEFAULT '0',
  `Image_count` int(11) NOT NULL DEFAULT '0',
  `Call_minutes` int(11) NOT NULL DEFAULT '0',
  `Call_count` int(11) NOT NULL DEFAULT '0',
  `Consultation_id` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  PRIMARY KEY (`Chatroom_id`),
  KEY `CHATROOM_CONSULTATION` (`Consultation_id`),
  CONSTRAINT `CHATROOM_CONSULTATION` FOREIGN KEY (`Consultation_id`) REFERENCES `CONSULTATION` (`Consultation_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CHATROOM`
--

LOCK TABLES `CHATROOM` WRITE;
/*!40000 ALTER TABLE `CHATROOM` DISABLE KEYS */;
INSERT INTO `CHATROOM` VALUES ('chatroom001',5,1,7,2,'consult001');
/*!40000 ALTER TABLE `CHATROOM` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CLINIC`
--

DROP TABLE IF EXISTS `CLINIC`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CLINIC` (
  `Clinic_id` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Clinic_name` varchar(90) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Address_text` varchar(180) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Street` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Subdistrict` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `District` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Province` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Postal_code` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Coordinate` point NOT NULL,
  PRIMARY KEY (`Clinic_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CLINIC`
--

LOCK TABLES `CLINIC` WRITE;
/*!40000 ALTER TABLE `CLINIC` DISABLE KEYS */;
INSERT INTO `CLINIC` VALUES ('clinic001','เมื่อไหร่จะใกล้คลินิค','669 ซอย 8','ศรีย่าน','ศรีราชา','ศรีประทุม','ศรีธรรมราช','14560','\0\0\0\0\0\0\0>�WX�Y@���<�-@'),('clinic002','ใกล้ตายคลินิค','10/8 ตรอกในซอกแคบๆ ซอย88','รามาธิบดี','แหลมฟาเรนไฮต์','เมือง','กรุงเทพ','20350','\0\0\0\0\0\0\0~7ݲC!Y@����X+@'),('clinic003','สุชาติพารวยคลินิค','123','พระรามไนน์','สุชาติ','โกงชาติ','กรุงไทย','11100','\0\0\0\0\0\0\0!�>\0�%Y@���8�+@'),('clinic004','หายชัวร์คลินิค','888','พระปิ่นเกล้า','ชุมสาย','ยุงชุม','กรุงศรี','95600','\0\0\0\0\0\0\0>=�e�#Y@���c>�,@'),('clinic005','โรงพยาบาลแอ๊ดแอ๊ดอู๊ดอู๊ด','191 ซอยมาเก๊า','วัดป่าเลไลย์','หมูตู้บาซาลากู้กู้','บางหมด','นครนายก','10530','\0\0\0\0\0\0\0����YIY@��=�r,@');
/*!40000 ALTER TABLE `CLINIC` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CONSULTATION`
--

DROP TABLE IF EXISTS `CONSULTATION`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CONSULTATION` (
  `Consultation_id` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Start_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `End_time` datetime DEFAULT NULL,
  `Status` tinyint(4) NOT NULL DEFAULT '0',
  `Pay_amount` decimal(10,2) NOT NULL DEFAULT '0.00',
  `Patient_username` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `Doctor_username` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  PRIMARY KEY (`Consultation_id`),
  KEY `CONSULTATION_DOCTOR` (`Doctor_username`),
  KEY `CONSULTATION_PATIENT` (`Patient_username`),
  CONSTRAINT `CONSULTATION_DOCTOR` FOREIGN KEY (`Doctor_username`) REFERENCES `DOCTOR` (`Username`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `CONSULTATION_PATIENT` FOREIGN KEY (`Patient_username`) REFERENCES `PATIENT` (`Username`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CONSULTATION`
--

LOCK TABLES `CONSULTATION` WRITE;
/*!40000 ALTER TABLE `CONSULTATION` DISABLE KEYS */;
INSERT INTO `CONSULTATION` VALUES ('consult001','2021-11-22 10:07:04',NULL,1,50.00,'user003','user001');
/*!40000 ALTER TABLE `CONSULTATION` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`%`*/ /*!50003 TRIGGER `CONSULTATION_AFTER_UPDATE` AFTER UPDATE ON `CONSULTATION` FOR EACH ROW BEGIN
	DECLARE num INT;
    DECLARE p_min DECIMAL;
    DECLARE p_max DECIMAL;
    DECLARE p_avg DECIMAL;
	IF NEW.Status = 1 THEN
        SELECT Total_patients, Price_min, Price_max, Price_avg
        INTO num, p_min, p_max, p_avg
		FROM DOCTOR
        WHERE Username = New.Doctor_username;
        IF NEW.Pay_amount < p_min OR p_min IS NULL THEN
			SET p_min = NEW.Pay_amount;
		END IF;
        IF NEW.Pay_amount > p_max OR p_min IS NULL THEN
			SET p_max = NEW.Pay_amount;
		END IF;
        SET p_avg = (p_avg * num) + NEW.Pay_amount;
        SET num = num + 1;
        SET p_avg = p_avg / num;
        UPDATE DOCTOR
        SET Total_patients = num, Price_min = p_min, Price_max = p_max, Price_avg = p_avg
        WHERE Username = NEW.Doctor_username;
	END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `CONSULTATION_SPECIALTY`
--

DROP TABLE IF EXISTS `CONSULTATION_SPECIALTY`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CONSULTATION_SPECIALTY` (
  `Consultation_id` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Specialty_id` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  PRIMARY KEY (`Consultation_id`,`Specialty_id`),
  KEY `CONSULTATION_SPECIALTY_specialty_id` (`Specialty_id`),
  CONSTRAINT `CONSULTATION_SPECIALTY_consultation_id` FOREIGN KEY (`Consultation_id`) REFERENCES `CONSULTATION` (`Consultation_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `CONSULTATION_SPECIALTY_specialty_id` FOREIGN KEY (`Specialty_id`) REFERENCES `SPECIALTY` (`Specialty_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CONSULTATION_SPECIALTY`
--

LOCK TABLES `CONSULTATION_SPECIALTY` WRITE;
/*!40000 ALTER TABLE `CONSULTATION_SPECIALTY` DISABLE KEYS */;
/*!40000 ALTER TABLE `CONSULTATION_SPECIALTY` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CUSTOMER`
--

DROP TABLE IF EXISTS `CUSTOMER`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CUSTOMER` (
  `Username` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Password` varchar(90) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Created_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Updated_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Firstname` varchar(90) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Lastname` varchar(90) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Ssn` varchar(13) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Email` varchar(90) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Birthdate` date NOT NULL,
  `Gender` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Phone_no` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Address_text` varchar(180) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Street` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Subdistrict` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `District` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Province` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Postal_code` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Coordinate` point NOT NULL,
  `Img_path` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `Type` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  PRIMARY KEY (`Username`),
  CONSTRAINT `CUSTOMER_chk_1` CHECK ((`Gender` in (_utf8mb4'M',_utf8mb4'F')))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CUSTOMER`
--

LOCK TABLES `CUSTOMER` WRITE;
/*!40000 ALTER TABLE `CUSTOMER` DISABLE KEYS */;
INSERT INTO `CUSTOMER` VALUES ('user001','$2a$12$SCFTq8a4I1pgGfLM/vfYiOZFhhvxYI/PFW0oqNwKEaD7RpgUZBNv.','2021-11-21 15:38:31','2021-11-21 17:59:05','ปลื้ม','ลองโบ๋','1618942214595','pleumjubjub@hotmail.com','2001-12-05','F','0881234321','123/4 หมู่บ้านคอกควาย','คอกไก่','เชียงคาน','เชียงแสน','เชียงใหม่','90960','\0\0\0\0\0\0\0�zM�X@b0���2@','https://randomuser.me/api/portraits/women/72.jpg','DOCTOR'),('user002','$2a$12$SCFTq8a4I1pgGfLM/vfYiOZFhhvxYI/PFW0oqNwKEaD7RpgUZBNv.','2021-11-21 15:38:31','2021-11-21 17:59:05','สมต้วย','ลิ','5732988427903','somtuay.l@hotmail.com','2001-12-04','M','0991234598','1/4 ตรอกไดอากอน','คอกนา','เชียงคาน','เชียงแสน','นครนายก','10650','\0\0\0\0\0\0\0�sCSY@�J?��6,@','https://randomuser.me/api/portraits/women/68.jpg','DOCTOR'),('user003','$2a$12$SCFTq8a4I1pgGfLM/vfYiOZFhhvxYI/PFW0oqNwKEaD7RpgUZBNv.','2021-11-21 15:38:31','2021-11-21 17:59:05','อลง','กด','7044827166479','a.kot@hotmail.com','2011-12-03','M','0867891354','30 เขาคิชกูด','รัชดา','เชียงคาน','เชียงแสน','นครราชศรีมา','20680','\0\0\0\0\0\0\0Z��U�{Y@?74e��-@','https://randomuser.me/api/portraits/men/4.jpg','PATIENT'),('user004','$2a$12$SCFTq8a4I1pgGfLM/vfYiOZFhhvxYI/PFW0oqNwKEaD7RpgUZBNv.','2021-11-21 15:38:31','2021-11-21 17:59:05','แพลงสตอน','ภิญญัง','2154679645127','plangstonzaza@outlook.com','1997-07-05','F','0643879215','16/19 หมู่บ้านลัดดาแลน','รามา9','เชียงคาน','เชียงแสน','ระยอง','97310','\0\0\0\0\0\0\0�Y2�\\Y@��wF[})@','https://randomuser.me/api/portraits/women/60.jpg','DOCTOR'),('user005','$2a$12$SCFTq8a4I1pgGfLM/vfYiOZFhhvxYI/PFW0oqNwKEaD7RpgUZBNv.','2021-11-21 15:38:31','2021-11-21 17:59:05','โนบิ','โนบิตะ','4473956317636','nobi.n@gmail.com','1993-04-13','F','0961388791','1/1 รัฐสภา','สามเสน','เชียงคาน','เชียงแสน','ชลบุรี','50550','\0\0\0\0\0\0\0��Y9Y@�F��1�)@','https://randomuser.me/api/portraits/men/38.jpg','PATIENT'),('user006','$2a$12$SCFTq8a4I1pgGfLM/vfYiOZFhhvxYI/PFW0oqNwKEaD7RpgUZBNv.','2021-11-21 15:38:31','2021-11-21 18:06:00','สุชาติ','สกอฟิลล์','6387538585288','suchart@hotmail.com','1999-09-05','M','0679136484','12','ข้าวเหนียว','เชียงคาน','เชียงแสน','กรุงเทพ','60660','\0\0\0\0\0\0\0&�(� Y@5\'/2+@','http://hris.parliament.go.th/manage/fileupload/pic_new_public/02bb68761eb1fdd2ab824a5267942fc1.jpg','DOCTOR'),('user007','$2a$12$SCFTq8a4I1pgGfLM/vfYiOZFhhvxYI/PFW0oqNwKEaD7RpgUZBNv.','2021-11-21 15:38:31','2021-11-21 17:59:05','ม๊ากกิ๊นส์','ภิโญ','9090413207301','makkkkkkkk2021@gmail.com','2004-11-30','F','0633497816','19 บางรักซอย 9','บรม','เชียงคาน','เชียงแสน','ย้าลา','70770','\0\0\0\0\0\0\0ݲC��PY@�dq��I\Z@','https://randomuser.me/api/portraits/men/75.jpg','DOCTOR'),('user008','$2a$12$SCFTq8a4I1pgGfLM/vfYiOZFhhvxYI/PFW0oqNwKEaD7RpgUZBNv.','2021-11-21 15:38:31','2021-11-21 17:59:05','ปลื้ม','ช้างดาว','1766852892842','pleumjibjib@hotmail.com','2000-12-01','M','0873159432','37/4','โอเล่','เชียงคาน','เชียงแสน','ปั๊ตต่านี่','12340','\0\0\0\0\0\0\0�]���NY@����XM@','https://randomuser.me/api/portraits/men/93.jpg','DOCTOR'),('user009','$2a$12$SCFTq8a4I1pgGfLM/vfYiOZFhhvxYI/PFW0oqNwKEaD7RpgUZBNv.','2021-11-21 15:38:31','2021-11-21 17:59:05','ต้อน','จ๊กม๊ก','4203242994061','jokmok@gmail.com','1991-02-05','M','0699763158','15/1 แฟล็ตรูหนู','โอรีโอ้','เชียงคาน','เชียงแสน','ชุมพร','19450','\0\0\0\0\0\0\0���:�X@���B�$@','https://randomuser.me/api/portraits/women/57.jpg','PATIENT'),('user010','$2a$12$SCFTq8a4I1pgGfLM/vfYiOZFhhvxYI/PFW0oqNwKEaD7RpgUZBNv.','2021-11-21 15:38:31','2021-11-21 17:59:05','ลิ','เชิญยิ้ม','6768502509716','li20002001@outlook.com','2001-12-06','F','0963118601','756','ข้าวสารโร๊ด','เชียงคาน','เชียงแสน','นิวยอร์ค','11340','\0\0\0\0\0\0\0>]ݱ�Y@mo�$�+@','https://randomuser.me/api/portraits/women/31.jpg','DOCTOR');
/*!40000 ALTER TABLE `CUSTOMER` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `DOCTOR`
--

DROP TABLE IF EXISTS `DOCTOR`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `DOCTOR` (
  `Username` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Medical_license` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Bank` varchar(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Account_no` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Total_patients` int(11) NOT NULL,
  `Avg_rating` decimal(2,1) DEFAULT NULL,
  `Price_min` decimal(10,2) DEFAULT NULL,
  `Price_max` decimal(10,2) DEFAULT NULL,
  `Price_avg` decimal(10,2) DEFAULT NULL,
  `Verified_by` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `Clinic_id` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  PRIMARY KEY (`Username`),
  UNIQUE KEY `Medical_license_UNIQUE` (`Medical_license`),
  KEY `DOCTOR_ADMIN` (`Verified_by`),
  KEY `DOCTOR_CLINIC` (`Clinic_id`),
  CONSTRAINT `DOCTOR_ADMIN` FOREIGN KEY (`Verified_by`) REFERENCES `ADMIN` (`Username`) ON UPDATE CASCADE,
  CONSTRAINT `DOCTOR_CLINIC` FOREIGN KEY (`Clinic_id`) REFERENCES `CLINIC` (`Clinic_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `DOCTOR_CUSTOMER` FOREIGN KEY (`Username`) REFERENCES `CUSTOMER` (`Username`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DOCTOR`
--

LOCK TABLES `DOCTOR` WRITE;
/*!40000 ALTER TABLE `DOCTOR` DISABLE KEYS */;
INSERT INTO `DOCTOR` VALUES ('user001','abc1234def','004','1234567890',11,3.2,50.00,1600.00,463.63,'admin001','clinic001'),('user002','abc1235def','004','1234567890',13,4.6,50.00,400.00,374.50,'admin001','clinic002'),('user004','abc1236def','004','1234567890',24,3.6,150.00,2400.00,943.70,'admin001','clinic003'),('user006','abc1237def','004','1234567890',37,4.7,100.00,1300.00,342.60,'admin001','clinic001'),('user007','abc1238def','004','1234567890',11,4.3,20.00,350.00,45.50,'admin001','clinic004'),('user008','abc1239def','004','1234567890',8,3.4,70.00,650.00,389.10,'admin001','clinic003'),('user010','abc1240def','004','1234567890',16,2.9,350.00,2500.00,2107.60,'admin001','clinic005');
/*!40000 ALTER TABLE `DOCTOR` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `DOCTOR_SPECIALTY`
--

DROP TABLE IF EXISTS `DOCTOR_SPECIALTY`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `DOCTOR_SPECIALTY` (
  `Username` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Specialty_id` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  PRIMARY KEY (`Username`,`Specialty_id`),
  KEY `DOCTOR_SPECIALTY_specialty_id` (`Specialty_id`),
  CONSTRAINT `DOCTOR_SPECIALTY_specialty_id` FOREIGN KEY (`Specialty_id`) REFERENCES `SPECIALTY` (`Specialty_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `DOCTOR_SPECIALTY_username` FOREIGN KEY (`Username`) REFERENCES `DOCTOR` (`Username`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DOCTOR_SPECIALTY`
--

LOCK TABLES `DOCTOR_SPECIALTY` WRITE;
/*!40000 ALTER TABLE `DOCTOR_SPECIALTY` DISABLE KEYS */;
INSERT INTO `DOCTOR_SPECIALTY` VALUES ('user004','1'),('user001','2'),('user002','2'),('user010','2'),('user007','3'),('user008','4'),('user006','5'),('user004','6');
/*!40000 ALTER TABLE `DOCTOR_SPECIALTY` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `IMAGE`
--

DROP TABLE IF EXISTS `IMAGE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `IMAGE` (
  `Chatroom_id` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Chat_id` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Send_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Image_path` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Sender` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  PRIMARY KEY (`Chatroom_id`),
  KEY `IMAGE_CUSTOMER` (`Sender`),
  CONSTRAINT `IMAGE_CHATROOM` FOREIGN KEY (`Chatroom_id`) REFERENCES `CHATROOM` (`Chatroom_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `IMAGE_CUSTOMER` FOREIGN KEY (`Sender`) REFERENCES `CUSTOMER` (`Username`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `IMAGE`
--

LOCK TABLES `IMAGE` WRITE;
/*!40000 ALTER TABLE `IMAGE` DISABLE KEYS */;
INSERT INTO `IMAGE` VALUES ('chatroom001','chat005','2021-11-22 10:15:17','https://ptp.or.th/wp-content/uploads/2020/05/%E0%B8%AA%E0%B8%B8%E0%B8%8A%E0%B8%B2%E0%B8%95%E0%B8%B4-%E0%B8%A0%E0%B8%B4%E0%B8%8D%E0%B9%82%E0%B8%8D-%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2.jpg','user003');
/*!40000 ALTER TABLE `IMAGE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PATIENT`
--

DROP TABLE IF EXISTS `PATIENT`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `PATIENT` (
  `Username` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Pan` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `Cardholder_name` varchar(90) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `Expire_date` date DEFAULT NULL,
  `Is_credit_card_approved` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`Username`),
  CONSTRAINT `PATIENT_CUSTOMER` FOREIGN KEY (`Username`) REFERENCES `CUSTOMER` (`Username`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PATIENT`
--

LOCK TABLES `PATIENT` WRITE;
/*!40000 ALTER TABLE `PATIENT` DISABLE KEYS */;
INSERT INTO `PATIENT` VALUES ('user003','1234567890123456','บุญชัย ลักษมี','2024-01-01',1),('user005','1234567890123456','บุญชัย ลักษมี','2024-01-01',1),('user009','1234567890123456','บุญชัย ลักษมี','2024-01-01',1);
/*!40000 ALTER TABLE `PATIENT` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PAYMENT`
--

DROP TABLE IF EXISTS `PAYMENT`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `PAYMENT` (
  `Payment_id` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Transaction_id` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `Amount` decimal(7,2) NOT NULL,
  `Status` tinyint(4) NOT NULL,
  `Consultation_id` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  PRIMARY KEY (`Payment_id`),
  KEY `PAYMENT_CONSULTATION` (`Consultation_id`),
  CONSTRAINT `PAYMENT_CONSULTATION` FOREIGN KEY (`Consultation_id`) REFERENCES `CONSULTATION` (`Consultation_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PAYMENT`
--

LOCK TABLES `PAYMENT` WRITE;
/*!40000 ALTER TABLE `PAYMENT` DISABLE KEYS */;
/*!40000 ALTER TABLE `PAYMENT` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `REQUEST`
--

DROP TABLE IF EXISTS `REQUEST`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `REQUEST` (
  `Request_id` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Message` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `Status` tinyint(4) NOT NULL DEFAULT '0',
  `Request_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Patient_username` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Doctor_username` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  PRIMARY KEY (`Request_id`),
  KEY `REQUEST_PATIENT` (`Patient_username`),
  KEY `REQUEST_DOCTOR` (`Doctor_username`),
  CONSTRAINT `REQUEST_DOCTOR` FOREIGN KEY (`Doctor_username`) REFERENCES `DOCTOR` (`Username`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `REQUEST_PATIENT` FOREIGN KEY (`Patient_username`) REFERENCES `PATIENT` (`Username`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `REQUEST`
--

LOCK TABLES `REQUEST` WRITE;
/*!40000 ALTER TABLE `REQUEST` DISABLE KEYS */;
INSERT INTO `REQUEST` VALUES ('07b85cb7-d782-4810-8a07-fb2973834c55','sadfasdfasdf',0,'2021-11-22 10:41:42','user003','user001'),('11e11724-5739-480e-a161-3660412e93dd','ASDFASDFASDF',2,'2021-11-21 21:01:39','user003','user001'),('24a8feff-de92-4ee1-b129-130d377e2b24','1',1,'2021-11-21 20:10:52','user003','user001'),('48143e5f-2ef8-41c0-af9b-ed6c8da165b1','2',2,'2021-11-21 20:20:02','user003','user001'),('6226c645-e7fe-4464-b13c-eeb02358be30','3',1,'2021-11-21 20:10:49','user003','user001'),('7719de51-aba9-42ad-8eac-c5fa036a8d68','asdf kljasdfjklasjdkf jkasdfjkl asdjklasdfljk',1,'2021-11-21 19:01:48','user003','user001'),('84b02e54-fbd7-4b20-a1d1-8b59cadc47ab','asdfasdfasdasdfasdfasdfasdf',0,'2021-11-22 10:31:37','user003','user006'),('9f807d4c-5950-4d2d-8551-2b2f62f3d3c1','4',1,'2021-11-21 20:29:29','user003','user001'),('a64626b8-4865-4ce8-9e9e-c32506b3338a','5',1,'2021-11-21 20:34:02','user003','user001'),('bd086c07-46bd-492d-91a2-2edf6d0cecd9','6',1,'2021-11-21 20:10:32','user003','user001'),('cf274aee-3a2a-4904-a1b0-1d37a08c7e4c','ASDFASDF',1,'2021-11-21 21:16:53','user003','user001'),('f2118e44-d95f-4f68-b337-5081d720ffba','7',0,'2021-11-21 20:55:23','user003','user001'),('ff0af9f4-c00d-47d7-841e-960252cc1f26','8',0,'2021-11-21 20:37:15','user003','user001');
/*!40000 ALTER TABLE `REQUEST` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `REQUEST_SYMPTOM`
--

DROP TABLE IF EXISTS `REQUEST_SYMPTOM`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `REQUEST_SYMPTOM` (
  `Request_id` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Symptom_id` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  PRIMARY KEY (`Request_id`,`Symptom_id`),
  KEY `REQUEST_SYMPTOM_symptom_id` (`Symptom_id`),
  CONSTRAINT `REQUEST_SYMPTOM_request_id` FOREIGN KEY (`Request_id`) REFERENCES `REQUEST` (`Request_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `REQUEST_SYMPTOM_symptom_id` FOREIGN KEY (`Symptom_id`) REFERENCES `SYMPTOM` (`Symptom_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `REQUEST_SYMPTOM`
--

LOCK TABLES `REQUEST_SYMPTOM` WRITE;
/*!40000 ALTER TABLE `REQUEST_SYMPTOM` DISABLE KEYS */;
/*!40000 ALTER TABLE `REQUEST_SYMPTOM` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `REVIEW`
--

DROP TABLE IF EXISTS `REVIEW`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `REVIEW` (
  `Review_id` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Message` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `Score` decimal(2,1) NOT NULL,
  `Created_time` datetime NOT NULL,
  `Consultation_id` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  PRIMARY KEY (`Review_id`),
  KEY `REVIEW_CONSULTATION` (`Consultation_id`),
  CONSTRAINT `REVIEW_CONSULTATION` FOREIGN KEY (`Consultation_id`) REFERENCES `CONSULTATION` (`Consultation_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `REVIEW`
--

LOCK TABLES `REVIEW` WRITE;
/*!40000 ALTER TABLE `REVIEW` DISABLE KEYS */;
/*!40000 ALTER TABLE `REVIEW` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SPECIALTY`
--

DROP TABLE IF EXISTS `SPECIALTY`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `SPECIALTY` (
  `Specialty_id` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Description` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  PRIMARY KEY (`Specialty_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SPECIALTY`
--

LOCK TABLES `SPECIALTY` WRITE;
/*!40000 ALTER TABLE `SPECIALTY` DISABLE KEYS */;
INSERT INTO `SPECIALTY` VALUES ('1','ผิวหนัง',NULL),('2','อายุรกรรม',NULL),('3','หัวใจ',NULL),('4','ประสาทวิทยา',NULL),('5','ทางเดินอาหาร',NULL),('6','กระดูก',NULL);
/*!40000 ALTER TABLE `SPECIALTY` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SPECIALTY_SYMPTOM`
--

DROP TABLE IF EXISTS `SPECIALTY_SYMPTOM`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `SPECIALTY_SYMPTOM` (
  `Specialty_id` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Symptom_id` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  PRIMARY KEY (`Specialty_id`,`Symptom_id`),
  KEY `SPECIALTY_SYMPTOM_symptom_id` (`Symptom_id`),
  CONSTRAINT `SPECIALTY_SYMPTOM_specialty_id` FOREIGN KEY (`Specialty_id`) REFERENCES `SPECIALTY` (`Specialty_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `SPECIALTY_SYMPTOM_symptom_id` FOREIGN KEY (`Symptom_id`) REFERENCES `SYMPTOM` (`Symptom_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SPECIALTY_SYMPTOM`
--

LOCK TABLES `SPECIALTY_SYMPTOM` WRITE;
/*!40000 ALTER TABLE `SPECIALTY_SYMPTOM` DISABLE KEYS */;
INSERT INTO `SPECIALTY_SYMPTOM` VALUES ('2','1'),('2','10'),('1','2'),('4','3'),('3','4'),('5','5'),('6','6'),('2','7'),('6','9');
/*!40000 ALTER TABLE `SPECIALTY_SYMPTOM` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SYMPTOM`
--

DROP TABLE IF EXISTS `SYMPTOM`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `SYMPTOM` (
  `Symptom_id` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Description` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  PRIMARY KEY (`Symptom_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SYMPTOM`
--

LOCK TABLES `SYMPTOM` WRITE;
/*!40000 ALTER TABLE `SYMPTOM` DISABLE KEYS */;
INSERT INTO `SYMPTOM` VALUES ('1','ปวดหัว ตัวร้อน',NULL),('10','ความดันสูง',NULL),('2','ผืวหนังอักเสบ',NULL),('3','วิตกกังวล',NULL),('4','โรคหัวใจ',NULL),('5','โรคกระเพาะ',NULL),('6','ข้อกระดูกอักเสบ',NULL),('7','ไมเกรน',NULL),('8','หมอนรองกระดูกอักเสบ',NULL),('9','เบาหวาน',NULL);
/*!40000 ALTER TABLE `SYMPTOM` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TEXT`
--

DROP TABLE IF EXISTS `TEXT`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TEXT` (
  `Chatroom_id` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Chat_id` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Send_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Message` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Sender` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  PRIMARY KEY (`Chatroom_id`,`Chat_id`),
  KEY `TEXT_CUSTOMER` (`Sender`),
  CONSTRAINT `TEXT_CHATROOM` FOREIGN KEY (`Chatroom_id`) REFERENCES `CHATROOM` (`Chatroom_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `TEXT_CUSTOMER` FOREIGN KEY (`Sender`) REFERENCES `CUSTOMER` (`Username`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TEXT`
--

LOCK TABLES `TEXT` WRITE;
/*!40000 ALTER TABLE `TEXT` DISABLE KEYS */;
INSERT INTO `TEXT` VALUES ('chatroom001','chat001','2021-11-22 10:09:01','ไอต้อนๆ','user003'),('chatroom001','chat002','2021-11-22 10:10:17','กูชื่อปลื้มลองโบ๋ ไม่ใช่ไอต้อน','user001'),('chatroom001','chat003','2021-11-22 10:13:39','เออๆ ไอปลื้มก้ได้','user003'),('chatroom001','chat004','2021-11-22 10:13:39','ว่า','user001'),('chatroom001','chat006','2021-11-22 10:15:36','เล่นพ่อตัวเองซะแล้ว','user001');
/*!40000 ALTER TABLE `TEXT` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `VIDEO_CALL`
--

DROP TABLE IF EXISTS `VIDEO_CALL`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `VIDEO_CALL` (
  `Chatroom_id` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Video_call_id` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Call_start_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Call_duration` int(11) NOT NULL,
  `Caller` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  PRIMARY KEY (`Chatroom_id`,`Video_call_id`),
  KEY `VIDEO_CALL_CUSTOMER` (`Caller`),
  CONSTRAINT `VIDEO_CALL_CHATROOM` FOREIGN KEY (`Chatroom_id`) REFERENCES `CHATROOM` (`Chatroom_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `VIDEO_CALL_CUSTOMER` FOREIGN KEY (`Caller`) REFERENCES `CUSTOMER` (`Username`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `VIDEO_CALL`
--

LOCK TABLES `VIDEO_CALL` WRITE;
/*!40000 ALTER TABLE `VIDEO_CALL` DISABLE KEYS */;
INSERT INTO `VIDEO_CALL` VALUES ('chatroom001','video001','2021-11-22 10:16:26',2,'user003'),('chatroom001','video002','2021-11-22 10:16:26',5,'user001');
/*!40000 ALTER TABLE `VIDEO_CALL` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`%`*/ /*!50003 TRIGGER `VIDEO_CALL_AFTER_INSERT` AFTER INSERT ON `VIDEO_CALL` FOR EACH ROW BEGIN
	DECLARE num INT;
    DECLARE duration INT;
	SELECT Call_count, Call_minutes
	INTO num, duration
	FROM CHATROOM;
	SET duration = duration + New.Call_duration;
	SET num = num + 1;
	UPDATE CHATROOM cr
	SET cr.Call_count = num, cr.Call_minutes = duration
	WHERE cr.Chatroom_id = New.Chatroom_id;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `WORKTIME`
--

DROP TABLE IF EXISTS `WORKTIME`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `WORKTIME` (
  `Username` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Day` tinyint(4) NOT NULL,
  `Start_time` time NOT NULL,
  `End_time` time NOT NULL,
  PRIMARY KEY (`Username`,`Day`,`Start_time`,`End_time`),
  KEY `WORKTIME_index` (`Day`,`Start_time`) USING BTREE,
  CONSTRAINT `DOCTOR_WORKTIME` FOREIGN KEY (`Username`) REFERENCES `DOCTOR` (`Username`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `WORKTIME`
--

LOCK TABLES `WORKTIME` WRITE;
/*!40000 ALTER TABLE `WORKTIME` DISABLE KEYS */;
INSERT INTO `WORKTIME` VALUES ('user008',0,'08:30:00','17:30:00'),('user010',0,'08:30:00','17:30:00'),('user002',0,'10:00:00','19:00:00'),('user004',0,'10:30:00','15:00:00'),('user001',1,'08:30:00','17:30:00'),('user007',1,'08:30:00','17:30:00'),('user006',2,'08:00:00','12:30:00'),('user007',2,'08:30:00','17:30:00'),('user008',2,'08:30:00','17:30:00'),('user004',2,'09:30:00','22:00:00'),('user001',2,'10:00:00','18:00:00'),('user002',2,'10:00:00','19:00:00'),('user006',2,'19:00:00','21:30:00'),('user001',3,'07:00:00','10:30:00'),('user007',3,'08:30:00','17:30:00'),('user008',3,'08:30:00','17:30:00'),('user004',3,'09:30:00','22:00:00'),('user002',3,'10:00:00','19:00:00'),('user001',3,'17:00:00','23:00:00'),('user006',4,'08:00:00','21:30:00'),('user007',4,'08:30:00','17:30:00'),('user010',4,'08:30:00','17:30:00'),('user004',4,'09:30:00','22:00:00'),('user002',4,'14:00:00','21:00:00'),('user006',5,'08:00:00','21:30:00'),('user001',5,'08:30:00','17:30:00'),('user007',5,'08:30:00','17:30:00'),('user010',6,'08:30:00','17:30:00'),('user004',6,'12:30:00','18:00:00');
/*!40000 ALTER TABLE `WORKTIME` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'medmyday'
--
/*!50003 DROP FUNCTION IF EXISTS `CalcLikeScore` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` FUNCTION `CalcLikeScore`(keywords VARCHAR(450), doctor_firstname VARCHAR(90), doctor_lastname VARCHAR(90), specialty_name VARCHAR(45), symptom_name VARCHAR(45), clinic_name VARCHAR(90)) RETURNS decimal(5,2)
    DETERMINISTIC
BEGIN
	DECLARE _next TEXT DEFAULT NULL;
	DECLARE _nextlen INT DEFAULT NULL;
	DECLARE word TEXT DEFAULT NULL;
    DECLARE score DECIMAL(5,2);
	DECLARE boost INT;
	SET score = 0.00;
    
    iter:
    LOOP
		IF CHAR_LENGTH(TRIM(keywords)) = 0 OR keywords IS NULL THEN
			LEAVE iter;
		END IF;
        SET _next = SUBSTRING_INDEX(keywords, ' ', 1);
        SET _nextlen = CHAR_LENGTH(_next);
        SET word = TRIM(_next);
        
		SET boost = LENGTH(word);
		SET word = CONCAT('%', word, '%');
		IF doctor_firstname LIKE word OR doctor_lastname LIKE word THEN
			SET score = score + boost * 5;
		END IF;
		IF specialty_name LIKE word THEN
			SET score = score + boost * 1;
		END IF;
		IF symptom_name LIKE word THEN
			SET score = score + boost * 8;
		END IF;
		IF clinic_name LIKE word THEN
			SET score = score + boost * 2;
		END IF;
        
        SET keywords = INSERT(keywords, 1, _nextlen + 1, '');
	END LOOP;
	RETURN score;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `IsOnline` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` FUNCTION `IsOnline`(doctor_username VARCHAR(45), cur_day TINYINT, cur_time TIME) RETURNS tinyint(4)
    READS SQL DATA
BEGIN
	RETURN EXISTS(
		SELECT 1
        FROM WORKTIME wt
        WHERE wt.Username = doctor_username
			AND wt.`Day` = cur_day
            AND (cur_time BETWEEN wt.Start_time AND wt.End_time)
	);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreateDoctor` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `CreateDoctor`(username VARCHAR(45), password VARCHAR(90), firstname VARCHAR(90), lastname VARCHAR(90), ssn VARCHAR(13), email VARCHAR(90), birthdate DATE, gender VARCHAR(1), phone_no VARCHAR(10), address_text VARCHAR(180), street VARCHAR(100), subdistrict VARCHAR(45), district VARCHAR(45), province VARCHAR(45), postal_code VARCHAR(5), coordinate_long DECIMAL(9,6), coordinate_lat DECIMAL(9,6), medical_license VARCHAR(10), bank VARCHAR(3), account_no VARCHAR(20))
BEGIN
	START TRANSACTION;
	INSERT INTO medmyday.CUSTOMER
	(Username, Password, Created_time, Updated_time, Firstname, Lastname, Ssn, Email, Birthdate, Gender, Phone_no, Address_text, Street, Subdistrict, District, Province, Postal_code, Coordinate, Img_path, `Type`)
	VALUES(username, password, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, firstname, lastname, ssn, email, birthdate, gender, phone_no, address_text, street, subdistrict, district, province, postal_code, POINT(coordinate_long, coordinate_lat), NULL, 'DOCTOR');
    INSERT INTO medmyday.DOCTOR
	(Username, Medical_license, Bank, Account_no, Total_patients, Avg_rating, Price_min, Price_max, Price_avg, Verified_by, Clinic_id)
	VALUES(username, medical_license, bank, account_no, 0, NULL, NULL, NULL, NULL, NULL, NULL);
    COMMIT;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SearchDoctors` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `SearchDoctors`(keywords VARCHAR(450), cur_time DATETIME, cur_pos_long DECIMAL(9,6), cur_pos_lat DECIMAL(9,6), enable_isonline BOOLEAN, enable_distance BOOLEAN, query_limit INT, query_offset INT)
BEGIN
	DECLARE cur_pos POINT;
	SET cur_pos = POINT(cur_pos_long, cur_pos_lat);
	SELECT *, ST_DISTANCE_SPHERE(cur_pos, t.Coordinate) Distance, IsOnline(t.Username, DAYOFWEEK(cur_time) - 1, TIME(cur_time)) Current_online
	FROM (
		SELECT d.Username, c.Firstname, c.Lastname, c.Coordinate, c.Img_path,
			d.Total_patients, d.Avg_rating, d.Price_min, d.Price_max, d.Price_avg,
			MAX(CalcLikeScore(keywords, c.Firstname, c.Lastname, sp.Name, st.Name, cn.Clinic_name)) Score
		FROM CUSTOMER c
		NATURAL JOIN DOCTOR d
		JOIN CLINIC cn ON d.Clinic_id = cn.Clinic_id
		JOIN DOCTOR_SPECIALTY dsp ON d.Username = dsp.Username
		JOIN SPECIALTY sp ON dsp.Specialty_id = sp.Specialty_id
		JOIN SPECIALTY_SYMPTOM spst ON sp.Specialty_id = spst.Specialty_id
		JOIN SYMPTOM st ON spst.Symptom_id = st.Symptom_id
		GROUP BY d.Username
	) t
	HAVING Current_online >= enable_isonline
	ORDER BY Score - (enable_distance * Distance / 300) DESC
	LIMIT query_limit OFFSET query_offset;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SearchDoctorsIncludeSpecialties` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `SearchDoctorsIncludeSpecialties`(keywords VARCHAR(450), cur_time DATETIME, cur_pos_long DECIMAL(9,6), cur_pos_lat DECIMAL(9,6), enable_isonline BOOLEAN, enable_distance BOOLEAN)
BEGIN
	DECLARE cur_pos POINT;
	SET cur_pos = POINT(cur_pos_long, cur_pos_lat);
    SELECT tt.Username, tt.Firstname, tt.Lastname, tt.Coordinate, tt.Img_path, tt.Clinic_name, tt.Total_patients, tt.Avg_rating, tt.Price_min, tt.Price_max, tt.Price_avg, sp2.Name
    FROM (
		SELECT *, ST_DISTANCE_SPHERE(cur_pos, t.Coordinate) Distance, IsOnline(t.Username, DAYOFWEEK(cur_time) - 1, TIME(cur_time)) Current_online
		FROM (
			SELECT d.Username, c.Firstname, c.Lastname, c.Coordinate, c.Img_path, cn.Clinic_name,
				d.Total_patients, d.Avg_rating, d.Price_min, d.Price_max, d.Price_avg,
				MAX(CalcLikeScore(keywords, c.Firstname, c.Lastname, sp.Name, st.Name, cn.Clinic_name)) Score
			FROM CUSTOMER c
			NATURAL JOIN DOCTOR d
			JOIN CLINIC cn ON d.Clinic_id = cn.Clinic_id
			JOIN DOCTOR_SPECIALTY dsp ON d.Username = dsp.Username
			JOIN SPECIALTY sp ON dsp.Specialty_id = sp.Specialty_id
			JOIN SPECIALTY_SYMPTOM spst ON sp.Specialty_id = spst.Specialty_id
			JOIN SYMPTOM st ON spst.Symptom_id = st.Symptom_id
			GROUP BY d.Username
		) t
		HAVING Current_online >= enable_isonline
	) tt
    JOIN DOCTOR_SPECIALTY dsp2 ON dsp2.Username = tt.Username
    JOIN SPECIALTY sp2 ON dsp2.Specialty_id = sp2.Specialty_id
	ORDER BY tt.Score - (enable_distance * tt.Distance / 300) DESC;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-22 18:20:06
