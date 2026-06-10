create database empresa;
use empresa;

create table colaboradores (
    id int auto_increment primary key,
    nome_completo varchar (100) not null,
    idade int not null,
    cargo varchar(100) not null,
    salario decimal(10,2) not null,
    tempo_empresa int,
    data_admissao date,
    setor varchar (100),
    status enum ('Ativo','Inativo')
);

INSERT INTO colaboradores
(nome_completo, idade, cargo, salario, tempo_empresa, data_admissao, setor, status)
VALUES
('Trícia Britto',28,'Psicologa',9500,3,'2023-01-10','Saúde Ocupacional','Ativo'),
('Guilherme Nunes',35,'Gerente Comercial',8500,7,'2019-05-15','Comercial','Ativo'),
('Davi Ribeiro',24,'Assistente Administrativo',2800,1,'2025-02-03','Administrativo','Ativo'),
('Daniel Lima',42,'Supervisor de Produção',6200,10,'2016-08-20','Produção','Ativo'),
('João Gabriel',31,'Analista RH',4200,4,'2022-03-11','RH','Ativo'),
('Ariel Vinnycius',29,'Desenvolvedor',5500,2,'2024-01-15','TI','Ativo'),
('Bruna Costa',38,'Coordenadora Marketing',7000,6,'2020-06-18','Marketing','Ativo'),
('Rodrigo Batista',45,'Diretor Operacional',10000,12,'2014-09-25','Operações','Ativo'),
('Mariana Alves',26,'Auxiliar Financeira',2500,1,'2025-01-20','Financeiro','Ativo'),
('Bruno Rocha',33,'Técnico Suporte',3800,5,'2021-04-07','TI','Inativo');
