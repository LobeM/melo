import { Tab, Tabs } from '@/components/tabs';

export default function Home() {
  return (
    <>
      <div className='grid grid-cols-3 gap-4'>
        <div className='rounded-md col-span-1 bg-purple-500 h-60'></div>
        <div className='rounded-md col-span-2 bg-purple-500 h-60'></div>
        <div className='rounded-md col-span-3  h-64'>
          <Tabs>
            <Tab label='Playlist'>Playlist</Tab>
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
