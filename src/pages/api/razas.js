import mongoose from "mongoose";

let isConnected = false;

async function connectDB() {
  if (!isConnected) {
    try {
      // Mejorado para entornos Vercel
      const uri = import.meta.env.MONGO_URI || import.meta.env.MONGODB_URI || process.env.MONGO_URI || process.env.MONGODB_URI;

      if (!uri) {
        throw new Error('Variable MONGO_URI no encontrada');
      }

      console.log('🔗 Conectando a MongoDB Atlas...');

      await mongoose.connect(uri, {
        dbName: "RazasPerros",
        // Opciones para mejor compatibilidad
        useNewUrlParser: true,
        useUnifiedTopology: true,
        bufferCommands: false,
      });

      isConnected = true;
      console.log('✅ Conectado a RazasPerros');

    } catch (error) {
      console.error('❌ Error conectando:', error.message);
      throw error;
    }
  }
}

// Esquema exactamente como en el debug que funciona
const razaSchema = new mongoose.Schema({
  nombre: String,
  origen: String,
  historia: String,
  img: String,
}, {
  collection: 'Razas' // Usa la colección que tiene los datos
});

// IMPORTANTE: Usa un nombre de modelo diferente al debug
const Raza = mongoose.models.RazaAPI || mongoose.model("RazaAPI", razaSchema);

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export async function GET() {
  try {
    console.log('🚀 API Razas - Buscando datos...');

    await connectDB();

    // Usar .lean() como en el debug que funciona
    const razas = await Raza.find().lean();

    console.log(`📊 API Razas - Encontradas ${razas.length} razas`);
    console.log('🐕 Primera raza:', razas[0]?.nombre || 'No hay datos');

    return json({
      success: true,
      data: razas,
      count: razas.length,
      message: `Se encontraron ${razas.length} razas de perros`
    });

  } catch (error) {
    console.error('❌ Error en API Razas:', error);
    return json({
      success: false,
      error: error.message
    }, 500);
  }
}