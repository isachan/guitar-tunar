import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-[calc(100vh-63px)] flex-col items-center justify-between px-4'>
      <div className='py-10'>
        <h1 className='text-2xl font-bold'>Welcome!</h1>
        <h2 className='text-xl font-semibold'>Ever wanted to learn how to play the guitar?</h2>
        <h2 className='text-lg font-semibold'>Or playing for the CG / any large settings for the first time?</h2>
        <h3 className='text-md'>Fear not, for this mini-guide should be able to help kickstart your guitar journey (more musical instruments to come if time permits)</h3>
        <br />
        <ul>
          <li>Feel free to click on the bottom nav to navigate to any features</li>
          <li>Feel free to use this tool to be a better CG Guitarist in your own time</li>
        </ul>
      </div>
    </main>
  );
}
