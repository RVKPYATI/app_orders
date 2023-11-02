import { GOOGLE_SHEATS_URI } from "@/constants/constants";

export async function getData() {
  try {
    const response = await fetch(GOOGLE_SHEATS_URI, {
      next: { revalidate: 5 },
    });
    return await response.json();
  } catch (error) {
    `Error on fetching getData ${error.message}`;
  }
}
