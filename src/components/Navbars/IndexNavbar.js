import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Modal,
  ModalBody,
  Form,
  Row,
  Col,
} from "reactstrap";
import useLogout from "Utils/useLogout";
import { AuthContext } from "Context/AuthProvider";
function IndexNavbar() {

  const { auth } = useContext(AuthContext);

  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [modal1, setModal1] = React.useState(false);
  const logout = useLogout();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top "} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="/"
              target="_blank"

            >
              <Link
                to='/'
                id="navbar-brand"
              >
                Innoscripta
              </Link>

            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              {
                auth.name ?
                  <>
                    <NavItem>
                      <NavLink
                      >
                        <i className="now-ui-icons users_circle-08"></i>
                        {auth.name}
                      </NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav>
                      <DropdownToggle
                        caret
                        color="default"
                        href="#pablo"
                        nav
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="now-ui-icons ui-1_settings-gear-63"></i>
                        <p>Settings</p>
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem onClick={() => setModal1(true)} tag={Link}>
                          <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                          Preferences
                        </DropdownItem>
                        <DropdownItem tag={Link}>
                          <Button
                            color="primary"
                            className="mr-1"
                            onClick={handleLogout}
                          >
                            <i className="now-ui-icons ui-1_send mr-1"></i>
                            Logout
                          </Button>

                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </>
                  :

                  <NavItem>
                    <NavLink
                      href="/login"
                    >
                      <i className="now-ui-icons users_circle-08"></i>
                      Login
                    </NavLink>
                  </NavItem>
              }


            </Nav>
          </Collapse>
        </Container>
      </Navbar>

      <Modal isOpen={modal1} toggle={() => setModal1(false)}>
        <div className="modal-header justify-content-center">
          <button
            className="close"
            type="button"
            onClick={() => setModal1(false)}
          >
            <i className="now-ui-icons ui-1_simple-remove"></i>
          </button>
          <h4 className="title title-up">Preferences Setting</h4>
        </div>
        <ModalBody>
          <Form>
            <Row>
              <Col>
              
              </Col>
            </Row>
          </Form>
          <p>
            Far far away, behind the word mountains, far from the
            countries Vokalia and Consonantia, there live the blind
            texts. Separated they live in Bookmarksgrove right at the
            coast of the Semantics, a large language ocean. A small
            river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in
            which roasted parts of sentences fly into your mouth.
          </p>
        </ModalBody>
        <div className="modal-footer">
          <Button
            color="danger"
            type="button"
            onClick={() => setModal1(false)}
          >
            Close
          </Button>
          <Button color="default" type="button">
            Save Preferences
          </Button>

        </div>
      </Modal>
    </>
  );
}

export default IndexNavbar;
