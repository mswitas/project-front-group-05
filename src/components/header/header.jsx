import {
   HeaderBorder,
   LogoHeader,
   LogoWebFont,
   NavMenu,
} from "../header/header.styled";

import icons from "../../assets/icons.svg";

export const render = (
   <header className="header-border">
      <div class="container">
         <nav class="nav-header">
            <a href="./" rel="noreferrer noopener" class="logo"
            ><span class="logo-kapusta-font">Kapusta</span>
            </a>
            <svg class="logo-header" width="90" height="31">
            <use href="../../assets/icons.svg"></use>
          </svg>
         </nav>         
      </div>

   </header>
)
export default render;