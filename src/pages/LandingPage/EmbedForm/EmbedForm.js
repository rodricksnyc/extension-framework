import React, { useState, useContext, useEffect } from "react";
import { Accordion, AccordionButton, AccordionCollapse, AccordionContext, Alert, Anchor, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Card, CardGroup, CardImg, Carousel, CarouselItem, CloseButton, Col, Collapse, Container, Dropdown, DropdownButton, Fade, Figure, FloatingLabel, Form, FormCheck, FormControl, FormFloating, FormGroup, FormLabel, FormSelect, FormText, Image, InputGroup, ListGroup, ListGroupItem, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, Nav, NavDropdown, NavItem, NavLink, Navbar, NavbarBrand, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Overlay, OverlayTrigger, PageItem, Pagination, Placeholder, PlaceholderButton, Popover, PopoverBody, PopoverHeader, ProgressBar, Ratio, Row, SSRProvider, SplitButton, Stack, Tab, TabContainer, TabContent, TabPane, Table, Tabs, ThemeProvider, Toast, ToastBody, ToastContainer, ToastHeader, ToggleButton, ToggleButtonGroup, Tooltip} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import "../../../styles.css";
;
import ProductMovement from "./ProductMovement";
import ToTopButton from './ToTopButton.js';
import NavbarMain from "./NavbarMain";

import { EmbedExplore } from "../EmbedExplore/EmbedExplore";
import { EmbedMultiExplores } from "../EmbedMultiExplores/EmbedMultiExplores";
import { ExtensionContext } from "@looker/extension-sdk-react";
import { connection, scratch_schema } from "../../../utils/writebackConfig";

export const EmbedForm = ({saveClicked, setSaveClicked}) => {
const { extensionSDK, core40SDK } = useContext(ExtensionContext);
const [message, setMessage] = useState();
const [show, setShow] = useState(false);

    return (
    <>
<NavbarMain/>
      <Container fluid className="mt-50 padding-0">
        <div className="largePadding">
         <div id="landingTabs">
          <Tabs
          defaultActiveKey="dashboard"
          className="mb-3"
          fill
          >
          <Tab eventKey="dashboard" title="Dashboard">
          </Tab>

          <Tab eventKey="product-movement" title="Product Movement Report">
          <ProductMovement/>
          </Tab>
          <Tab eventKey="invoice" title="Invoice Report">

          </Tab>
          <Tab eventKey="auto-sub" title="Auto Sub Report">

          </Tab>
          <Tab eventKey="id" title="Inflation/Deflation Report">

          </Tab>
        </Tabs>
        </div>
      </div>
    </Container>
  <ToTopButton />

        </>
        )
      };
