
export const formatDate = (dt)=> {
    const monthArray = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    if(dt){
        const date = new Date(dt);
        const day = date.getDate();
        const mnth = monthArray[date.getMonth()];
        const year = date.getFullYear();
        return `${day}-${mnth}-${year}`;
    }
    return 'NA';
    };