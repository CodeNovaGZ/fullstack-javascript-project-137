import * as yup from 'yup';

const createSchema = (feeds) => {
  return yup
    .string()
    .required('No puede estar vacío')
    .url('El enlace debe ser una URL válida')
    .test(
      'unique',
      'El enlace ya ha sido agregado',
      (value) => {
        return value===undefined || !feeds.includes(value);
      },
    );
};
export const validation = (url, feeds) => {
  const schema = createSchema(feeds);
  return schema.validate(url);
};