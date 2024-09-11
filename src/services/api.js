
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

export const fetchUserData = async (token) => {
    try {
        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        })
        if (!response.ok) {
            throw new Error("Erreur lors de la récupération des informations utilisateur")
        }
        const data = await response.json()
        return {
            id: data.body.id,
            email: data.body.email,
            firstname: data.body.firstName,
            lastname: data.body.lastName,
            userame: data.body.userName
        }
    } catch (error) {
        console.error("FetchData:", error)
        throw error
    }
}

export const updateUserProfile = async (token, userName) => {
    try {
        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({ userName }),
        })
        if (!response.ok) {
            throw new Error("Invalid fields")
        }
        const data = await response.json()
        return data.body.userName
    } catch (error) {
        console.error("Erreur lors de la récupération des informations utilisateur", error)
        throw error
    }
}