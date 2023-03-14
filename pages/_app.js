import '../styles/globals.scss'
import MainLayout from '../layouts/mainLayout'
import { Nav, Footer } from '../components/global/index'
import { useRouter } from "next/router";
import ParticleBG from '../components/particle/particleBackground'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      {/* <ParticleBG /> */}
      {router.pathname === "/" ? (
        <>
          <Nav />
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
          <Footer />
        </>
      ) : (
        <>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>

        </>
      )}
    </>
  )
}

export default MyApp
