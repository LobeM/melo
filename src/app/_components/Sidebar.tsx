import {
  ChartBarIcon,
  MusicalNoteIcon,
  SignalIcon,
  HeartIcon,
  ClockIcon,
  CalendarDaysIcon,
  MicrophoneIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

import { playlists } from '@/app/lib/placeholder-data';
import { textToColor } from '@/app/lib/utils';

export type NavigationItem = {
  name: string;
  href: string;
  icon: any;
};

const navigation: NavigationItem[] = [
  { name: 'Feed', href: '#', icon: SignalIcon },
  { name: 'Playlists', href: '#', icon: MusicalNoteIcon },
  { name: 'Statistics', href: '#', icon: ChartBarIcon },
];

const music: NavigationItem[] = [
  { name: 'Favourites', href: '#', icon: HeartIcon },
  { name: 'Listen Later', href: '#', icon: ClockIcon },
  { name: 'History', href: '#', icon: CalendarDaysIcon },
  { name: 'Podcasts', href: '#', icon: MicrophoneIcon },
];

export default function Sidebar() {
  return (
    <div className='bg-gray-900 hidden xl:fixed xs:inset-y-0 xl:top-0 xl:bottom-0 xl:z-50 xl:flex xl:w-72 xl:flex-col gap-y-5 overflow-y-auto no-scrollbar '>
      <div className='flex h-16 shrink-0 items-center p-4'>
        <img
          className='h-8 w-auto'
          src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
          alt='Your Company'
        />
      </div>
      <nav className='flex flex-1 flex-col'>
        <ul role='list' className='flex flex-1 flex-col gap-y-7'>
          <li>
            <ul role='list' className='space-y-1'>
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className='text-gray-400 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-600/30 hover:to-10% border-l-2 border-transparent hover:border-orange-600  group flex gap-x-3 py-2 px-4 text-sm leading-6 font-semibold'
                  >
                    <item.icon className='h-6 w-6 shrink-0' />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <div className='text-xs font-semibold leading-6 text-gray-400 px-4'>
              Your Music
            </div>
            <ul role='list' className='mt-2 space-y-1'>
              {music.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className='text-gray-400 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-600/30 hover:to-10% border-l-2 border-transparent hover:border-orange-600 group flex gap-x-3 py-2 px-4 text-sm leading-6 font-semibold'
                  >
                    <item.icon
                      className='h-6 w-6 shrink-0'
                      aria-hidden='true'
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className='mb-auto'>
            <div className='text-xs font-semibold leading-6 text-gray-400 px-4'>
              Playlists
            </div>
            <ul role='list' className='mt-2 space-y-1'>
              {playlists.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={
                      'text-gray-400 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-600/30 hover:to-10% border-l-2 border-transparent hover:border-orange-600 group flex gap-x-3 py-2 px-4 text-sm leading-6 font-semibold'
                    }
                  >
                    <span className={`font-black ${textToColor(item.name)}`}>
                      •
                    </span>
                    <span className='truncate'>{item.name}</span>
                  </Link>
                </li>
              ))}
              <li className='px-6'>
                <Link
                  href='#'
                  className='text-orange-600 text-sm flex items-center leading-6 font-semibold gap-x-1'
                >
                  Create new playlist
                  <PlusIcon className='h-4 w-4' />
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
