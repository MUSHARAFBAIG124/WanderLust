module.exports = async function geocode(location, country) {
    const query = encodeURIComponent(`${location}, ${country}`);
    const url = `https://nominatim.openstreetmap.org/search?q=${query}&format=json&limit=1`;

    try {
        const res = await fetch(url, {
            headers: { "User-Agent": "WanderLust-student-project" },
            signal: AbortSignal.timeout(5000), // give up after 5 seconds
        });
        if (!res.ok) return null;

        const results = await res.json();
        if (results.length === 0) return null;

        return {
            latitude: parseFloat(results[0].lat),
            longitude: parseFloat(results[0].lon),
        };
    } catch (err) {
        console.log("Geocoding failed:", err.message);
        return null;
    }
};