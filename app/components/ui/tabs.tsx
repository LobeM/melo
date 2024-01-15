'use client';

import clsx from 'clsx';
import { MouseEvent, ReactNode, useState } from 'react';

export function Tab({
  label,
  children,
  ...props
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className='hidden' data-label={label} {...props}>
      {children}
    </div>
  );
}

export function Tabs({ children, ...props }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState(
    children instanceof Array && children[0].props.label
  );

  const handleClick = (
    e: MouseEvent<HTMLButtonElement>,
    newActiveTab: string
  ) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div {...props}>
      <div className='sm:hidden'>
        <label htmlFor='tabs' className='sr-only'>
          Select a tab
        </label>
        <select
          id='tabs'
          name='tabs'
          className='block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
        >
          {children instanceof Array &&
            children.map((child) => (
              <option key={child.props.label} value={child.props.label}>
                {child.props.label}
              </option>
            ))}
        </select>
      </div>
      <div className='hidden sm:block'>
        <div className='boarder-b border-gray-200'>
          <nav className='-mb-px flex space-x-8' aria-label='Tabs'>
            {children instanceof Array &&
              children.map((child) => (
                <button
                  key={child.props.label}
                  className={clsx(
                    activeTab === child.props.label
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                    'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium'
                  )}
                  onClick={(e: MouseEvent<HTMLButtonElement>) =>
                    handleClick(e, child.props.label)
                  }
                >
                  {child.props.label}
                </button>
              ))}
          </nav>
          <div className='py-4'>
            {children instanceof Array &&
              children.map((child) => {
                if (child.props.label == activeTab) {
                  return (
                    <div key={child.props.label}>{child.props.children}</div>
                  );
                }
                return null;
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
