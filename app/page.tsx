import { Tab, Tabs } from '@/components/tabs';
import { feedPlaylist } from '@/lib/placeholder-data';
import PlaylistListItem from '@/components/ui/feed/playlistListItem';

export default function Home() {
  return (
    <>
      <div className='grid grid-cols-3 gap-4'>
        <div className='rounded-md col-span-1 bg-purple-500 h-60'></div>
        <div className='rounded-md col-span-2 bg-purple-500 h-60'></div>
        <div className='rounded-md col-span-3'>
          <Tabs>
            <Tab label='Playlist'>
              <table className='min-w-full divide-y divide-transparent'>
                <thead className='sr-only'>
                  <tr>Name</tr>
                  <tr>Tracks and Duration</tr>
                  <tr>Date updated</tr>
                </thead>
                <tbody className='divide-y-4 divide-transparent'>
                  {feedPlaylist.map((item) => (
                    <PlaylistListItem
                      key={item.id}
                      name={item.name}
                      tracks={item.tracks}
                      duration={item.duration}
                      dateUpdated={item.dateUpdated}
                    />
                  ))}
                </tbody>
              </table>
            </Tab>
            <Tab label='Artist'>Artist</Tab>
            <Tab label='Albums'>Albums</Tab>
            <Tab label='Streams'>Streams</Tab>
            <Tab label="Friend's playlist">Streams</Tab>
          </Tabs>
        </div>
        <div className='rounded-md col-span-2 bg-purple-500 h-60'></div>
        <div className='rounded-md col-span-1 bg-purple-500 h-60'></div>
      </div>
    </>
  );
}
