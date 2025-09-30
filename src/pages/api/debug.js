// Endpoint de depuración para verificar conexión a la base de datos
import { connectDB } from "./db.js";
import Animal from "./models/Animal.js";

export async function GET() {
  try {
    // Intentar conectar explícitamente a la base de datos "protectora"
    await connectDB("protectora");

    // Contar cuántos animales hay en la colección
    const count = await Animal.countDocuments();
    
    // Obtener algunos campos básicos de hasta 5 animales para verificar
    const animals = await Animal.find({}, 'name species status')
      .limit(5)
      .lean();

    return new Response(
      JSON.stringify({
        success: true,
        message: "Conexión exitosa a la base de datos",
        debug: {
          environment: process.env.NODE_ENV,
          hasMongoDB: !!process.env.MONGODB_URI,
          collection: "animals",
          count,
          sampleAnimals: animals
        }
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    console.error("Error en endpoint de depuración:", error);
    
    return new Response(
      JSON.stringify({
        success: false,
        message: "Error de conexión",
        error: error.message
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
}