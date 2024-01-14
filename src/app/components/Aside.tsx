import Link from 'next/link';

import {
  newReleases,
  listenMore,
  favoriteArtists,
} from '@/app/lib/placeholder-data';
import NewReleaseListItem from './listItems/NewReleaseListItem';
import ListenMoreListItem from './listItems/ListenMoreListItem';
import FavouriteArtistListItem from './listItems/FavouriteArtistListItem';

export default function Aside() {
  return (
    <aside className='bg-gray-900 px-4 lg:px-8 lg:fixed lg:bottom-20 lg:right-0 lg:top-16 lg:w-96 lg:overflow-y-auto no-scrollbar'>
      {/* New Realeases */}
      <section>
        <div className='flex justify-between'>
          <h3 className='text-xs font-semibold leading-6 text-gray-400'>
            New Releases
          </h3>
          <Link
            href='#'
            className='text-orange-600 text-xs leading-6 font-semibold'
          >
            See all
          </Link>
        </div>
        <ul role='list' className='space-y-2'>
          {newReleases.map((item, index) => (
            <NewReleaseListItem
              key={index}
              title={item.title}
              artist={item.artist}
              album={item.album}
              year={item.year}
            />
          ))}
        </ul>
        <h3 className='text-xs font-semibold leading-6 text-gray-400 mt-4'>
          Listen More Often
        </h3>
        <ul className='space-y-2'>
          {listenMore.map((item, index) => (
            <ListenMoreListItem
              key={index}
              title={item.title}
              artist={item.artist}
              favorite={item.favorite}
            />
          ))}
        </ul>
        <div className='flex justify-between mt-4'>
          <h3 className='text-xs font-semibold leading-6 text-gray-400'>
            Favourite Artists
          </h3>
          <Link
            href='#'
            className='text-orange-600 text-xs leading-6 font-semibold'
          >
            See all
          </Link>
        </div>
        <ul className='space-y-2'>
          {favoriteArtists.map((item, index) => (
            <FavouriteArtistListItem
              key={index}
              count={index + 1}
              name={item.name}
              subscribers={item.subscribers}
            />
          ))}
        </ul>
      </section>
    </aside>
  );
}
