import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";

import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpeg";
import img4 from "../img/4.jpg";
import img5 from "../img/5.jpg";
import img6 from "../img/6.jpg";
import img7 from "../img/7.jpg";
import img8 from "../img/8.jpg";
import img9 from "../img/9.jpg";

export const Gallery = (props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const data = [
    { thumb: img1, title: "" },
    { thumb: img2, title: "" },
    { thumb: img3, title: "" },
    { thumb: img4, title: "" },
    { thumb: img5, title: "" },
    { thumb: img6, title: "" },
    { thumb: img7, title: "" },
    { thumb: img8, title: "" },
    { thumb: img9, title: "" },
  ];

  const images = data.map((obj) => obj.thumb.replace("-small", "-large"));

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>Berikut adalah beberapa foto product dari kedai kami.</p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {data.map(({ title, thumb }, index) => (
              <div
                key={index}
                onClick={() => openImageViewer(index)}
                className="col-sm-6 col-md-4 col-lg-4"
              >
                <div className="portfolio-item cursor">
                  <div className="hover-bg">
                    <div className="hover-text">
                      <h4>{title}</h4>
                    </div>
                    <img
                      src={thumb}
                      className="img-responsive"
                      style={{
                        width: "100%",
                        height: 240,
                        objectFit: "cover",
                      }}
                      alt="Project Title"
                    />{" "}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {isViewerOpen && (
            <ImageViewer
              src={images}
              backgroundStyle={{ zIndex: 99999 }}
              currentIndex={currentImage}
              onClose={closeImageViewer}
            />
          )}
        </div>
      </div>
    </div>
  );
};
