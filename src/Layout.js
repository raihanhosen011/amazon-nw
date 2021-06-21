import Header from './components/Header'

export default function Layout({children}) {
    return (
        <>
          <Header/>
          {children}
          <p className='footer' >Clone By <a target='_blank' href='https://www.facebook.com/raihanhosen01' >Raihan Hosen</a></p>
        </>
    )
}
