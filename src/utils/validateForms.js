import * as Yup from 'yup';

export const LoginValidate = Yup.object().shape({
    email: Yup.string().email('Correo no válido').required('Campo requerido'),
});

export const RegisterValidate = Yup.object().shape({
    name: Yup.string().min(4, 'Mínimo 4 caracteres').max(10, 'Máximo 10 caracteres').required('Campo requerido'),
    last_name:Yup.string().min(4, 'Mínimo 4 caracteres').max(10, 'Máximo 10 caracteres').required('Campo requerido'),
    birth:Yup.date().max(new Date(), 'Este valor no puede ser en el futuro').test('fechaAnterior', 'La fecha ingresada no es válida', function (value) {
        const seisAniosAtras = new Date();
        seisAniosAtras.setFullYear(seisAniosAtras.getFullYear() - 16);
        return value <= seisAniosAtras}).required('Campo requerido'),
    cedula:Yup.number().required('Campo requerido').test('longitud', 'El número debe tener 10 cifras', function (value) {
        // Validar que el número tenga exactamente 10 cifras
        return value && value.toString().length === 10;}),
    rol:Yup.string().required('Campo requerido'),
    email: Yup.string().email('Correo no válido').required('Campo requerido'),
    genre: Yup.string().required('Campo requerido')
})