import React, { useState } from "react";
import "./Solution.css";
// import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import frameImg from '../../Assets/Frame 22.png';

function FileUpload({ heading, text, id }) {
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
    <div className="file-upload-container" id={id}>
      <h1 className="file-head">{heading}</h1>
      <div className="flex p-[20px] flex-col md:flex-row">

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

          {/* <p>{text}</p> */}
          <div>
            <img src={frameImg} alt="" />
          </div>

        </div>

        <div
          className="left-panel justify-around gap-y-12"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <div>
            {/* <Accordion>
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
            </Accordion> */}
            <div className="desc-model">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quaerat voluptatum consectetur enim vitae! Accusamus molestias dicta deleniti nihil nulla dolorum ad minima harum cum, sit repellat nesciunt magnam provident quam. Optio accusantium recusandae libero doloribus quod qui at quaerat sequi, numquam ducimus dignissimos ex rem facere voluptates ea, mollitia veniam totam quia dolorem. Ipsa sequi vero dicta harum! Accusantium quas tempora fugit id vel quidem perferendis porro sequi dignissimos quae odit sit totam, dicta ratione ipsam aliquid! Quasi nemo est iure assumenda aperiam consequuntur perferendis in ducimus doloribus! Eligendi, deleniti exercitationem. Delectus expedita ut ea sapiente nam quae enim.
            </div>
          </div>

          {/* Upload File */}

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
