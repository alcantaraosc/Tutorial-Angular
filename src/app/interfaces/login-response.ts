export interface LoginResponse {
    success: boolean
    user: User
    token: string
    
    userId: number
    id: number
    title: string
    body: string
}


export interface User {
    name: string
    avatar: string
    level: number
    points: number
    achievements: any[]
    _id: string
    type: string
    user: string
    email: string
}

