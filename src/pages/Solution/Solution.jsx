import React, { useState } from "react";
import "./Solution.css";
// import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function FileUpload({heading, text}) {
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
    <div className="file-upload-container">
      <h1 className="file-head">{heading}</h1>
      <div className="bot">
        <div
          className="left-panel"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
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
        <div className="right-panel">
          {/* <div className="carousel"> */}
          {/* {files.map((file, index) => (
            <div
              key={index}
              className={`carousel-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleCarousel(index)}
            >
              {file.type.startsWith('image/') ? (
                <img src={URL.createObjectURL(file)} alt={file.name} />
              ) : (
                <div className="file-placeholder">
                  <p>{file.name}</p>
                </div>
              )}
            </div>
          ))} */}
          {/* </div> */}

          <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Architecture</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Data Flow</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Description</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
     {text}
          </Typography>
        </AccordionDetails>
      </Accordion>
    
        </div>
      </div>
    </div>
  );
}

export default FileUpload;
