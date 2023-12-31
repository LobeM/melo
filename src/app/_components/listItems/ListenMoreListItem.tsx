'use client';

import { EllipsisVerticalIcon, HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconFill } from '@heroicons/react/24/solid';
import React from 'react';

type IListenMoreListItem = {
  title: string;
  artist: string;
  favorite: boolean;
};

const ListenMoreListItem = ({
  title,
  artist,
  favorite,
}: IListenMoreListItem) => {
  return (
    <li className='flex items-center gap-x-2'>
      <div className='flex-none w-12 h-12 bg-purple-300 rounded-md'></div>
      <div className='flex-1'>
        <h4>{title}</h4>
        <p className='text-xs leading-6 text-gray-400'>{artist}</p>
      </div>
      <button>
        {favorite ? (
          <HeartIconFill className='w-6 h-6 text-red-500' />
        ) : (
          <HeartIcon className='w-6 h-6' />
        )}
      </button>
      <button>
        <EllipsisVerticalIcon className='w-6 h-6' />
      </button>
    </li>
  );
};

export default ListenMoreListItem;
