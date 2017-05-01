import Jasmine from 'jasmine'

var jasmine = new Jasmine()
jasmine.loadConfig({
	spec_dir: "./client",
	spec_files: ["**/__tests/*.js"]
});
jasmine.execute();