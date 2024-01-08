import { facebook, instagram, whatsapp, shoe, weighingScale, dumbbel, mail, phone, location } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Inicio",
  },
  {
    id: "services",
    title: "Servicios",
  },
  {
    id: "memberships",
    title: "Membresías",
  },
  {
    id: "contacts",
    title: "Contáctanos",
  },
];

export const socialMedia = [
  {
    title: "Redes Sociales",
    links:
      [
        {
          id: "social-media-1",
          name: "Instagram",
          icon: instagram,
          link: "https://www.instagram.com/",
        },
        {
          id: "social-media-2",
          name: "Facebook",
          icon: facebook,
          link: "https://www.facebook.com/",
        },
        {
          id: "social-media-3",
          name: "Whatsapp",
          icon: whatsapp,
          link: "https://www.whatsapp.com/",
        }
      ]
  },


]

export const footerLinks = [
  {
    title: "Sobre nosotros",
    links: [
      {
        id: "fl-1",
        name: "Servicios",
        link: "https://github.com/",
      },
      {
        id: "fl-2",
        name: "Contactos",
        link: "https://github.com/",
      },
    ],
  },
  {
    title: "Más",
    links: [
      {
        id: "fl-3",
        name: "Membresías",
        link: "https://github.com/",
      },
      {
        id: "fl-4",
        name: "Horarios",
        link: "https://github.com/",
      },
      {
        id: "fl-5",
        name: "Noticias",
        link: "https://github.com/",
      },
    ],
  },
];

export const details = [
  {
    id: "detail-1",
    icon: dumbbel,
    title: "Instalaciones y Equipos",
    content:
      "Contamos con un ambiente moderno y motivador, diseñado para inspirar tu rendimiento",
  },
  {
    id: "detail-2",
    icon: weighingScale,
    title: "Entrenadores",
    content:
      "Nuestros entrenadores personales están aquí para guiarte en cada paso de tu viaje fitness.",
  },
  {
    id: "detail-3",
    icon: shoe,
    title: "Clases y Programas Especiales",
    content:
      "Sumérgete en un mundo de opciones de fitness con nuestras clases especializadas.",
  },
];

export const plans = [
  {
    id: "plan-1",
    price: "$55",
    content:
      "Descripción de la membresía.Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quo eos pariatur molestiae, dolorem.",
    name: "Nombre Membresía 1",
    type: "Mensual",
  },
  {
    id: "plan-2",
    price: "$256",
    content:
      "Descripción de la membresía.Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quo eos pariatur molestiae, dolorem.",
    name: "Nombre Membresía 2",
    type: "Anual",
  },
  {
    id: "plan-3",
    price: "$45",
    content:
      "Descripción de la membresía.Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quo eos pariatur molestiae, dolorem.",
    name: "Nombre Membresía 3",
    type: "Mensual, con fidelidad de 1 año",
  },
];

export const contacts = [
  {
    icon: phone,
    info: "+593 98 322 1329",
  },
  {
    icon: mail,
    info: "fitnesshub2023@gmail.com",
  },
  {
    icon: location,
    info: "Avenida General Enriquez 2400, Quito",
  },
];

//Opciones para comboBoxs

export const diasOption = [
  { label: 'Lunes', value: 'lunes' },
  { label: 'Martes', value: 'martes' },
  { label: 'Miércoles', value: 'miercoles' },
  { label: 'Jueves', value: 'jueves' },
  { label: 'Viernes', value: 'viernes' },
  { label: 'Sábado', value: 'sabado' },
];

export const GenderOptions = [
  {label: 'Femenino', value: 'mujer'},
  {label: 'Masculino', value: 'hombre'}
];

export const MembershipType = [
  {label: 'Anual', value: 'anual'},
  {label: 'Mensual', value: 'mensual'},
];
