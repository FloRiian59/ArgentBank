export const loginUser = async (email, password) => {
    try {
        const response = await fetch("http://localhost:3001/api/v1/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        })
        if (!response.ok) {
            throw new Error("Échec de la connexion. Veuillez vérifier vos identifiants.")
        }
        const data = await response.json()
        return data.body.token
    } catch (error) {
        console.error("Login error:", error)
        throw error
    }
}
