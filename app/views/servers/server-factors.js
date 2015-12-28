define(["views/servers/server-detail-data", "kendo"], function (data) {
    return function (id) {
        return new kendo.View(
                "server-factors",
                {
                    model: data,
                    evalTemplate: true,
                    init: function (e) {
                        $("#add-factor-form button").click(function (e) {
                            e.preventDefault();
                            var $select = $("#add-factor-form select");
                            var $index = $select.val();
                            data.factors_presented.push(data.other_factors[$index]);
                            data.other_factors.splice($index, 1);
                            var $form = $("#add-factor-form div");
                            $form.empty();
                            $form.append("<select data-role='dropdownlist' class='form-control'>");
                            var $newSelect = $("#add-factor-form select");
                            for (var i = 0; i < data.other_factors.length; i++) {
                                $newSelect.append("<option value='" + i + "'>" + data.other_factors[i] + "</option>");
                            }
                        });
                        
                        $("#add-factor-btn").click(function(e){
                            e.preventDefault();
                            var $input = $("input[name='new-factor']");
                            data.other_factors.push($input.val());
                            $input.val("");
                            var $form = $("#add-factor-form div");
                            $form.empty();
                            $form.append("<select data-role='dropdownlist' class='form-control'>");
                            var $newSelect = $("#add-factor-form select");
                            for (var i = 0; i < data.other_factors.length; i++) {
                                $newSelect.append("<option value='" + i + "'>" + data.other_factors[i] + "</option>");
                            }
                        });
                    }
                }
        );
    };
});

