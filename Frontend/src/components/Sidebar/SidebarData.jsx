import React from 'react';
import * as BiIcons from 'react-icons/bi';
import * as RiIcons from 'react-icons/ri';
import * as TiIcons from 'react-icons/ti';

export const SidebarData = [
  {
    title: 'Weather',
    path: '/',
    icon: <TiIcons.TiWeatherPartlySunny />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Now',
        path: '/',
        icon: <BiIcons.BiRightArrowCircle />
      },
      {
        title: 'Past',
        path: '/past',
        icon: <BiIcons.BiRightArrowCircle />
      },
      {
        title: 'Future',
        path: '/predict',
        icon: <BiIcons.BiRightArrowCircle />
      }
    ]
  },
  {
    title: 'KIDS',
    path: '/kids',
    icon: <RiIcons.RiComputerLine />
  },
  {
    title: 'Map',
    path: '/map',
    icon: <BiIcons.BiMapAlt />
  }
];