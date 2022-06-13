export async function auth(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    if (!req.header("PT-Game-ID") && ip != "64.225.60.112") {
        return req.status(400).send("Failure").end();
    }
}
