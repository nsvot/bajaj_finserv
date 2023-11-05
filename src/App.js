import React from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Solution from "./pages/Solution/Solution";

const App = () => {
  var h1 =
    "The proposed algorithm for detecting the presence of whitener on documents is an image processing-based approach designed to analyze document images. The algorithm begins with preprocessing, including grayscale conversion and contrast enhancement, to improve image quality. It then isolates potential treated areas using thresholding and edge detection. These regions are further analyzed for characteristics that may indicate whitener application, such as irregular texture, distinct color or reflectance properties, and unusual shapes. Additional techniques, such as infrared or UV imaging and heat-based analysis, can be employed to enhance the analysis. The algorithm generates a detailed report indicating the likelihood of whitener presence in each detected area, along with visual or numerical evidence. It allows for human validation and parameter fine-tuning, and ethical considerations are crucial when handling sensitive documents. Detecting whitener, particularly when skillfully applied, remains a complex and context-dependent challenge, where expertise and technology intersect."
      return (
    <>
      <Home />
      <Solution heading="Whitener Detection" text={h1} />
      <Solution heading="Digital Forgery Detection" text={h1} />
      <Solution heading="Data Manipulation Detection" text={h1} />
      <About />
    </>
  );
};

export default App;
