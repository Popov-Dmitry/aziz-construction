import axios from "axios";
export const submitData = async (_, formData) => {
  try {
    const data = {
      records: [
        {
          fields: Object.fromEntries(formData)
        }
      ]
    };
    await axios.post('https://api.airtable.com/v0/appiH0TdedSbdp2D4/Table%201', data, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_ACCESS_TOKEN}`
      }
    });
  } catch (error) {
    console.log(error);
  }
};