exports.createAgent = (req, res) => {
  const agent = new Agent(req.body);
  agent.save(err => {
    if (err) throw err;
	// in post.save()
	if (err) {
	  const errorArray = [];
	  const errorKeys = Object.keys(err.errors);
	  errorKeys.forEach(key => errorArray.push(err.errors[key].message));
	  return res.render("create-agent", {
	    errors: errorArray
	  });
	}
    res.redirect("/blog");
  });
};
