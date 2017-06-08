var Libro = require('../schemas/Libro');

exports.getStudents = {
  handler: function(request, reply){
    var students = student.find({});
    reply(students);
  }
}

exports.createStudent = {
  handler: function(request, reply){
    var newLibro = new Libro({
      titulo: request.payload.titulo,
      genero: request.payload.genero,
      autor:   request.payload.autor,
      ano_de_publicacion: request.payload.ano_de_publicacion,
      editorial: request.payload.editorial,
      descripcion: request.payload.descripcion,
      keywords:  request.payload.keywords,
      copias_total: request.payload.copias_total,
      numero_copias: request.payload.numero_copias,
      
    });
    newLibro.save();
    console.log('Libro saved');
    return reply('ok');
  }
}
