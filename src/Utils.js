export const calculateReadtime = (contentLength) => {
    let readtime = contentLength/600;
    readtime = Math.ceil(readtime);
    readtime = `<${readtime} Minute Read`
    // if (contentLength <= 300) {
    //   readtime = "<2 Minute Read";
    // } else if (contentLength <= 600) {
    //   readtime = "<4 Minute Read";
    // } else if (contentLength <= 900) {
    //   readtime = "<6 Minute Read";
    // } else if (contentLength <= 1200) {
    //   readtime = "<8 Minute Read";
    // } else if (contentLength <= 1500) {
    //   readtime = "<10 Minute Read";
    // } else if (contentLength <= 1800) {
    //   readtime = "<12 Minute Read";
    // } else if (contentLength <= 2100) {
    //   readtime = "<14 Minute Read";
    // } else if (contentLength <= 2400) {
    //   readtime = "<16 Minute Read";
    // } else if (contentLength <= 2700) {
    //   readtime = "<18 Minute Read";
    // } else if (contentLength <= 3000) {
    //   readtime = "<20 Minute Read";
    // } else if (contentLength <= 3300) {
    //   readtime = "<22 Minute Read";
    // } else if (contentLength <= 3600) {
    //   readtime = "<24 Minute Read";
    // } else if (contentLength <= 3900) {
    //   readtime = "<26 Minute Read";
    // } else if (contentLength <= 4200) {
    //   readtime = "<28 minute Read";
    // } else if (contentLength <= 4500) {
    //   readtime = "<30 Minute Read";
    // } else {
    //   readtime = ">30 Minute Read";
    // }

    return readtime;
}


export const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};
