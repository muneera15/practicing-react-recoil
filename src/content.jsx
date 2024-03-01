import { atom , selector } from "recoil";

export const myNetworkAtom= atom({
    key: "myNetwork",
    default : 100

})
export const jobsAtom = atom({
    key: "jobs",
    default: 0
})
export const messagingAtom = atom({
    key : "messaging",
    default: 0
})
export const notificationsAtom = atom({
    key : "notifications",
    default: 100
})
export const totalCountSelector = selector({
    key : "totalCountSelector",
    get :({get})=>{
        const newMyNetworkAtom = get(myNetworkAtom);
        const newJobsAtom = get(jobsAtom);
        const newMessagingAtom = get(messagingAtom);
        const newNotificationsAtom = get(notificationsAtom);
    return newMyNetworkAtom + newJobsAtom + newMessagingAtom + newNotificationsAtom;
    }
})