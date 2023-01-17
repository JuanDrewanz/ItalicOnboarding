import Head from 'next/head';
import { Inter } from '@next/font/google';
import Link from 'next/link';
import { User } from '../src/__generated__/graphql';
import { useAuth } from '../src/context/authContext';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>eMall</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='content-center justify-center bg-teal-100'>
        <div className='content-center justify-center'>
          <section>
            <div className='bg-black text-white py-20 h-screen'>
              <div className='container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24'>
                <div className='flex flex-col w-full lg:w-1/3 justify-center items-center p-8'>
                  <h1 className='text-3xl md:text-5xl p-2 text-teal-500 tracking-loose'>
                    eMall
                  </h1>
                  <h2 className='text-3xl md:text-5xl text-center leading-relaxed md:leading-snug mb-2'>
                    Enjoy your shopping time
                  </h2>
                  <p className='text-sm md:text-base text-center text-gray-50 mb-4'>
                    Explore our catalog and discover great deals. Register now
                    to enhance your experience
                  </p>
                  <div className='flex flex-col w-full text-center'>
                    <Link
                      href='/CategoriesHome'
                      className='m-2 bg-transparent w-full hover:bg-teal-300 text-teal-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-teal-300 hover:border-transparent'
                    >
                      Explore
                    </Link>
                    <Link
                      href='/login'
                      className='m-2 w-full bg-transparent hover:bg-white text-white-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-white-300 hover:border-transparent'
                    >
                      Login
                    </Link>
                  </div>
                </div>
                <div className='p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center'>
                  <div className='h-48 flex flex-wrap content-center'>
                    <div>
                      <img
                        className='inline-block mt-24 md:mt-0 p-8 md:p-0 rounded-lg'
                        src='https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
