const cloudinary = require("cloudinary");

cloudinary.config({ 
  cloud_name: 'dn5g458zt', 
  api_key: '142574686444258', 
  api_secret: 'r0YgD6Q11I_bcis7rg9N8F4Nog4' 
});

//CLOUDINARY_URL=cloudinary://142574686444258:r0YgD6Q11I_bcis7rg9N8F4Nog4@dn5g458zt

const cloudinaryUploadImg = async (fileToUploads) => {
  return new Promise((resolve) => {
    cloudinary.uploader.upload(fileToUploads, (result) => {
      resolve(
        {
          url: result.secure_url,
          asset_id: result.asset_id,
          public_id: result.public_id,
        },
        {
          resource_type: "auto",
        }
      );
    });
  });
};


const cloudinaryDeleteImg = async (fileToDelete) => {
  return new Promise((resolve) => {
    cloudinary.uploader.destroy(fileToDelete, (result) => {
      resolve(
        {
          url: result.secure_url,
          asset_id: result.asset_id,
          public_id: result.public_id,
        },
        {
          resource_type: "auto",
        }
      );
    });
  });
};

module.exports = { cloudinaryUploadImg, cloudinaryDeleteImg };



