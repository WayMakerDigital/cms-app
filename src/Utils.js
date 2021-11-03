export const calculateReadtime = (contentLength) => {
    let readtime = contentLength/1100;
    readtime = Math.ceil(readtime);
    readtime = `<${readtime} Minute Read`
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
