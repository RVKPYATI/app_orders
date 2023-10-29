import { statusesWithIcons } from "@/constants/constants";

export function getStatusIcon(sts) {
  const statusesArray = sts.split(" ");

  if (statusesArray.length === 0) {
    return null;
  }

  if (statusesArray.length === 1) {
    return statusesWithIcons[statusesArray.join("")];
  }

  const statusesArrayUnique = [...new Set(statusesArray)];
  const statusesIcons = statusesArrayUnique.map(
    status => statusesWithIcons[status],
  );
  return statusesIcons;
}
