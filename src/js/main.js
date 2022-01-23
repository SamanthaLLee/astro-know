
const start = async function (a, b) {
    const url = "https://en.wikipedia.org/w/api.php?" +
        new URLSearchParams({
            origin: "*",
            action: "parse",
            page: "List of Hispanic astronauts",
            format: "json",
        });

    try {
        const req = await fetch(url);
        const json = await req.json();
        console.log(json.parse.text["*"]);
    } catch (e) {
        console.error(e);
    }
}

start();