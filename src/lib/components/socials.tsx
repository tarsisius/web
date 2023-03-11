import { EmailIcon, GithubIcon } from 'lib/components/icons'

export default function Socials() {
  return (
    <div className='grid grid-flow-col w-24 text-lg mt-5'>
      <a
        className='h-4 w-4 cursor-pointer fill-current focus:outline-none transition duration-300 ease-in-out hover:text-indigo-900 dark:hover:text-indigo-200'
        href='https://github.com/tarsisius'
        rel='noopener noreferrer'
        target='_blank'
      >
        <GithubIcon />
      </a>
      <a
        className='h-4 w-4 cursor-pointer fill-current focus:outline-none transition duration-300 ease-in-out hover:text-indigo-900 dark:hover:text-indigo-200'
        href='mailto:tarsisiushp@gmail.com'
        rel='noopener noreferrer'
        target='_blank'
      >
        <EmailIcon />
      </a>
    </div>
  )
}
