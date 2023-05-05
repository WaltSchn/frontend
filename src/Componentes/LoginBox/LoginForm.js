import { useNavigate } from "react-router-dom";
import './LoginForm.css'
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Container, TextField } from "@mui/material";
import logo from '../../Imagens/logo.png'

function LoginForm() {

    const verificacaoLogin = Yup.object().shape({
        email: Yup.string().email("*Campo invalido").required("*Campo obrigatorio"),
        password: Yup.string().required("*Campo obrigatorio")
    })

    const navigate = useNavigate();
    const goToTickets= () => {
        navigate("/home")
    }

    const onClickLogin = (values) => {
        console.log('dentro de OnlickLogin', values)
        if (verificacaoLogin ) { //ALTERAR
            setTimeout(() => {
                goToTickets();
              }, 4000)
        }
    }
    return (
        <div>
            <Container component="main" maxWidth="xs" className="loginContainer">
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    validationSchema={verificacaoLogin}
                    onSubmit={onClickLogin}
                >
                    {(formik) => {
                        const { setFieldValue, values } = formik;
                        return (
                            <Form>
                                <div className="formContainer">
                                    <div>
                                        <img src={logo} alt="Fipazon" />
                                    </div>
                                    <h1 className="h1"> Login </h1>
                                    <div className="textBox">
                                        <TextField
                                            required
                                            id="outlined-basic"
                                            variant="outlined"
                                            size="small"
                                            margin="normal"
                                            autoComplete="email"
                                            label="Email Address"
                                            fullWidth
                                            autoFocus
                                            value={values.email}
                                            onChange={(e) => setFieldValue("email", e.target.value)}
                                        />
                                    </div>
                                    <span>
                                        <ErrorMessage
                                            className="errorMessage"
                                            name="email"
                                            component="div"
                                        />
                                    </span>
                                    <div className="textBox">
                                        <TextField
                                            required
                                            id="outlined-basic"
                                            variant="outlined"
                                            size="small"
                                            margin="normal"
                                            autoFocus
                                            label="Password"
                                            fullWidth
                                            value={values.password}
                                            onChange={(e) => setFieldValue("password", e.target.value)}
                                        />
                                    </div>
                                    <span>
                                        <ErrorMessage
                                            className="errorMessage"
                                            name="password"
                                            component="div"
                                        />
                                    </span>
                                    <Button className="loginBTN"
                                        type="submit"

                                        variant="contained"
                                        color="primary">
                                        Login
                                    </Button>
                                </div>
                            </Form>
                        )
                    }}

                </Formik>
            </Container>
        </div>
    )
}
export default LoginForm