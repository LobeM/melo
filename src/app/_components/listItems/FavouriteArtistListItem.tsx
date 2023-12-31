import { ChevronRightIcon } from '@heroicons/react/24/outline';
import React from 'react';

type IFavouriteArtistListItem = {
  count: number;
  name: string;
  subscribers: number;
};

const FavouriteArtistListItem = ({
  count,
  name,
  subscribers,
}: IFavouriteArtistListItem) => {
  return (
    <li className='flex items-center gap-x-2'>
      <span className='text-6xl font-black -me-4 -mt-1 font-outline-1'>
        {count}
      </span>
      <div className='flex-none w-12 h-12 bg-purple-300 rounded-md'></div>
      <div className='flex-1'>
        <p>{name}</p>
        <p className='text-xs leading-6 text-gray-400'>
          {subscribers} subscibers
        </p>
      </div>
      <button>
        <ChevronRightIcon className='w-6 h-6' />
      </button>
    </li>
  );
};

export default FavouriteArtistListItem;
