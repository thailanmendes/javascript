select 
    regiao as 'siglas',
    sum(populacao) as Total   -- sum = soma.. somando a populacao das regioes!
from estados
group by regiao
order by Total desc  -- colocando o total para aparecer em ordem decrecente!

select 
    sum(populacao) as Total  
from `estados`

select
    avg(populacao) as Total  --avg = á media!
from estados

