
import { Contacto } from '../../module/Contacto.class'
import ContactosComponent from '../pure/Contactos'
const ListContactos = (props) => {
  const defaultContacto = new Contacto('Adrian', 'Campos', 'adrian@gmail.com', true)
  return (
    <>
      <h2>Lista de contactos</h2>
      <ContactosComponent contacto={defaultContacto}> </ContactosComponent>
    </>
  )
}

ListContactos.propTypes = {}

export default ListContactos
