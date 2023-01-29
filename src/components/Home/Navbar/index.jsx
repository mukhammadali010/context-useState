import React, { useContext } from "react";
import { Drawer } from "antd";
import { useState } from "react";
import { Container, SidebarWrapper } from "./style";
import { ProductsContext } from "../context/Products/index";
const Navbar = () => {
  const [state, dispatch] = useContext(ProductsContext);
  console.log(state.product, "Navbar context");

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <Container>
      <h1>Products</h1>
      <p onClick={showDrawer}>Cart({state.cart.length})</p>
      <Drawer
        style={{ color: "black" }}
        title="Title"
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
        getContainer={false}
      >
        {state.cart.map((value) => {
          return (
            <div key={value.id}>
              <SidebarWrapper>
                <table width={'100%'} >
                 
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src={value.image}
                          alt=""
                          style={{ width: "50px", height: "50px" }}
                        />
                      </td>
                      <td> {value.title}</td>
                      <td>
                         Price : {value.price}
                      </td>
                      <td>
                         Total : {Math.round(value.price * value.count)}
                      </td>
                      <td>
                        <p>Quantity({value.count})</p>{" "}
                      </td>
                      <td>
                        <button
                          className="dec"
                          onClick={() =>
                            dispatch({ type: "DEC", payload: { id: value.id } })
                          }
                        >
                          -
                        </button>
                      </td>
                      <td>
                        <button
                          className="inc"
                          onClick={() =>
                            dispatch({ type: "INC", payload: { id: value.id } })
                          }
                        >
                          +
                        </button>
                      </td>
                      <td>
                        <button
                          className="remove"
                          onClick={() =>
                            dispatch({
                              type: "DELETE-CART",
                              payload: { id: value.id },
                            })
                          }
                        >
                          Remove item
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </SidebarWrapper>
            </div>
          );
        })}
      </Drawer>
    </Container>
  );
};

export default Navbar;
