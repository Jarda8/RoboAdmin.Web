define(["kendo"], function () {
    return new kendo.observable({
        "bad_services": ["RemoteRegisters", "jinasluzba"],
        "ignored_services": ["ShellHWDetection"],
        "factors_presented": ["Norton"],
        "other_factors" : ["Avast", "VirtualBox", "ESET"],
        "ping_limit" : 12
    });
});
