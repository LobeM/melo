import React from 'react';

type INewReleaseListItem = {
  title: string;
  artist: string;
  album: string;
  year: number;
};

const NewReleaseListItem = ({
  title,
  artist,
  album,
  year,
}: INewReleaseListItem) => {
  return (
    <li className='flex items-center gap-x-2'>
      <div className='flex-none w-12 h-12 bg-purple-300 rounded-md'></div>
      <div className='flex-1'>
        <h4>{title}</h4>
        <p className='text-xs leading-6 text-gray-400'>
          Track • {artist} • {album} • {year}
        </p>
      </div>
    </li>
  );
};

export default NewReleaseListItem;
