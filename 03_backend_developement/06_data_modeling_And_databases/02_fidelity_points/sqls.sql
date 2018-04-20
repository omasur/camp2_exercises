select * from purchases
order by purchase_date asc
limit 3;


select * from purchases
where client_name not in (select client_name from purchases where purchase_date>'2017-10-31');

--test
select * from purchases
where client_name not in (select client_name from purchases where purchase_date>timestamp '2017-12-31' - interval '2 months');


select * from purchases
where client_name not in (select client_name from purchases where purchase_date>timestamp '2017-12-31' - interval '1 months')
and  number_of_items>3;

select * from purchases
order by euros_spent desc
limit 1;

select sum(euros_spent) turnover from purchases
where purchase_date between '2017-07-01' and '2017-08-31';
