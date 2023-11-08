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

// export function validateData(data){
//   // Проверка и преобразование seats и time в каждом объекте
//   const validatedData = data.map((item) => {
//     if (typeof item.seats === 'string') {
//       // Привести seats к числовому типу, если он строка
//       item.seats = Number(item.seats);
//     }
    
//     if (item.time.length === 4 && item.time[1] === ':') {
//       // Привести time в формате "6:00" к "06:00"
//       item.time = `0${item.time}`;
//     }
    
//     return item;
//   });

//   return validatedData;
// }

export function validateData(data) {
  // Проверка и преобразование seats и time в каждом объекте
  const validatedData = data.reduce((acc, item) => {
    if (item.date === null) {
      // Если item.data равно null, не добавлять объект в массив
      return acc;
    }
    
    if (typeof item.seats === 'string') {
      // Привести seats к числовому типу, если он строка
      item.seats = Number(item.seats);
    }
    
    if (item.time.length === 4 && item.time[1] === ':') {
      // Привести time в формате "6:00" к "06:00"
      item.time = `0${item.time}`;
    }
    
    // Добавить объект в массив
    acc.push(item);
    return acc;
  }, []);

  return validatedData;
}
