import { useForm } from "react-hook-form";
import styled from "styled-components";
import { mobile } from "../responsive";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputView from "../components/form-control/InputView";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { register } from "../redux/userSlicde";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
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
  flex-wrap: wrap;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const dispatch = useDispatch()
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Please enter username")
      .min(5, "Too short"),

    password: yup.string().required("Please enter Password"),

    name: yup.string().required("Please enter name"),
    lastname: yup.string().required("Please enter Lastname"),
    email: yup
      .string()
      .required("Please enter email")
      .min(5, "Too short")
      .email("Please enter valid address your email"),
    retypePassword: yup
      .string()
      .required("Please enter RetypePassword")
      .oneOf([yup.ref("password")], "Your password was wrong"),
  });
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
      name: "",
      lastname: "",
      email: "",
      retypePassword: "",
    },
    resolver: yupResolver(schema),
  });
  const HandleSubmit = async (values) => {
    toast.success("Đăng ký thành công");
    const regis = register({
      id:1,
      username:"abc",
      password:"123456"
    })
    dispatch(regis)
  };
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={form.handleSubmit(HandleSubmit)}>
          <InputView name="name" type="text" placeholder="name" form={form} />
          <InputView
            name="lastname"
            type="text"
            placeholder="last name"
            form={form}
          />
          <InputView
            name="username"
            type="text"
            placeholder="username"
            form={form}
          />
          <InputView name="email" type="text" placeholder="email" form={form} />
          <InputView
            name="password"
            type="password"
            placeholder="password"
            form={form}
          />
          <InputView
            name="retypePassword"
            type="password"
            placeholder="confirm password"
            form={form}
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="submit">CREATE</Button>
        </Form>
      </Wrapper>
      <ToastContainer />
    </Container>
  );
};

export default Register;
