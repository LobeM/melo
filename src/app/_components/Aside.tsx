import Link from 'next/link';

import { newReleases } from '@/app/lib/placeholder-data';
import NewReleaseListItem from './listItems/NewReleaseListItem';

export default function Aside() {
  return (
    <aside className='bg-gray-900 px-4 lg:px-8 lg:fixed lg:bottom-20 lg:right-0 lg:top-16 lg:w-96 lg:overflow-y-auto'>
      {/* New Realeases */}
      <section>
        <div className='flex justify-between'>
          <div className='text-xs font-semibold leading-6 text-gray-400'>
            New Releases
          </div>
          <Link
            href='#'
            className='text-orange-600 text-xs leading-6 font-semibold'
          >
            See all
          </Link>
        </div>
        <ul role='list' className='space-y-2'>
          {newReleases.map((item) => (
            <NewReleaseListItem
              title={item.title}
              artist={item.artist}
              album={item.album}
              year={item.year}
            />
          ))}
        </ul>
      </section>
    </aside>
  );
}
