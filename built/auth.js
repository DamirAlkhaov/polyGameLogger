export async function auth(polyId, ip) {
    if (polyId != 0 && ip != "64.225.60.112") {
        return false;
    }
    else {
        return true;
    }
}
