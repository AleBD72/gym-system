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
  { label: 'Lunes', value: 'Lunes' },
  { label: 'Martes', value: 'Martes' },
  { label: 'Miércoles', value: 'Miércoles' },
  { label: 'Jueves', value: 'Jueves' },
  { label: 'Viernes', value: 'Viernes' },
  { label: 'Sábado', value: 'Sábado' },
];

export const GenderOptions = [
  {label: 'Femenino', value: 'Femenino'},
  {label: 'Masculino', value: 'Masculino'}
];

export const MembershipType = [
  {label: 'Anual', value: 'Anual'},
  {label: 'Mensual', value: 'Mensual'},
];

export const UserState = [
  {label: 'Activo', value: 'Activo'},
  {label: 'Inactivo', value: 'Inactivo'},
];

export const PaymentMethod = [
  {label: 'Efectivo', value: 'Efectivo'},
  {label: 'Transferencia', value: 'Transferencia'},
  {label: 'Tarjeta de Crédito', value: 'Tarjeta de Crédito'},
  {label: 'Tarjeta de Débito', value: 'Tarjeta de Débito'},
];

export const MembershipOption = [
  {label: 'Membresía 1', value: 'Membresía 1'},
  {label: 'Membresía 2', value: 'Membresía 2'},
  {label: 'Membresía 3', value: 'Membresía 3'},
]
