import React, { useRef } from "react";
import html2canvas from "html2canvas";
function VideoScreenshot() {
  const videoRef = useRef(null);

  const captureScreenshot = () => {
    html2canvas(videoRef.current).then((canvas) => {
      const screenshotUrl = canvas.toDataURL();
      console.log("Screenshot URL:", screenshotUrl);
      // You can further process or display the screenshot as needed
    });
  };

  return (
    <div>
      <video width={"100%"} height={"auto"} ref={videoRef} controls>
        <source
          src="https://filetransfer.io/data-package/BHb9JOLj/download"
          type="video/mp4"
        />
      </video>
      <button onClick={captureScreenshot}>Capture Screenshot</button>
    </div>
  );
}

export default VideoScreenshot;
