// Seeded random number generator for deterministic API simulation
const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

/**
 * Simulates fetching available booking times for a selected date
 * @param {Date|string} date
 * @returns {Array<string>} Array of available time slots
 */
export const fetchAPI = function (date) {
  let result = [];
  const dateObj = date instanceof Date ? date : new Date(date);
  // Ensure valid date number for seed, fallback to current day
  const day = !isNaN(dateObj.getDate()) ? dateObj.getDate() : new Date().getDate();
  let random = seededRandom(day);

  for (let i = 17; i <= 22; i++) {
    if (random() < 0.5) {
      result.push(i + ':00');
    }
    if (random() < 0.5) {
      result.push(i + ':30');
    }
  }

  // Fallback if random generated no slots
  if (result.length === 0) {
    result = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  }

  return result;
};

/**
 * Simulates submitting booking form data
 * @param {Object} formData
 * @returns {boolean} true if successful
 */
export const submitAPI = function (formData) {
  if (!formData || !formData.date || !formData.time || !formData.guests) {
    return false;
  }
  return true;
};
