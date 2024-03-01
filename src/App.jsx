import { RecoilRoot, useRecoilValue,useRecoilState } from "recoil";
import {axios} from "react"
import { notifications, totalNotifications } from "./content";
import { useEffect } from "react";
function App(){
 return <RecoilRoot>
    <MainApp/>
 </RecoilRoot>
}
function MainApp(){
  const [networkCount,setNetworkCount]=useRecoilState(notifications);
  const totalNotificationsSelector = useRecoilValue(totalNotifications);
  useEffect(()=>{
  axios.get("https://sum-server.100xdevs.com/notifications").then((res) =>{
    setNetworkCount(res.data);
  });
 },[]);

  return(
    <div>
  <button>Home</button>
  <button>My Network({networkCount.network >= 100 ? "99+" : networkCount.network})</button>
  <button>Jobs({networkCount.jobs >= 100 ? "99+" : networkCount.jobs})</button>
  <button>Messaging({networkCount.messaging >= 100 ? "99+" : networkCount.messaging})</button>
  <button>Notifications({networkCount.notifications >= 100 ? "99+" : networkCount.notifications})</button>
  <button>Me({totalNotificationsSelector})</button>
  </div>
  )
}
export default App;