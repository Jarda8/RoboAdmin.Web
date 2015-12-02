define(["jquery", "kendo"], function($) {
	var User = kendo.data.Model.define({
		id: "username",
		fields: {
			firstName: {
				type: "string",
				validation: { required: true },
				defaultValue: "<empty>"
			},
			lastName: {
				type: "string",
				validation: { required: true },
				defaultValue: "<empty>"
			},
			email: {
				type: "string",
				validation: { required: true },
				defaultValue: "<empty>"
			},
			company: {
				type: "string",
				validation: { required: true },
				defaultValue: "<empty>"
			},
			username: {
				type: "string",
				validation: { required: true },
				editable: false,
				nullable: true
			}
		}
	});

	return {
		user: new User ({
			firstName: "Vít",
			lastName: "Heřman",
			email: "vit.herman@company.com",
			company: "Company a.s.",
			username: "hermanvit"
		})
	};


});