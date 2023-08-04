"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import React, { useCallback } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box, Typography } from "@mui/material";

declare global {
  var cloudinary: any;
}

interface ImageUploadProps {
  value: string;
  setValue: any;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ value, setValue }) => {
  const handleUpload = useCallback(
    (result: any) => {
      setValue("image", result.info.secure_url, {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      });
    },
    [setValue]
  );

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset={"gym_management_system"}
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => {
        return (
          <div
            style={{
              position: "relative",
              cursor: "pointer",
              transition: "opacity 0.2s ease-in-out",
              border: "dashed",
              borderWidth: 2,
              borderColor: "rgba(212, 212, 212, 1)",
              padding: value ? "20px" : "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 4,
              color: "rgba(82, 82, 82, 1)",
            }}
            onClick={() => open?.()}
          >
            <CloudUploadIcon />
            <Typography variant="body1">Click to upload</Typography>
            {value && (
              <Box
                component="div"
                sx={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  inset: 0,
                }}
              >
                <Image
                  src={value}
                  alt={"Upload"}
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </Box>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
