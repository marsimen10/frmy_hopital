import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Acceuil',
    icon: 'home-outline',
    link: '/hospital/dashboard',
    home: true,
  },
  {
    title: 'Administration',
    icon: 'settings-2-outline',
    children: [
      {
        title: 'patients',
        link: '/hospital/administration/patients',
        icon: 'people-outline',
      },
      {
        title: 'medecins',
        link: '/hospital/administration/medecins',
        icon: 'people-outline',
      },
      {
        title: 'specialites',
        link: '/hospital/administration/specialites',
        icon: 'people-outline',
      },
    ],

  },
];
