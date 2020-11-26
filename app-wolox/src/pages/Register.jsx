import React from 'react';
import { connect } from 'react-redux';
import { createUser } from '../redux/actions/userActions';

import '../css/styles.css';

export class NewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      lastName: '',
      address: '',
      country: '',
      state: '',
      phone: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const user = this.state;
    createUser(user)
      .then((res) => {
        console.info(res);
      })
      .catch((err) => console.error(err));
  }

  comparaPassword() {
    const { password, repeatPassword } = this.state;
    if (!password || !repeatPassword) {
      alert('Por favor complete los campos');
    }
    if (password !== repeatPassword) {
      alert('Las contraseñas no coinciden');
      return false;
    }
    return true;
  }

  render() {
    const { address, country, email, name, lastName, phone, state } = this.state;
    return (
      <div className="register">
        <h3>Registrate en Wolox</h3>
        <form onSubmit={this.handleSubmit}>
          <section className="register-form">
            <div>
              <label>Nombre:</label>
              <input type="text" id="name" placeholder="Ej: Juan..." maxLength="30" name="name" onChange={this.handleChange} value={name} required />
            </div>
            <div>
              <label>Apellido:</label>
              <input type="text" id="lastName" placeholder="Ej: Perez..." maxLength="30" name="lastName" onChange={this.handleChange} value={lastName} required />
            </div>
            <div>
              <label>Correo:</label>
              <input type="email" id="email" name="email" placeholder="Ej: nombre@mail.com..." onChange={this.handleChange} value={email} required />
            </div>
            <div>
              <label>Telefono:</label>
              <input type="number" id="phone" name="phone" maxLength="10" placeholder="Ej: 1122225555..." onChange={this.handleChange} value={phone} required />
            </div>
            <div>
              <label>Pais:</label>
              <input type="text" id="country" name="country" placeholder="Ej: Argentina..." onChange={this.handleChange} value={country} required />
            </div>
            <div>
              <label>Provincia/Estado:</label>
              <input type="text" id="state" name="state" placeholder="Ej: Juan...Buenos Aires" onChange={this.handleChange} value={state} required />
            </div>
            <div>
              <label>Dirección:</label>
              <input type="text" id="address" name="address" placeholder="Ej: Av. Corrientes 25856" onChange={this.handleChange} value={address} required />
            </div>
            <div>
              <label>Contraseña:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Debe tener 1 mayuscula, una minuscula y 1 numero"
                maxLength="6"
                // pattern="/^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/"
                onChange={this.handleChange}
                // value={password}
                required
              />
            </div>
            <div>
              <label>Repetir contraseña:</label>
              <input
                type="password"
                id="repeatPassword"
                name="repeatPassword"
                placeholder="Debe tener 1 mayuscula, una minuscula y 1 numero"
                maxLength="6"
                // pattern="/^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/"
                onChange={this.handleChange}
                // value={repeatPassword}
                required
              />
            </div>
          </section>
          <section className="buttons">
            <a className="return" href="/">
              Volver
            </a>
            <button className="send" type="submit" onSubmit={this.handleSubmit}>
              Registrarse
            </button>
          </section>
        </form>
      </div>
    );
  }
}
function mapStateToProps() {
  return {};
}
function mapDispatchToProps(dispatch) {
  return {
    createUser: (user) => dispatch(createUser(user)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(NewUser);
