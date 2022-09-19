import React from "react";
import { Banner, StyledHeader } from "./styled";
import { ReactComponent as U } from "assets/texts/u.svg";
import { ReactComponent as D } from "assets/texts/d.svg";
import { ReactComponent as X } from "assets/texts/x.svg";
import { ReactComponent as Forward } from "assets/icons/arrowForward.svg";
import { ReactComponent as Search } from "assets/icons/search.svg";
import { ReactComponent as Backward } from "assets/icons/arrowBack.svg";
import { ReactComponent as OmahLay } from "assets/images/omah-lay.svg";
import Icon from "components/icon";

const Header = () => {
  return (
    <StyledHeader>
      <div className="header-container">
        <button>
          <Icon IconComp={Backward} />
        </button>
        <button>
          <Icon IconComp={Forward} />
        </button>
        <div className="input-wrapper">
          <label>
            <Icon IconComp={Search} />
          </label>
          <input type={"text"} />
        </div>
      </div>
      <Banner>
        <div className="udux">
          <U />
          <D />
          <U />
          <X />
        </div>
        <div className="omah-lay">
          <OmahLay />
        </div>
      </Banner>
    </StyledHeader>
  );
};

export default Header;
