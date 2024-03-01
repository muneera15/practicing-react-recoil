import { atom , selector } from "recoil";

export const notifications= atom({
    key: "networkCount",
    default : {
        network : 100,
        jobs : 0,
        messaging : 0,
        notifications : 100
    }

})
export const totalNotifications = selector({
    key : "totalNotifications",
    get :({get})=>{
        const allNotifications = get(notifications);
    return allNotifications.network + allNotifications.jobs+ allNotifications.messaging + allNotifications.notifications;
    }
})