export async function auth(polyId, ip) {
    if (!polyId && ip != "64.225.60.112") {
        return false;
    }
    else {
        return true;
    }
}
