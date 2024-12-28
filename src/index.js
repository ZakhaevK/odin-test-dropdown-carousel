import "./style.css";
import { initialiseDropdown } from "./dropdownHelper.js";
import { initialiseArrows, initialiseDots } from "./carouselHelper.js";

const dropDown = document.getElementById("nav1")

initialiseDropdown(dropDown);
initialiseDots();
initialiseArrows();

