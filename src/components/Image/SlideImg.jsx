import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const SlideImage = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fixed(width: 350) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

      if (!image) return null;

      const imageFixed = image.node.childImageSharp.fixed;
      // return <div alt={alt} data-src={imageFixed} />;
      return <Img className="rounded shadow-lg" alt={alt} fixed={imageFixed} />;
    }}
  />
);

SlideImage.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default SlideImage;


// const SlideImage = ({ filename, alt, index }) => {

//   console.log(filename, `testing`)

//   return (
//     <StaticQuery
//       query={graphql`
//       query {
//         images: allFile {
//           edges {
//             node {
//               relativePath
//               publicURL
//             }
//           }
//         }
//       }      
//     `}
//       render={(data) => {

//         console.log(data.images);
//         const image = _.find(data.images.edges, { filename })
//         // const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));
//         const path = image.node.publicURL;
//         // console.log(path)

//         // if (!image) return null;

//         // const imageFluid = image.node.childImageSharp.fluid;
//         // return <Img alt={alt} fluid={imageFluid} />;

//         return <div alt={alt} data-src={path} />;
//       }}
//     />
//   );
// }

// SlideImage.propTypes = {
//   filename: PropTypes.string,
//   alt: PropTypes.string,
// };

// export default SlideImage;
