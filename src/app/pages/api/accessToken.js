

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const url = "https://accounts.spotify.com/api/token";
    const data = new URLSearchParams({
        grant_type: "client_credentials",
        client_id: process.env.client_id,
        client_secret: process.env.client_secret,
    });
    
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: data.toString(),
        });
        console.log("hello")
        if (!response.ok) {
            return res
                .status(response.status)
                .json({ message: "Failed to fetch token" });
        }

        const result = await response.json();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
    }
}