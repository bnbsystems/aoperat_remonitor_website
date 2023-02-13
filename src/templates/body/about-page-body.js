import React from "react"
import {Link } from "gatsby"
import aoperatLogoHor from "../../assets/logo/aoperat-logo-hor.svg";
import ImageRightSection from "../../components/image-right-section"
import Content from "../../components/content.js";

const AboutPageBody = ({title, subheading, image, content, contentComponent}) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <ImageRightSection TitleTag={"h1"} title={title} subheading={subheading} img={image} />
      <div className="mt-5 buttons is-centered">
        <Link className="button mrb-button mrb-button-light" to="/services">
          Sprawdź naszą ofertę
        </Link>
      </div>
      <div className="container is-fullhd mrb-container">
        <h3 className="has-text-weight-semibold is-size-4-mobile is-size-3-tablet is-size-2-widescreen is-color-primary-green">
          Współpracujemy z
        </h3>
        <div className="mt-3">
          <Link to="https://aoperat.pl/" title="AOperat">
            <img objectFit={"fill"} aspectratio={2 / 1} src={aoperatLogoHor} alt="AOperat" className="mrb-logo-wide" />
          </Link>
        </div> 
        <br/>
        <p className="mt-5">
          AOperat to firma tworząca platformę łączącą klientów i rzeczoznawców. Klienci tworzą zlecenia pod którymi rzeczoznawcy składają oferty realizacji.
          Wybrany przez klienta rzeczoznawca zajmuje się później realizacją zlecenia.
        </p>
      </div>
    </div>
  )
}

export default AboutPageBody;