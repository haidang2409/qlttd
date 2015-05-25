select mamucdich, mucdich, YEAR(ngaylap) as nam, MONTH(ngaylap) as thang, sum(chisothucthu), tennhom
from congtodien, hoadon, mucdichsudung, nhommucdichsd
where congtodien.macongto = hoadon.macongto
and congtodien.mamucdich = mucdichsudung.mamucdich
AND nhommucdichsd.manhommdsd = mucdichsudung.manhommdsd AND chisomoi > chisocu
group by mucdich, nam, thang, tennhom order by thang
-----
