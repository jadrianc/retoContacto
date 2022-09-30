
import PropTypes from 'prop-types'
import { Contacto } from '../../module/Contacto.class'

const ContactosComponent = ({ contacto }) => {
  return (
    <>
      <h3>Contacto</h3>
      <p>{contacto.name}</p>
      <p>{contacto.lastName}</p>
      <p>{contacto.email}</p>
      {
        contacto.connect ? <p>Contacto En Línea</p> : <p>Contacto No Disponible</p>
      }
    </>
  )
}

ContactosComponent.propTypes = {
  contacto: PropTypes.instanceOf(Contacto)
}

export default ContactosComponent
