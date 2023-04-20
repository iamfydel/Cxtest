import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import Header from './header'
import Top from '../pages/top'

export default function Layout({ preview, children }:any) {
  return (
    <>
      <Meta />
      <Header></Header>      
      <Top></Top>
      <Footer />
    </>
  )
}
