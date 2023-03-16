const imageValidate = (images) => {
  let imagesTable = [];
  if (Array.isArray(images)) {
    imagesTable = images;
  } else {
    imagesTable.push(images);
  }

  if (imagesTable.length > 3) {
    return { error: 'You can only upload 3 images at one time' };
  }
  for (let image of imagesTable) {
    if (image.size > 1048576)
      return { error: 'Image size too large, must be below 1MB' };

    const filetypes = /jpg|jpeg|png/;
    const mimetype = filetypes.test(image.mimetype);
    if (!mimetype)
      return { error: 'Incorrect mime type, please use jpg, jpeg, or png' };
  }
  return { error: false };
};

module.exports = imageValidate;
