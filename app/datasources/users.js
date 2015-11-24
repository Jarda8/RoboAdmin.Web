define(["jquery", "kendo"], function($) {
	return new kendo.data.DataSource({
	    data: [
	    	{ jmeno: "Vít", prijmeni: "Heřman" },
	    	{ jmeno: "Petr", prijmeni: "Novák" },
	    	{ jmeno: "Richard", prijmeni: "Dick" }
	    ]
	});
});