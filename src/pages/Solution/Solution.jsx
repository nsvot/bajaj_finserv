import React, { useState } from "react";
import "./Solution.css";
// import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import frameImg from '../../Assets/Frame 22.png';

function FileUpload({ heading, text, id, image,ref }) {
  const [files, setFiles] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleFileUpload = (e) => {
    const uploadedFiles = e.target.files;
    setFiles([...files, ...uploadedFiles]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = e.dataTransfer.files;
    setFiles([...files, ...droppedFiles]);
  };

  const handleCarousel = (index) => {
    setActiveIndex(index);
  };

  return (
    <div ref={ref} className="file-upload-container" id={id}>
      <h1 className="file-head">{heading}</h1>
      <div className="flex p-[20px] flex-col md:flex-row">

        <div className="right-panel">
          <div>
            <img src={image} alt="" />
          </div>

        </div>

        <div
          className="left-panel justify-around gap-y-12"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <div>
            <div className="desc-model">
             {text}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-full h-full border-dashed border-2 border-black">
            <h2>Drag and Drop Your Files Here</h2>
            <input
              type="file"
              id="fileInput"
              onChange={handleFileUpload}
              multiple
            />
            <label htmlFor="fileInput" className="upload-button">
              Upload Files
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FileUpload;
