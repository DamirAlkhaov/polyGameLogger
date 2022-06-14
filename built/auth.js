export async function auth(polyId, ip) {
    console.log(ip);
    if (polyId && ip === "64.225.60.112") {
        return true;
    }
    else {
        return false;
    }
}
