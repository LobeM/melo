'use client';

import {
  RiPlayFill,
  RiPlayList2Fill,
  RiRepeatFill,
  RiShuffleFill,
  RiSkipBackFill,
  RiSkipForwardFill,
  RiVolumeUpFill,
} from 'react-icons/ri';
import React, { useState } from 'react';
import { HeartIcon } from '@heroicons/react/24/outline';

const BottomPlayer = () => {
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    handleDrag(event);
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      handleDrag(event);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleDrag = (event: MouseEvent<HTMLDivElement>) => {
    const progressBar = document.getElementById('progress-bar')!;
    const progressBarRect = progressBar.getBoundingClientRect();
    const newPosition =
      ((event.clientX - progressBarRect.left) / progressBarRect.width) * 100;

    // Ensure the position is within the valid range (0 to 100)
    const newPositionClamped = Math.max(0, Math.min(100, newPosition));

    progressBar.querySelector<HTMLDivElement>(
      '.bg-blue-700'
    )!.style.width = `${newPositionClamped}%`;
    progressBar.querySelector<HTMLDivElement>(
      '.absolute'
    )!.style.left = `${newPositionClamped}%`;
  };

  return (
    <div className='sticky bottom-0 left-0 right-0 flex items-center space-x-8 h-20 shrink-0 bg-gray-800 px-4 py-2 z-50'>
      {/* Now Playing */}
      <div className='flex w-64 items-center space-x-2'>
        <div className='flex-none w-12 h-12 bg-purple-300 rounded-md'></div>
        <div>
          <p>Mask Off</p>
          <p className='text-xs text-gray-400'>Future</p>
        </div>
      </div>
      {/* Playback Controls */}
      <div className='flex items-center space-x-2'>
        <button>
          <RiSkipBackFill className='h-6 w-6' />
        </button>
        <button className='flex items-center rounded-full border border-gray-500 p-3'>
          <RiPlayFill className='h-6 w-6' />
        </button>
        <button>
          <RiSkipForwardFill className='h-6 w-6' />
        </button>
        <button>
          <HeartIcon className='h-6 w-6' />
        </button>
      </div>
      {/* Progress Bar */}
      <div className='flex flex-1 items-center'>
        <div className='w-full bg-gray-300 rounded-full'>
          <div
            id='progress-bar'
            className='h-2 bg-blue-500 rounded-full relative draggable'
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            <div className='h-full bg-blue-700 rounded-full'></div>
            <div className='w-4 h-4 bg-white border-2 border-blue-500 rounded-full absolute top-1/2 transform -translate-y-1/2'></div>
          </div>
        </div>
      </div>
      {/* Volume rocker */}
      <div className='flex items-center space-x-2'>
        <button>
          <RiVolumeUpFill className='h-6 w-6' />
        </button>
        <div className='w-28 bg-gray-300 rounded-full'>
          <div className='h-2 bg-blue-500 rounded-full relative draggable'>
            <div className='h-full bg-blue-700 rounded-full'></div>
            <div className='w-4 h-4 bg-white border-2 border-blue-500 rounded-full absolute top-1/2 transform -translate-y-1/2'></div>
          </div>
        </div>
      </div>
      {/* Playlist Controls */}
      <div className='flex items-center space-x-2'>
        <button>
          <RiShuffleFill className='h-6 w-6' />
        </button>
        <button>
          <RiRepeatFill className='h-6 w-6' />
        </button>
        <button>
          <RiPlayList2Fill className='h-6 w-6' />
        </button>
      </div>
    </div>
  );
};

export default BottomPlayer;
