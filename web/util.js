import { formatDate as formatDateFn, formatDistanceToNow } from './deps.js';

export function formatAgo(date) {
    if (date == undefined) {
        return '';
    }

    return formatDistanceToNow(date, { addSuffix: true });
}

export function formatDate(date) {
    return formatDateFn(date, 'yyyy-MM-dd HH:mm:ss');
}
