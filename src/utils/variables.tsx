import React from 'react';

import HomeIcon from 'components/Icons/HomeIcon';
import AddressIcon from 'components/Icons/AddressIcon';
import TablesIcon from 'components/Icons/TablesIcon';
import CalendarIcon from 'components/Icons/CalendarIcon';
import MapIcon from 'components/Icons/MapIcon';

import NavItem from 'ts/interfaces';
import WidgetsIcon from 'components/Icons/WidgetsIcon';
import SettingsProfileIcon from 'components/Icons/SettingsProfileIcon';
import FinancialIcon from 'components/Icons/FinancialIcon';

const navItems: NavItem[] = [
  {
    id: 1,
    path: '/',
    text: 'Главная',
    icon: <HomeIcon />,
  },
  {
    id: 2,
    path: '/address',
    text: 'Поиск адресов',
    icon: <AddressIcon />,
  },
  {
    id: 3,
    path: '/tables',
    text: 'Таблицы',
    icon: <TablesIcon />,
  },
  {
    id: 4,
    path: '/calendar',
    text: 'Календарь',
    icon: <CalendarIcon />,
  },
  {
    id: 5,
    path: '/maps',
    text: 'Карты',
    icon: <MapIcon />,
  },
  {
    id: 6,
    path: '/widgets',
    text: 'Виджеты',
    icon: <WidgetsIcon />,
  },
];

const accordionItems: NavItem[] = [
  {
    id: 1,
    path: '/user-settings',
    text: 'Настройки профиля',
    icon: <SettingsProfileIcon />,
  },
  {
    id: 2,
    path: '/management',
    text: 'Управление финансами',
    icon: <FinancialIcon />,
  },
];

export { navItems, accordionItems };
