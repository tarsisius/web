import Projects from 'lib/components/projects'
import Socials from 'lib/components/socials'

export default function Home() {
  return (
    <>
      <p className='text-gray-600 dark:text-gray-400 mt-5'>
        <span className='font-semibold'>software developer</span> from
        Indonesia.
      </p>
      <Socials />
      {/* <Projects /> */}
    </>
  )
}
