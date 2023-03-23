insert into estados (id, nome, sigla, regiao, populacao)
value (1000, 'Novo', 'NV', 'Sul', 2.54)

select * from estados

--caso nao coloque o id, o proximo elemento é inserido a partir do ultimo elemento !
insert into estados (nome, sigla, regiao, populacao)
value ('Mais Novo', 'MN', 'Norte', 2.51)


select * from estados
