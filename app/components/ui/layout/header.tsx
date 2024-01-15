'use client';

import {
  Bars3Icon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Header() {
  return (
    <div className='sticky top-0 flex h-16 shrink-0 items-center gap-x-4 px-4 shadow-sm sm:px-6 lg:px-8 bg-gray-900'>
      {/* Mobile menu button */}
      <button
        type='button'
        className='-m-2.5 p-2.5 text-white xl:hidden'
        onClick={() => {}}
      >
        <span className='sr-only'>Open sidebar</span>
        <Bars3Icon className='h-5 w-5' aria-hidden='true' />
      </button>

      {/* Search form */}
      <div className='flex flex-1'>
        <form action='GET' className='flex flex-1'>
          <label htmlFor='search-field' className='sr-only'>
            Search
          </label>
          <div className='relative rounded-full w-3/5'>
            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
              <MagnifyingGlassIcon
                className=' h-5 w-5 text-gray-400'
                aria-hidden='true'
              />
            </div>
            <input
              id='search-field'
              type='search'
              name='search'
              placeholder='Search by artists, songs or albums'
              className='block h-full w-full rounded-full bg-gray-700 border-0 py-2 pl-10 ring-1 ring-inset ring-gray-700 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm'
            />
          </div>
        </form>
      </div>

      {/* Channels button */}
      <Link
        href='#'
        className='inline-flex items-center gap-x-1.5 rounded-full px-3 py-1.5 text-sm text-orange-600 shadow-sm ring-1 ring-inset ring-orange-600 hover:bg-orange-600 hover:text-gray-900 hover:font-semibold'
      >
        My channel
        <ChevronRightIcon className='h-4 w-4' />
      </Link>

      {/* Profile button */}
      <Link
        href='#'
        className='px-3 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800'
      >
        <img
          className='h-8 w-8 rounded-full bg-gray-800'
          src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          alt=''
        />
        <span className='sr-only'>Your profile</span>
      </Link>
    </div>
  );
}
