export const months = [
    "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
]


const formatDate = (date: Date = new Date(), isPresent: boolean = false): string => {

    if (isPresent) return "PRESENT";

    return `${months[date.getMonth()]}  ${date.getFullYear()}`;
};

export default formatDate