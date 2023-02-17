import React from "react"
import { Link } from "gatsby"
import ImageRightSection from "../../components/image-right-section"
import Content from "../../components/content.js";
import { RiArrowRightLine } from "react-icons/ri";


const ServicesPageBody = ({ title, subheading, image, serviceBoardItems, contactSectionTitle, contactSectionText, content, contentComponent }) => {
  const PageContent = contentComponent || Content;
  
  function mapBoardItemToHtml (item) {
    return (
      <div>
      <Link to={item.fields.slug}>
        {item.frontmatter.title}
        <span className="icon -right">
          <RiArrowRightLine />
        </span>
        <div style={{fontSize: "small"}}>{item.frontmatter.description}</div>
      </Link>
    </div>
    )
  }
  return (
    <div>
      <ImageRightSection TitleTag={"h1"} title={title} subheading={subheading} img={image} />
      

      <section>
        <div className="container is-fullhd mrb-container">
          <div className="board-wrapper">
            <div className="is-centered mb-5">
                <h3 className="has-text-weight-semibold is-size-4-mobile is-size-3-tablet is-size-2-widescreen is-color-white">
                  Oferujemy
                </h3>
              </div>
            <div className="board-items">
            {serviceBoardItems?.map(x => mapBoardItemToHtml(x.node))}
            </div>
          </div>
        </div>
      </section>


      <PageContent className="content" content={content} />
      <section>
        <div className="container is-fullhd mrb-container">
            <div className="is-centered">
              <h3 className="has-text-weight-semibold is-size-4-mobile is-size-3-tablet is-size-2-widescreen is-color-primary-green">
                {contactSectionTitle}
              </h3>
            </div>
            <div className="is-centered">
              {contactSectionText}
            </div>
            <div className="mt-3 buttons is-centered">
              <Link className="button mrb-button mrb-button-light" to="/contact">
                Kontakt
              </Link>
            </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPageBody;