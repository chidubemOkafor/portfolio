import React from "react";

const Base64Image = ({ base64String }) => {
  // Convert the Base64 string to a Uint8Array
  const binaryString = window.atob(base64String);
  const byteArray = new Uint8Array(binaryString.length);
  for (let i = 0; i <= binaryString.length; i++) {
    byteArray[i] = binaryString.charCodeAt(i);
  }

  // Create a Blob from the Uint8Array
  const blob = new Blob([byteArray], { type: "image/png" });

  // Create an object URL from the Blob
  const imageUrl = URL.createObjectURL(blob);

  return <img src={imageUrl} alt="Image" />;
};

export default Base64Image;
