'use client';

import { formatDate, formatDuration } from '@/lib/utils';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import { RiPlayFill } from 'react-icons/ri';

type IPlaylistListItem = {
  name: string;
  tracks: number;
  duration: string;
  dateUpdated: string;
};

const PlaylistListItem = ({
  name,
  tracks,
  duration,
  dateUpdated,
}: IPlaylistListItem) => {
  return (
    <tr>
      <td className='whitespace-nowrap flex items-center gap-x-2 text-sm'>
        <div className='flex-none w-10 h-10 bg-purple-300 rounded-md'></div>
        {name}
      </td>
      <td className='whitespace-nowrap text-gray-400 text-xs'>
        {tracks} tracks • {formatDuration(duration)}
      </td>
      <td className='whitespace-nowrap text-gray-400 text-xs'>
        {formatDate(dateUpdated)}
      </td>
      <td className='relative whitespace-nowrap'>
        <div className='flex gap-x-1 items-center justify-end'>
          <button>
            <RiPlayFill className='h-6 w-6' />
          </button>
          <button>
            <EllipsisVerticalIcon className='w-6 h-6' />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default PlaylistListItem;
