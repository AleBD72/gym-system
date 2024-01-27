import * as Yup from 'yup';

//Validar campos de login
export const LoginValidate = Yup.object().shape({
    email: Yup.string().email('Correo no válido').required('Campo requerido'),
});

//Validar campos de register
export const RegisterValidate = Yup.object().shape({
    name: Yup.string().min(4, 'Mínimo 4 caracteres').max(10, 'Máximo 10 caracteres').required('Campo requerido'),
    last_name: Yup.string().min(4, 'Mínimo 4 caracteres').max(10, 'Máximo 10 caracteres').required('Campo requerido'),
    birth: Yup.date().max(new Date(), 'Este valor no puede ser en el futuro').test('fechaAnterior', 'La fecha ingresada no es válida', function (value) {
        const seisAniosAtras = new Date();
        seisAniosAtras.setFullYear(seisAniosAtras.getFullYear() - 16);
        return value <= seisAniosAtras
    }).required('Campo requerido'),
    cedula: Yup.number().required('Campo requerido').test('longitud', 'El número debe tener 10 cifras', function (value) {
        // Validar que el número tenga exactamente 10 cifras
        return value && value.toString().length === 10;
    }),
    password: Yup.string().min(6, 'La contraseña debe tener mínimo 6 carcateres').required('Campo obligatorio'),
    confirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir').required('Campo obligatorio'),
    email: Yup.string().email('Correo no válido').required('Campo requerido'),
});

//Valdiar campos de ingreso de eventos a horarios
export const ScheduleValidate = Yup.object().shape({
    name: Yup.string().min(5, 'Mínimo 5 caracteres').max(40, 'Máximo 40 caracteres').required('Campo requerido'),
    //day: Yup.string().required('Campo requerido'),
    trainer: Yup.string().min(3,'Mínimo 3 caracteres').required('Campo obligatorio')
});

//Validar caompos al editar el perfil
export const ProfileValidate = Yup.object().shape({
    // city: Yup.string().min(4, 'Se requiere mínimo 4 carcteres').max(15, 'Máximo 15 caracteres'),
    // country: Yup.string().min(4, 'Se requiere mínimo 4 carcteres').max(15, 'Máximo 15 caracteres'),
    //description: Yup.string().max(60, 'Solo se puede ingresar 60 caracteres'),
    name: Yup.string().min(4, 'Mínimo 4 caracteres').max(10, 'Máximo 10 caracteres').required('Campo requerido'),
    last_name: Yup.string().min(4, 'Mínimo 4 caracteres').max(10, 'Máximo 10 caracteres').required('Campo requerido'),
    cedula: Yup.number().required('Campo requerido').test('longitud', 'El número debe tener 10 cifras', function (value) {
        // Validar que el número tenga exactamente 10 cifras
        return value && value.toString().length === 10;
    }),
    //nickname: Yup.string().min(3, 'Mínimo 3 caracteres'),
    phone: Yup.string().max(9, 'Máximo 10 dígitos').min(9, 'Mínimo 10 dígitos').required('Campo obligatorio'),
    address: Yup.string().max(60, 'Máximo 60 caracteres'),
    birth: Yup.date().max(new Date(), 'Este valor no puede ser en el futuro').test('fechaAnterior', 'La fecha ingresada no es válida', function (value) {
        const seisAniosAtras = new Date();
        seisAniosAtras.setFullYear(seisAniosAtras.getFullYear() - 16);
        return value <= seisAniosAtras
    }).required('Campo requerido'),
    email: Yup.string().email('Correo no válido').required('Campo requerido'),
});

export const MembershipValidate = Yup.object().shape({
    name: Yup.string().min(6,'Mínimo 6 caracteres').max(20, 'Máximo 20 caracteres').required('Campo obligatorio'),
    value: Yup.number().min(10, 'El preció mínimo debe ser de 10').max(360, 'El precio máximo es 360').required('Campo obligatorio'),
    //type: Yup.string().required('Campo obligatorio'),
    description: Yup.string().min(10, 'Se requiere mínimo 10 caracteres').max(200, 'Se puede ingresar máximo 75 caracteres').required('Campo Obligatorio'),
});

export const ServicesValidate =  Yup.object().shape({
    service: Yup.string().min(6,'Mínimo 6 caracteres').max(20, 'Máximo 20 caracteres').required('Campo obligatorio'),
    description: Yup.string().min(10, 'Se requiere mínimo 10 caracteres').max(75, 'Se puede ingresar máximo 75 caracteres').required('Campo Obligatorio'),
});

export const NewsValidate = Yup.object().shape({
    title: Yup.string().min(6,'Mínimo 6 caracteres').max(25, 'Máximo 20 caracteres').required('Campo obligatorio'),
    autor: Yup.string().min(6,'Mínimo 6 caracteres').max(18, 'Máximo 20 caracteres').required('Campo obligatorio'),
    abstract: Yup.string().min(6,'Mínimo 6 caracteres').max(60, 'Máximo 20 caracteres').required('Campo obligatorio'),
    content: Yup.string().min(30,'Mínimo 6 caracteres').max(700, 'Máximo 20 caracteres').required('Campo obligatorio'),
    date: Yup.date().required('Campo obligatorio'),
})