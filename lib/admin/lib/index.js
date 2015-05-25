var express = require('express');
var app = module.exports = express();
var process = require('./test');

app.set('views', __dirname);
app.set('view engine', 'ejs');

app.get('/admin/test', function(req, res){
	process.getNgay(req, function(data){

	});
	//res.render('test.ejs');
});
global.getDate = function(strDate)
{
	var date = new Date(strDate);
	var str = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
	return str;
};
global.getDateRes = function(strDate)
{
	var date = new Date(strDate);
	var str = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
	return str;
};
global.replaceNoiDung = function(strNoiDung,strFind, strReplace){
	var re = new RegExp(strFind, 'gi');
	var strResult;
	strResult = strNoiDung.replace(re, strReplace);
	return strResult;
};
global.format_number =function(pnumber,decimals)
{
    if (isNaN(pnumber)) { return 0};
    if (pnumber=='') { return 0};
    var snum = new String(pnumber);
    var sec = snum.split('.');
    var whole = parseFloat(sec[0]);
    var result = '';
    
    if(sec.length > 1){
        var dec = new String(sec[1]);
        dec = String(parseFloat(sec[1])/Math.pow(10,(dec.length - decimals)));
        dec = String(whole + Math.round(parseFloat(dec))/Math.pow(10,decimals));
        var dot = dec.indexOf('.');
        if(dot == -1){
            dec += '.'; 
            dot = dec.indexOf('.');
        }
        while(dec.length <= dot + decimals) { dec += '0'; }
        result = dec;
    } else{
        var dot;
        var dec = new String(whole);
        if(decimals){
            dec += '.';
            dot = dec.indexOf('.');        
            while(dec.length <= dot + decimals) { dec += '0'; }
        }
        result = dec;
    }
    return result;
};
global.format1 = function(n, currency) {
    return currency + " " + n.toFixed(2).replace(/./g, function(c, i, a) {
        return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
    });
};

global.format2 = function (n, currency) {
    return currency + " " + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
};