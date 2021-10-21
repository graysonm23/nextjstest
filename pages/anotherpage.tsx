import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const AnotherPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Black Freelancer Another Page</title>
    <meta name="title" content="Black Freelancer Another Page" />
    <meta name="description"
      content="Creating a community of black freelancers, powered by the Solana blockchain. Spotlight your experiences get noticed, and land your dream job." />
    
    <meta property="og:type" content="website"/>
    <meta property="og:url" content="https://www.blackfreelancer.com"/>
    <meta property="og:title" content="Black Freelancer Another Page"/>
    <meta property="og:description"
      content="Creating a community of black freelancers, powered by the Solana blockchain. Spotlight your experiences get noticed, and land your dream job."/>
    <meta property="og:image"
      content="https://blackfreelancer-backend-stagin.herokuapp.com/uploads/images/site-meta-image.jpg"/>
    
    <meta property="twitter:card" content="summary_large_image"/>
    <meta property="twitter:url" content="https://www.blackfreelancer.com"/>
    <meta property="twitter:title" content="Black Freelancer Another Page"/>
    <meta property="twitter:description"
      content="Creating a community of black freelancers, powered by the Solana blockchain. Spotlight your experiences get noticed, and land your dream job."/>
    <meta property="twitter:image"
      content="https://blackfreelancer-backend-stagin.herokuapp.com/uploads/images/site-meta-image.jpg"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Another Page <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default AnotherPage
