import { jsonResponse } from "src/shared/json-reponse";

module.exports.handler = async () => {
  const metrics = [
    {
      timestamp: new Date(2023, 10, 28),
      weight: 74.1,
      muscleMassPercentage: 81,
      fatMassPercentage: 14.7,
      boneMassPercentage: 4.3,
    },
    {
      timestamp: new Date(2023, 11, 4),
      weight: 74.3,
      muscleMassPercentage: 81.5,
      fatMassPercentage: 14.2,
      boneMassPercentage: 4.2,
    },
    {
      timestamp: new Date(2023, 11, 11),
      weight: 74.8,
      muscleMassPercentage: 80.5,
      fatMassPercentage: 15.3,
      boneMassPercentage: 4.2,
    },
  ];

  return jsonResponse(200, metrics);
};
