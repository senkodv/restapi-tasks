/**
 * Cargar las variables de entornos del archivo .env
 */
import { config } from 'dotenv'
config();

export default {
    mongodbURL: process.env.MONGODB_URI || 'mongodb://localhost/tasksdb',
}