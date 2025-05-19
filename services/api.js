// Här kan vi samla våra fetchanrop

// Fetch för att logga in (Eddas exempel)
const BASE_URL = "https://api.escuelajs.co/api/v1";

export const loginWithApi = async (login, password) => {
    try {
        const response = await fetch (`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
        });

        if (!response.ok) throw new Error("Inloggningen misslyckades");

        return await respnse.json(); // Innehåller tokens

    } catch(error) {
        console.error("Login error", error);
        return null;
    }
};