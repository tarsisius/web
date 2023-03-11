import { LinkIcon } from 'lib/components/icons'
import Link from 'next/link'

export default function Projects() {
  return (
    <div className='flex flex-col space-y-6 items-start mt-10'>
      <Link
        href={'/s'}
        className='text-center sm:text-left px-8 sm:px-6 py-6 rounded-md border border-gray-800 shadow'
      >
        <div className='flex flex-col items-center space-y-2 sm:items-start'>
          <div className='flex gap-2 items-center'>
            <div className='font-bold'>votinghp.vercel.app</div>
            <a
              href='/'
              rel='noopener noreferrer'
              target='_blank'
              className='h-4 w-4 cursor-pointer fill-current focus:outline-none transition duration-300 ease-in-out hover:text-indigo-900 dark:hover:text-indigo-200'
            >
              <LinkIcon />
            </a>
          </div>
          <div className='text-gray-600 dark:text-gray-300'>
            Realtime app using nextjs 13 and firebase
          </div>
        </div>
      </Link>
    </div>
  )
}
