/** @jsx jsx */
import { jsx } from "theme-ui"
import { GatsbyImage } from "gatsby-plugin-image"
import Content from "../../components/content"

const ServiceBoardItemBody = ({title, image, content, contentComponent}) => {
  const PostContent = contentComponent || Content;
  
  return (
    <div className="container content mrb-blog-container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <header className="featured-banner">
              {image ? (
                image?.url ?
                <img
                src={image}
                objectFit={"cover"}
                style={{
                  // You can set a maximum height for the image, if you wish.
                  width:"100%",
                  maxHeight:"400px"
                }}
                className="mrb-blog-thumbg"
                // You can optionally force an aspect ratio for the generated image
                aspectratio={3 / 1}
                // This is a presentational image, so the alt should be an empty string
                alt=""
                formats={["auto", "webp", "avif"]}
                />:
                <GatsbyImage
                  image={image}
                  alt={""}
                  style={{
                    // You can set a maximum height for the image, if you wish.
                    width:"100%",
                    maxHeight:"400px"
                  }}
                  aspectratio={3 / 1}
                  layout="fullWidth"
                  objectFit={"cover"}
                />
              ) : (
                ""
              )}
            </header>
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light is-color-primary-green">
              {title}
            </h1>

            <section>
            <PostContent content={content} />
            </section>
          </div>
        </div>
      </div>
  )
}

export default ServiceBoardItemBody;