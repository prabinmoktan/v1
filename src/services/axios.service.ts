import axios from 'axios';

export const hotelData = async () => {
  const options = {
    method: 'GET',
    url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/getHotelDetails',
    params: {
      hotel_id: '191605',
      adults: '1',
      children_age: '1,17',
      room_qty: '1',
      units: 'metric',
      temperature_unit: 'c',
      languagecode: 'en-us',
      currency_code: 'EUR',
    },
    headers: {
      'x-rapidapi-key': 'b2710875c4mshb82070d67e01a54p1ed253jsnf08aa93bf047',
      'x-rapidapi-host': 'booking-com15.p.rapidapi.com',
    },
  };

  const response = await axios.request(options);
  console.log(response.data);
  return response;
};
