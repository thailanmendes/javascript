select * from prefeitos;
select * from cidades;

select * from cidades c inner join prefeitos p on c.id = p.cidade_id;
select * from cidades c left outer join prefeitos p on c.id = p.cidade_id;
select * from cidades c right join prefeitos p on c.id = p.cidade_id;
-- select * from cidades c full join prefeitos p on c.id = p.cidade_id;



select * from cidades c left outer join prefeitos p on c.id = p.cidade_id
union
select * from cidades c right join prefeitos p on c.id = p.cidade_id;
--full join nao é suportado no my sql, no entanto é só fazer o union do left com o right