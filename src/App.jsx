import { RecoilRoot, useRecoilValue } from "recoil";
import { myNetworkAtom, jobsAtom, messagingAtom, notificationsAtom, totalCountSelector } from "./content";
function App(){
 return <RecoilRoot>
    <MainApp/>
 </RecoilRoot>
}
function MainApp(){
  const newNetwork=useRecoilValue(myNetworkAtom);
  const newJobs=useRecoilValue(jobsAtom);
  const newMessaging = useRecoilValue(messagingAtom);
  const newNotifications = useRecoilValue(notificationsAtom);
  const newTotalCount = useRecoilValue(totalCountSelector);
  return(
    <div>
  <button>Home</button>
  <button>My Network({newNetwork >= 100 ? "99+" : newNetwork})</button>
  <button>Jobs({newJobs >= 100 ? "99+" : newJobs})</button>
  <button>Messaging({newMessaging >= 100 ? "99+" : newMessaging})</button>
  <button>Notifications({newNotifications >= 100 ? "99+" : newNotifications})</button>
  <button>Me({newTotalCount})</button>
  </div>
  )
}
export default App;