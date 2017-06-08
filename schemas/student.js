var mongoose = require('mongoose');

var libroSchema = new mongoose.Schema({
  titulo : String,
  genero : String,
  autor  : String,
  año_de_publicacion: String,
  editorial: String,
  descripcion: String,
  keywords: [String],
  copias_total: Number,
  numero_copias: Number,
});

module.exports = mongoose.model('Libro', libroSchema);
