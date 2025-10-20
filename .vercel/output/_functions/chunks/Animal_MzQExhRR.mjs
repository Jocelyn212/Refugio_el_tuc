import mongoose from 'mongoose';

const animalSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },     // nombre del animal
    species: { type: String, required: true },  // perro, gato, conejo... libre
    breed: String,                              // raza
    age: Number,                                // edad
    gender: String,                             // macho, hembra, desconocido
    status: { type: String, default: "en adopción" }, // estado
    description: String,                        // descripción libre
    photoUrl: String,                           // URL de la foto
  },
  { timestamps: true } // guarda createdAt y updatedAt
);

const Animal = mongoose.models.Animal || mongoose.model("Animal", animalSchema);

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: Animal
}, Symbol.toStringTag, { value: 'Module' }));

export { Animal as A, _page as _ };
