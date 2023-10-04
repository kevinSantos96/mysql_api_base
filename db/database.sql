CREATE DATABASE IF NOT EXISTS projectbasedb;

USE projectbasedb;

create table tbl_Empleados(
Id  int(10) primary key auto_increment not null,
Nombres varchar(150),
Apellidos varchar(150),
Fecha datetime,
Genero char(1),
Telefono varchar(8),
Correo varchar(50),
Estado bit
);

