import { connect, set } from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config()

export function connectDB() {
    set('strictQuery', false)

    const mongoDBURL = process.env.MONGODB_URL

    try {
        connect(`${mongoDBURL}`).then(() => console.log('DB Conectado!'))
    } catch (error) {
        console.log(error)
    }
}