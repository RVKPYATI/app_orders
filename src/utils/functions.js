import { GOOGLE_SHEATS_URI } from "@/constants/constants";


export async function getData() {
  try {
    const response = await fetch(GOOGLE_SHEATS_URI, { cache: "no-store" });
    return await response.json();

  } catch (error) {
    `Error on fetching getData ${error.message}`;
  }
}

export function getDirections(data) {
  const directions = data.map(obj => obj.direction);

  const combinedRDirection = directions.reduce((result, direction) => {
    if (result === "") {
      return direction;
    } else if (result === direction) {
      return result;
    } else {
      return "Оренбург-Уфа/Уфа-Оренбург";
    }
  }, "");

  const statusCounts = data.reduce((counts, currentObject) => {
    const status = currentObject.status;
    counts[status] = (counts[status] || 0) + 1;
    return counts;
  }, {});

  const allSeats = data.reduce((accumulator, currentObject) => {
    return accumulator + currentObject.seats;
  }, 0);

  return {
    allDirections: combinedRDirection,
    allSeats: allSeats,
    statusCounts: statusCounts,
  };
}
