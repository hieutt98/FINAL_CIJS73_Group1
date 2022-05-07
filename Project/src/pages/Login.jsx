import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {mobile} from "../responsive";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import InputView from "../components/form-control/InputView";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from "../redux/userSlicde";
import { useDispatch } from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const dispatch =useDispatch();
  const navigate = useNavigate();
  const HandleToRegister = ()=>{
    navigate('/register');
  }
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Please enter username")
      .min(5, "Too short"),

    password: yup.string().required("Please enter Password"),
  });
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(schema)
  });
  const HandleSubmit = async (values) => {
    toast.success("Đăng nhập thành công");
    const Login = login({
      id:1,
      username:values.username,
      password:values.password
    })
    dispatch(Login)
    setTimeout(()=>{navigate("/")},2000)

  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={form.handleSubmit(HandleSubmit)}>
          <InputView name="username" type="text" form={form} placeholder="username" />
          <InputView name="password" type="password" form={form} placeholder="password" />
          <Button>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link onClick={HandleToRegister}>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
      <ToastContainer/>
    </Container>
  );
};

export default Login;
