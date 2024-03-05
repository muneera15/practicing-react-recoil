import { RecoilRoot, useRecoilValue, useRecoilState } from "recoil";
import { notifications, totalNotifications } from "./content";
function App(){
 return <RecoilRoot>
    <MainApp/>
 </RecoilRoot>
}
function MainApp(){
  const [networkCount,setNetworkCount]=useRecoilState(notifications);
  const totalNotificationsSelector = useRecoilValue(totalNotifications);

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