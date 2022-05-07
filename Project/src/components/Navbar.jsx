import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React, { useContext } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useNavigate } from "react-router-dom";
import Cart from "../pages/Cart";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlicde";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })};
  outline: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const CountItem = useSelector((state) => state.cart.cartItems.length);
  const userID = useSelector((state) => state.user.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const HandletoCart = () => {
    navigate("/Cart");
  };

  const HandleToRegister = () => {
    navigate("/register");
  };

  const HandleToLogin = () => {
    navigate("/login");
  };

  const HandleToHome = () => {
    navigate("/");
  };

  const HandleToProduct = () => {
    navigate("/product");
  };

   const HandleToLogout = () =>{
      const Logout = logout()
      dispatch(Logout)
   }
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo style={{ cursor: "pointer" }} onClick={HandleToHome}>
            LAMA.
          </Logo>
        </Center>
        <Right>
          <MenuItem onClick={HandleToProduct}>PRODUCT</MenuItem>
          {userID == "" ? (
            <>
              <MenuItem onClick={HandleToRegister}>REGISTER</MenuItem>
              <MenuItem onClick={HandleToLogin}>SIGN IN</MenuItem>
            </>
          ) : (
            <MenuItem onClick={HandleToLogout}>SIGN OUT</MenuItem>
          )}
          <MenuItem>
            <Badge badgeContent={CountItem} color="primary">
              <ShoppingCartOutlined onClick={HandletoCart} />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
