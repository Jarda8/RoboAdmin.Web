﻿define(["jquery", "views/settings/settings-filter-data", "app/router", "kendo"], function ($, data, router) {
    return function (id){
    return new kendo.View(
            "settings-filter-udalost",
            {                
                evalTemplate: true,      
                model: {
                    datas: data,
                    ids:id
                },
                init: function (e) {                                        
                    var currentId = data.length;
                    
                    var validator = $("#filter-modify").kendoValidator().data("kendoValidator");
                    
                    $("#addfilter").click(function (e) {
                        e.preventDefault();
                        if (validator.validate()) {

                            var j = 0;
                            for (var  i = 0; i< data.length; i++) {if (data[i].id == id) {j = i;  break; }}
                            var $filterName = $("input[name='filter-name']");
                            var $typ = $("select[name='typ-drop']");
                            var $email = $("input[name='filter-email']");
                            var $priority = $("select[name='priority']");
                            var $source = $("select[name='source']");
                            var $server = $("select[name='server']");
                            var $customer = $("select[name='customer']");

                            data.splice(j,1,{
                                id: id,
                                name: $filterName.val(),
                                type: $typ.val(),
                                email: $email.val(),
                                active: true,
                                priority: $priority.val(),
                                source: $source.val(),
                                server: $server.val(),
                                customer: $customer.val()                            
                            });

    //                       
                            router.navigate("#settings");
                            var $alert = $("#alert");
                            $alert.html("<div class='alert alert-success alert-dismissible'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button>\n\
                                            <h4><i class='icon fa fa-check'></i> Server byl úspěšně uložen!</h4></div>");
                        }
                    });
                }
            }
    );
    }});