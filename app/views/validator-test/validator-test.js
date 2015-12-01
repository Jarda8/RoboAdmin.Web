define(["kendo"], function () {
    return new kendo.View(
            "validator-test",
            {
                init: function (e) {
                    $("#myform").kendoValidator({
                        messages: {
                            // defines a message for the 'custom' validation rule
                            custom: "Please enter valid value for my custom rule",
                            // overrides the built-in message for the required rule
                            required: "My custom required message",
                            // overrides the built-in message for the email rule
                            // with a custom function that returns the actual message
                            email: function (input) {
                                return getMessage(input);
                            }
                        },
                        rules: {
                            custom: function (input) {
                                if (input.is("[name=username]")) {
                                    return input.val() === "Tom";
                                }
                                return true;
                            }
                        }
                    });

                    function getMessage(input) {
                        return input.data("message");
                    }

                }
            }
    );
});

