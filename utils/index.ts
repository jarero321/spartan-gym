export const convertToBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export const toDate = (timeString: string) => {
  const now = new Date();
  const [hours, minutes] = timeString.split(":");

  now.setHours(Number(hours));
  now.setMinutes(Number(minutes));

  return now.toLocaleTimeString();
};
