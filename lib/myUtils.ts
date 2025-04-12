import dayjs from "dayjs";
import  relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export function formatDate(dateString: string): string {
    return dayjs(dateString).fromNow(); // Format the date as needed
}