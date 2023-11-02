import { statusesWithIcons } from "@/constants/constants";

export function getStatusIcon(sts) {
  const statusesArray = sts.split(" ");

  if (statusesArray.length === 0) {
    return null;
  }

  if (statusesArray.length === 1) {
    return statusesWithIcons(20)[statusesArray.join("")];
  }

  const statusesArrayUnique = [...new Set(statusesArray)];
  const statusesIcons = statusesArrayUnique.map(
    status => statusesWithIcons(20)[status],
  );
  return statusesIcons;
}

export function getStatuses(sts) {
  return sts.map(order => order.status).join(" ");
}
