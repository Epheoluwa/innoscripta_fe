import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
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
  UncontrolledTooltip,
  Modal,
  ModalBody,
} from "reactstrap";

function IndexNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [modal1, setModal1] = React.useState(false);
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
                  <DropdownItem to="/index" tag={Link}>
                    <Button
                      color="primary"
                      className="mr-1"

                    >
                      <i className="now-ui-icons ui-1_send mr-1"></i>
                      Logout
                    </Button>

                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              {/* <NavItem>
                <NavLink
                  href="https://twitter.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="now-ui-icons users_circle-08"></i>
                  Login
                </NavLink>
              </NavItem> */}
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
          <h4 className="title title-up">Modal title</h4>
        </div>
        <ModalBody>
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
          <Button color="default" type="button">
            Nice Button
          </Button>
          <Button
            color="danger"
            type="button"
            onClick={() => setModal1(false)}
          >
            Close
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default IndexNavbar;
