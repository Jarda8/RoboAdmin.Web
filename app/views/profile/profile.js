define(["jquery", "ds/session", "kendo"], function($, dsSession) {
	return function(action) {

		var notification, changePasswordVal, changeEmailVal;

		function _showChangeEmailModal (e) {
			changeEmailVal = $("#change-email-form").kendoValidator({
			messages: {
				required: "Pole je povinné",
				email: "Nesprávný formát e-mailu"
			}
		}).data("kendoValidator");
			changeEmailVal.hideMessages();
			$("#form-email").val($("#profile-email").text());
			$("#change-email-modal").modal('show');
		}

		function _showChangePasswordModal (e) {
			changePasswordVal = $("#change-password-form").kendoValidator({
				rules: {
					oldpassword: function(input) {
						if (input.is("[name=form-old-password]")) {
							return _verifyPassword(input.val());
						}
						return true;
					},
					samepasswords: function(input) {
						if (input.is("[name=form-new-password]") || input.is("[name=form-new-password-again]")) {
							return $("#form-new-password").val() === $("#form-new-password-again").val();
						}
						return true;
					}
				},
				messages: {
					required: "Pole je povinné",
					samepasswords: "Hesla se neschodují",
					oldpassword: "Staré heslo není správné",
				},
				validateOnBlur: false
			}).data("kendoValidator");
			changePasswordVal.hideMessages();
			$("#change-password-form").find("input, textarea").val("");
			$("#change-password-modal").modal('show');
		}

		function _verifyPassword(password) {
			// TODO: call service
			console.log("old-password: " + password);
			return password === "123";
		}

		return new kendo.View(
			"profile",
			{
				init: function(e) {
					notification = $("#notification").kendoNotification({
						appendTo: "#notification"
					}).data("kendoNotification");

					switch (action) {
						case 'change-email':
							_showChangeEmailModal();
							break;
						case 'change-password':
							_showChangePasswordModal();
							break;
					}
				},
				model: kendo.observable({
					user: {
						fullName: function () {
							return dsSession.user.firstName + ' ' + dsSession.user.lastName;
						},
						email: dsSession.user.email,
						company: dsSession.user.company,
						username: dsSession.user.username,
					},
					showChangePasswordModal: _showChangePasswordModal,
					showChangeEmailModal: _showChangeEmailModal,
					saveChangedEmail: function (e) {
						e.preventDefault();
						if (changeEmailVal.validate()) {
							var email = $("#form-email").val();
							console.log(email);
							$("#profile-email").text(email);
							// TODO: Save password to database
							$("#change-email-modal").modal('hide');


							notification.show("E-mail byl změněn na '"+email+"'" , "success");
						}
					},
					saveChangedPassword: function (e) {
						e.preventDefault();
						if (changePasswordVal.validate()) {
							// TODO: Save password to database
							$("#change-password-modal").modal('hide');

							notification.show("Heslo bylo změněno" , "success");
						}
					}
				})
			}
		);
	}
});