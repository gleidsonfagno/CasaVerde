import './App.css'
import { Infocarde } from './components/Infocard'
import { Menu } from './components/Menu'
import { Newsletter } from './components/Newsletter'
import { Ofertas } from './components/Ofertas'


export function App() {

  return (
      <main>
      <Menu />
      <Newsletter />
      <Infocarde />
      <Ofertas />
      </main>
  )
}
