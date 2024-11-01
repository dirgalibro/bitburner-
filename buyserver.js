/** @param {NS} ns **/
export async function main(ns) {
    const serverName = "myServer5"; // Nama server yang ingin dibeli
    const ramSize = 500; // Ukuran RAM server yang ingin dibeli

    // Cek apakah server dengan nama yang sama sudah ada
    if (ns.serverExists(serverName)) {
        ns.tprint(`Server dengan nama "${serverName}" sudah ada.`);
        return;
    }

    // Cek jumlah uang yang tersedia
    const cost = ns.getPurchasedServerCost(ramSize); // Biaya untuk membeli server
    if (ns.getServerMoneyAvailable("home") >= cost) {
        const purchasedServer = ns.purchaseServer(serverName, ramSize); // Membeli server
        if (purchasedServer) {
            ns.tprint(`Server "${purchasedServer}" berhasil dibeli dengan RAM ${ramSize}GB.`);
        } else {
            ns.tprint(`Gagal membeli server "${serverName}".`);
        }
    } else {
        ns.tprint(`Uang tidak cukup untuk membeli server "${serverName}". Biaya: $${cost}, Uang Tersedia: $${ns.getServerMoneyAvailable("home")}`);
    }
}
