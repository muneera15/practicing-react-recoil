import { atom , selector } from "recoil";
import axios from "axios"

export const notifications= atom({
    key: "networkCount",
    default : selector({
        key : "networkCountSelector",
        get : async ()=>{
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data;
        }
    })

})
export const totalNotifications = selector({
    key : "totalNotifications",
    get :({get})=>{
        const allNotifications = get(notifications);
    return allNotifications.network + allNotifications.jobs+ allNotifications.messaging + allNotifications.notifications;
    }
})
