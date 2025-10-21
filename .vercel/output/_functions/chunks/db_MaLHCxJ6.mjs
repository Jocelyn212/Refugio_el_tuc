import mongoose from 'mongoose';

let isConnected = false;
async function connectDB() {
  try {
    if (isConnected) {
      return;
    }
    const uri = process.env.MONGODB_URI || "mongodb+srv://jocelyncf:idvLvNUj0y9jNQtO@grupoc.myft7qs.mongodb.net/protectora?retryWrites=true&w=majority";
    if (!uri) ;
    await mongoose.connect(uri, {
      bufferCommands: false
      // Desactivar buffer para mejor rendimiento en serverless
    });
    isConnected = true;
    console.log("✅ Conectado exitosamente a MongoDB Atlas");
  } catch (error) {
    console.error("❌ Error al conectar a MongoDB:", error.message);
    throw error;
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  connectDB
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _, connectDB as c };
