/*------------------------------------------------------
You might seeing this module First,

In every module you create, express and any other
dipendencies, you can register below 
( it depends on you requirements for each module)

For example in this Login I need a hash for Password encript
then i load the hass
---------------------------------------------------------*/


var express = require('express');
var app = module.exports = express();


app.set('views',__dirname);
app.set('view engine','ejs');

app.get('/e',function(req,res){
	res.render('ckeditor-upload.ejs',{error_login:''});
});

app.post('/upload',function(req, res){
	fs.readFile(req.files.upload.path, function(err, data){
		var imageName = req.files.path.name;
		if(!imageName)
			{
			res.end();
			}
		else
			{
			var newPath = __dirname + "../../../../public/uploads/" + imageName;
			fs.writeFile(newPath, data, function(err){
				var html;
				if (err) {
				console.log(err);
				return;
				}
				html = "";
				html += "<script type='text/javascript'>";
				html += " var funcNum = " + req.query.CKEditorFuncNum + ";";
				html += " var url = \"/uploads/" + imageName +"\";";
				html += " var message = \"Uploaded file successfully\";";
				html += "";
				html += " window.parent.CKEDITOR.tools.callFunction(funcNum, url, message);";
				html += "</script>";
				res.send(html);
			});
			}
	});
});

