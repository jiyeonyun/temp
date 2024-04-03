export const geDeviceType = (_userAgent: string) => {
    const userAgent = _userAgent || navigator.userAgent;

    if (userAgent.match(/Android/i)) {
        return "Android";
    } else if (userAgent.match(/iPhone|iPad|iPod/i)) {
        return "iOS";
    } else {
        return "PC";
    }
};
