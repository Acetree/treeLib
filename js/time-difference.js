

JS时间（日期）比较或相减  
2010-12-13 13:54:59 JS应用 订阅

 注：此文均来自网上，可行，只供参考
//JAVASCRIPT中 日期相减很麻烦 ,现在有现成的实现方法,拷贝过去就可以用了,方便
//调用该方法(主方法) 
function dateDiff(date1, date2){ 
    var type1 = typeof date1, type2 = typeof date2; 
    if(type1 == 'string') 
    date1 = stringToTime(date1); 
    else if(date1.getTime) 
    date1 = date1.getTime(); 
    if(type2 == 'string') 
    date2 = stringToTime(date2); 
    else if(date2.getTime) 
    date2 = date2.getTime(); 
    return (date1 - date2) / 1000;//结果是秒 
}
//字符串转成Time(dateDiff)所需方法 
function stringToTime(string){ 
    var f = string.split(' ', 2); 
    var d = (f[0] ? f[0] : '').split('-', 3); 
    var t = (f[1] ? f[1] : '').split(':', 3); 
    return (new Date( 
    parseInt(d[0], 10) || null, 
    (parseInt(d[1], 10) || 1)-1, 
    parseInt(d[2], 10) || null, 
    parseInt(t[0], 10) || null, 
    parseInt(t[1], 10) || null, 
    parseInt(t[2], 10) || null 
    )).getTime(); 
//调用 dateDiff("2009-10-10 19:00:00","2009-10-10 18:00:00")
返回的是秒钟
Get days and other datetimediffrence two datetime date1 :更早的日期 小的日期 date2 :后面的日期 大的日期  返回两个时间差的天数小时数分数秒数和毫秒数function DiffLong(datestr1, datestr2) {

date1 Date(Date.parse(datestr1.replace( date2 Date(Date.parse(datestr2.replace( datetimeTemp;
    isLater (date1.getTime() date2.getTime()) {
        isLater false;
        datetimeTemp date1;
        date1 date2;
        date2 datetimeTemp;
    }

difference date2.getTime() date1.getTime();
    thisdays Math.floor(difference ));

difference difference thisdays );
    thishours Math.floor(difference strRet thisdays thishours return strRet;
}
