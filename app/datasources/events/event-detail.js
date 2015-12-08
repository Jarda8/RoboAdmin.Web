define(["jquery", "kendo"], function($) {
	return new kendo.data.DataSource({
            //autoSync: true,
	    data: {
                        "id": "12135120",
                        "occurences": "1332",
                        "date_time": "2015-07-08 12:52:54",
                        "server_name": "VINSBS.v-invest.local",
                        "source": "MsiInstaller",
                        "event_id": "1015",
                        "priority": "nízká",
                        "state": false,
                        "level": "Upozornění",
                        "log": "Application",
                        "customer": "VINVEST",
                        "active_servers": [
                            {
                                server_name: "Server1",
                                occurences1: 5,
                                occurences7: 8,
                                occurences30: 8,
                                restart: 3
                            },
                            {
                                server_name: "Server2",
                                occurences1: 1,
                                occurences7: 2,
                                occurences30: 3,
                                restart: 4
                            }],
                        "solved_servers": [
                            {
                                server_name: "Server3"
                            }],
                        "oss": ["SBS2008", "ESS2012R2"],
                        "factors": ["DNS server", "DHCP server", "ESET"],
                        "email": "nejakej@email.cz",
                        "original_description": "Platnost žádosti vypršela, protože server neodpověděl. Název serveru: Server1 ID relace:0x0 ID stromu:0x0 ID zprávy:0x0 Příkaz: Negotiate Pokyny: Server odpovídá přes protokol TCP, nikoli SMB. Zajistěte, aby serverová služba byla spuštěna a reagovala a aby disky neměly vysokou vstupně-výstupní latenci, což může způsobit, že se budou pro protokol SMB jevit jako nereagující. Rovněž ověřte, že server celkově reaguje a není pozastaven, například zkontrolujte, že se na něho můžete přihlásit.",
                        "custom_description": "Chyba nasane vždy, když se spustí DNS server. Nemá vážnější následky.",
                        "solution": "Vypnout a zapnout."
                    }
	});
});
