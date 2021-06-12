import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import {Downloadicons , Downloadiconsgreen} from '../components/icons/fether';
import Buttondownload from '../components/button'
import React from 'react'

const index = () => {
  return (
    <>
      <Head>
        <title>Rocky Linux</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <main className="">
        <div className="flex justify-center items-center py-9">
          <div>
            <h1 className="text-6xl flex justify-center font-bold text-white">Rocky Linux</h1>
            <p className="text-gray-400 mt-6 flex justify-center text-lg">A community-driven effort to bring you enterprise-grade, production-ready Linux.</p>
            <div className="flex justify-center mt-8">
              <button className="font-bold bg-green-500 text-black px-3 py-2 hover:bg-green-400 rounded-lg flex"><Downloadicons/><div className="ml-1">Download</div></button>
              <button className="font-bold ml-4 bg-transparent border border-green-500 text-green-500 hover:text-black hover:bg-green-400 px-3 py-2 rounded-lg flex"><Downloadiconsgreen/><div className="ml-1">Join the Discussion</div></button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 bg-gray-800 gap-4 rounded-lg mx-12 text-white p-11">
          <div className="text-5xl  font-bold ">What is the Rocky Linux project?</div>
          <div className="p-4 text-lg text-gray-300">Rocky Linux is a community enterprise operating system designed to be 100% bug-for-bug compatible with America's top enterprise Linux distribution now that its downstream partner has shifted direction. It is under intensive development by the community. Rocky Linux is led by Gregory Kurtzer, founder of the CentOS project. Release Candidate 1 is now available for testing. Contributors are asked to reach out using the communication options offered on this site.</div>

        </div>
        <div>
          <Buttondownload href="/news"/>
       </div>
      </main>
    </>
  )
}

export default index


// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//       <Navbar />
//         <h1 className={styles.title}>
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing{' '}
//           <code className={styles.code}>pages/index.js</code>
//         </p>

//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h2>Documentation &rarr;</h2>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h2>Learn &rarr;</h2>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/master/examples"
//             className={styles.card}
//           >
//             <h2>Examples &rarr;</h2>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//           >
//             <h2>Deploy &rarr;</h2>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <span className={styles.logo}>
//             <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//           </span>
//         </a>
//       </footer>
//     </div>
//   )
// }
