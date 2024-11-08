// import React, { useEffect, useState } from 'react';
import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';




function Header() {
  // const dispatch = useDispatch();
  // const [wishlistCount, setWishlistCount] = useState(0);
  // const [cartCount, setCartCount] = useState(0);
  // const { wishlist } = useSelector((state) => state.wishlistReducer.wishlist);
  // const cart = useSelector((state) => state.cartReducer);

  // // Assuming insideHome is a boolean state or some condition
  // const insideHome = true; // You can change this logic based on your requirements

  // useEffect(() => {
  //   setWishlistCount(wishlist?.length);
  //   setCartCount(cart.length);
  // }, [wishlist, cart]);

  return (
    <div>
      <Navbar expand="lg" className="bg-dark top-0 w-100 position-fixed" style={{ zIndex: 1 }}>
        <Container>
          <Navbar.Brand>
            <Link to="/" style={{ color: "white", fontWeight: "bold", textDecoration: "none" }}>
              <i className="fa-solid fa-truck-fast fa-bounce"></i> Project-Fair
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>

          <Nav className="ms-auto">
              {/* <Nav.Link>
                <div>
                  <input
                    onChange={(e) => dispatch(searchProduct(e.target.value.toLowerCase()))}
                    type="text"
                    className="form-control"
                    placeholder="Search products"
                    style={{ width: '200px' }}
                  />
                </div>
              </Nav.Link> */}
            
            
           
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}


export default Header;
