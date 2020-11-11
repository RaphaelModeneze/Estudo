export default (mongoose) => {
  const schema = mongoose.Schema({
    name: {
      type: String,
      require: true,
    },
    subject: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    value: {
      type: Number,
      require: true,
      validate(value) {
        if (value < 0) throw new Error('Valor negativo');
      },
    },
  });

  const Grades = mongoose.model('grades', schema, 'grades');

  return Grades;
};
