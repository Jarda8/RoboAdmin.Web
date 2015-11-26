define(["kendo"], function() {
	return new kendo.View(
		"profile",
		{
			model:
				kendo.observable({
					showChangePasswordModal: function (e) {
						$("#change-password-modal").modal('show') ;
					},
					showChangeEmailModal: function (e) {
						$("#change-email-modal").modal('show') ;
					},
					saveChangedEmail: function (e) {
						e.preventDefault();

						var validator = $("#change-email-from").kendoValidator();
						if (validator.validate()) {
							var email = $("#change-email-modal #form-change-email").val();
							console.log("TODO: change Email to: " + email);

							$("#change-email-modal").modal('hide');
						} else {
							// nothing
						}
					},
					saveChangedPassword: function (e) {
						console.log("TODO: change Email");
					},
				})
		}
	);
});