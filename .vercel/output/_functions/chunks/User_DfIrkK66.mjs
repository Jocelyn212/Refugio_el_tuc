import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: true
      // Guardaremos hash, no contraseña en texto plano
    },
    role: {
      type: String,
      enum: ['admin', 'editor'],
      default: 'editor'
    }
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: User
}, Symbol.toStringTag, { value: 'Module' }));

export { User as U, _page as _ };
