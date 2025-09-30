
// Aquí definimos las rutas de la API para gestionar animales.

import { connectDB } from "./db.js";
import Animal from "./models/Animal.js";

// Helper para devolver JSON (parecido a res.json en Express)
function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

// =======================================
// GET /api/animals → Lista todos los animales
// GET /api/animals?id=ID → Obtiene un animal específico
// =======================================
export async function GET({ url }) {
  try {
    await connectDB();

    // Filtros opcionales via query params
    const searchParams = new URL(url).searchParams;
    const species = searchParams.get('species');
    const status = searchParams.get('status');
    const gender = searchParams.get('gender');
    const id = searchParams.get('id');

    // Si se proporciona un ID, devuelve un animal específico
    if (id) {
      const animal = await Animal.findById(id);

      if (!animal) {
        return json({ success: false, error: 'Animal no encontrado' }, 404);
      }

      return json({ success: true, data: animal });
    }

    // Si no hay ID, continúa con el listado normal
    let filter = {};
    if (species) filter.species = species;
    if (status) filter.status = status;
    if (gender) filter.gender = gender;

    const animals = await Animal.find(filter).sort({ createdAt: -1 });

    return json({
      success: true,
      data: animals,
      total: animals.length
    });
  } catch (error) {
    console.error('Error obteniendo animales:', error);
    return json({ success: false, error: error.message }, 500);
  }
}

// =======================================
// POST /api/animals → Crear un animal
// Body JSON: { name, species, age, gender, breed, description, photoUrl }
// =======================================
export async function POST({ request }) {
  try {
    await connectDB();

    const data = await request.json();

    // Validaciones básicas (además de las de Mongoose)
    if (!data.name?.trim()) {
      return json({ success: false, error: 'El nombre es obligatorio' }, 400);
    }

    if (!data.species?.trim()) {
      return json({ success: false, error: 'La especie es obligatoria' }, 400);
    }

    const animal = await Animal.create(data);

    return json({
      success: true,
      data: animal,
      message: 'Animal registrado exitosamente'
    }, 201);
  } catch (err) {
    console.error('Error creando animal:', err);
    return json({ success: false, error: err.message }, 400);
  }
}

// =======================================
// PUT /api/animals?id=ID → Actualizar un animal
// =======================================
export async function PUT({ request }) {
  try {
    await connectDB();

    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return json({ success: false, error: "ID del animal es requerido" }, 400);
    }

    const data = await request.json();

    const updated = await Animal.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return json({ success: false, error: "Animal no encontrado" }, 404);
    }

    return json({
      success: true,
      data: updated,
      message: 'Animal actualizado exitosamente'
    });
  } catch (err) {
    console.error('Error actualizando animal:', err);
    return json({ success: false, error: err.message }, 400);
  }
}

// =======================================
// DELETE /api/animals?id=ID → Borrar un animal
// =======================================
export async function DELETE({ request }) {
  try {
    await connectDB();

    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return json({ success: false, error: "ID del animal es requerido" }, 400);
    }

    const deleted = await Animal.findByIdAndDelete(id);

    if (!deleted) {
      return json({ success: false, error: "Animal no encontrado" }, 404);
    }

    return json({
      success: true,
      message: `${deleted.name} ha sido eliminado del refugio`,
      data: deleted
    });
  } catch (err) {
    console.error('Error eliminando animal:', err);
    return json({ success: false, error: err.message }, 400);
  }
}