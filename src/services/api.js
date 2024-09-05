import { useSelector } from "react-redux"

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
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        })
        if (response.ok) {
            const data = await response.json()
            const userData = {
                email: data.body.email,
                password: data.body.password,
                firstName: data.body.firstName,
                lastName: data.body.lastName,
                userName: data.body.userName,
            }
        } else {
            console.log("Erreur lors de la récupération des informations utilisateurs")
        }
    } catch (error) {
        console.error("FetchData:", error)
        throw error
    }
}

export const updateUsername = async (token) => {
    try {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify()
        })
        if (response.ok) {
            const data = await response.json()
        } else {
            console.log("Erreur lors de la modification des informations utilisateurs")
        }
    } catch (error) {
        console.error("UpdateData:", error)
        throw error
    }
}