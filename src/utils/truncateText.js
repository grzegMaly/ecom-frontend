export const truncateText = (text, charLimit = 80) => {
    if (text?.length > charLimit) {
        return text.slice(0, charLimit) + "...";
    }
    return text;
}