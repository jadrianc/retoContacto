
import { useState } from 'react'
import { Contacto } from '../../module/Contacto.class'
import ContactosComponent from '../pure/Contactos'
const ListContactos = (props) => {
  const defaultContacto = new Contacto('Adrian', 'Campos', 'adrian@gmail.com', false)

  const [contacto, setContacto] = useState(defaultContacto)
  const onLogin = () => {
    setContacto({ ...contacto, connect: !contacto.connect })
  }
  return (
    <>
      <h2>Lista de contactos</h2>
      <ContactosComponent contacto={contacto}> </ContactosComponent>
      <button onClick={onLogin}> {contacto.connect ? 'Logout' : 'login'} </button>
    </>
  )
}

ListContactos.propTypes = {}

export default ListContactos
