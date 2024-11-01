import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";
const RoomPage = () =>{
    const {roomId} = useParams();
    const myMeeting = async (element)=>{
        const appID = 132495997;
        const serverSecret = "d340cc8b610287eb8723d944b9d7013e";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), 'Anuj');
        const uikit = ZegoUIKitPrebuilt.create(kitToken);
        uikit.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
            },
        });
    }
    return(
        <div className="Room-page"><div ref={myMeeting}/></div>
    );
}

export default RoomPage;