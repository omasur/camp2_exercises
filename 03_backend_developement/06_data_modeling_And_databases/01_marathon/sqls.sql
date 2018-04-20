select *
from race
where race_name='New York City Marathon - Women' and race_date='2017-11-05';

select runner_name
from race
where race_name='New York City Marathon - Men' and race_date='2017-11-05'
limit 3;

select runner_name, runner_racingtime, runner_bib
from race
where runner_racingtime<'02:30:00' and runner_bib>100;

select runner_name, runner_racingtime, runner_bib
from race
where (runner_racingtime<'02:15:00' and runner_bib>100)
or (runner_racingtime<'02:30:00' and runner_bib<=100)
order by runner_bib, runner_racingtime asc;

select runner_bib, runner_name, final_position
from race
where runner_racingtime<(select runner_racingtime from race where runner_name='Koen Naert')
order by runner_racingtime desc;
