import { useState } from "react"
import Field from "../sections/login/Field"
import Form from "../sections/login/Form"
import Submit from "../sections/login/Submit"
import Logo from "../sections/login/Logo"
import logo from "../../img/login.png"



const Login = () => {
    const [data, setData] = useState ({ email: "", password: "" })
    const changeData = e => {
      setData({
        ...data,
        [e.target.name]: e.target.value
      })
    }
  
    const submit = e => {
      e.preventDefault()
      console.log(data)
      console.log('Bienvenuto al sistema')
      alert('Benvenuto al sistema')
    }

    return(
        <Form submit={ submit }>
            <Logo logoImg={ logo } alternative="Logo login" />
            <Field type="email" value={data.email} label="Correo electrónico" change={ changeData } />
            <Field type="password" value={data.password} label="Contraseña" change={ changeData } />
            <Submit value="Ingresar"/>
        </Form>
    )
}

export default Login;