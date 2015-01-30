exports.viewProject = function(req, res){
	// controller code goes here 
	var name = req.params.name; 
	console.log("The project name is: " + name); 
	// Load a file called 'project.handlebars'
	res.render('project', {
		'projectName': name
	}); 
}; 