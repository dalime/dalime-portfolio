/**
 * Sends an email using a backend API route and SMTP
 * @param email string
 * @param name string
 * @param service string
 * @param message string
 * @returns Promise<any>
 */
export const sendEmail = async (email: string, name: string, service: string, message: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    const body = {
      email,
      name,
      service,
      message,
    };

    fetch(`${process.env.REACT_APP_BACKEND_URL}/send-email`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => {
      console.log("Sent email successfully", response);
      resolve(response);
    }).catch((error) => {
      console.error("Sending email error", error);
      reject(error);
    });
  });
};
