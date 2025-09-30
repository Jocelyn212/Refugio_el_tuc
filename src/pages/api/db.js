import mongoose from "mongoose";

let isConnected = false;
let currentDbName = null;

// Conexión a MongoDB (la misma para todas las bases de datos)
export async function connectDB(dbName = "protectora") {
  try {
    const uri = import.meta.env.MONGODB_URI;

    if (!uri) {
      throw new Error("MONGODB_URI no encontrada");
    }

    // Si no estamos conectados, hacemos la conexión inicial
    if (!isConnected) {
      await mongoose.connect(uri, {
        dbName: dbName,
        bufferCommands: false
      });

      isConnected = true;
      currentDbName = dbName;
      console.log(`✅ Conectado a MongoDB - ${dbName}`);
      return;
    }

    // Si ya estamos conectados pero queremos cambiar de base de datos
    if (currentDbName !== dbName) {
      // Cambiamos a la nueva base de datos
      mongoose.connection.useDb(dbName);
      currentDbName = dbName;
      console.log(`✅ Cambiado a base de datos - ${dbName}`);
    }

  } catch (error) {
    console.error("❌ Error conectando:", error.message);
    throw error;
  }
}