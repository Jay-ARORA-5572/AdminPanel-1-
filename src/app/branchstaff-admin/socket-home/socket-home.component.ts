import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { WebsocketService } from "./websocket.service"; // Custom WebSocket service
import { isPlatformBrowser } from "@angular/common";
import { Inject, PLATFORM_ID } from "@angular/core";
import { MenuItem, MessageService } from 'primeng/api';
import { formdata } from "./socket-home-variable";


const mediaConstraints = {
  audio: true,
  video: {width: 2048, height: 1080},
  // video: {width: 960, height: 540},  // 16:9
  // video: {width: 640, height: 480},  //  4:3
  // video: {width: 160, height: 120},  //  4:3
};


@Component({
  selector: "app-socket-home",
  templateUrl: "./socket-home.component.html",
  styleUrls: ["./socket-home.component.css"], // Corrected styleUrl to styleUrls
})
export class SocketHomeComponent implements OnInit {
  @ViewChild("localVideo", { static: true })
  localVideo!: ElementRef<HTMLVideoElement>;
  @ViewChild("remoteVideo", { static: true })
  remoteVideo!: ElementRef<HTMLVideoElement>;
  token: string | null = null; // Added for JWT token authentication

  localStream: MediaStream | null = null;
  remoteStream: MediaStream | null = null;
  peerConnection: RTCPeerConnection | null = null;
  isRecording: boolean = false;
  mediaRecorder: MediaRecorder | null = null;
  roomId: string = "skill-heed-com";
  socketId: string | null = null;
  remoteSocketId: string | null = null;
  videoEnabled: boolean = true; // Track video state
  audioEnabled: boolean = true; // Track audio state
  message: string = "";
  messages: any[] = [];
  screenStream: MediaStream | null = null; // Added for screen sharing
  isScreenSharing: boolean = false; // Track screen sharing state
  value: string | undefined;
  isStarted: boolean = false; 
  startTime:any;
  streamTitle:any;
  instituteId:any;
  isselect=false
  items: MenuItem[] | undefined;
  isMuted = false;
  isVideoOff = false;
  isChatOpen = false; 
  

  inCall = true;

  menuOpen: boolean = false;

  // Define your FAB buttons with icons
  buttons = [
    { icon: "pi pi-map-marker", bgColor: "grey", color: "#808080" },
    { icon: "pi pi-pencil", bgColor: "#ffff00", color: "#ffffff" },
    { icon: "pi pi-video", bgColor: "#0000ff", color: "#ffffff" },
    { icon: "pi pi-comment", bgColor: "#800080", color: "#ffffff" },
  ];
  // form data 
  formdata: formdata= {
    instituteId: '',
    streamTitle: '',
    startTime: '',
  }

  private servers: RTCConfiguration = {
    iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
  };

  resolutions = [
    { label: '1280 x 720 px', icon: 'fullscreen' },
    { label: '960 x 540 px', icon: 'fullscreen' },
    { label: '640 x 480 px', icon: 'fullscreen' },
    { label: '160 x 120 px', icon: 'fullscreen' }
  ];

  constructor(private socketService: WebsocketService,private messageService: MessageService,@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.token = localStorage.getItem("accesstoken")
    isPlatformBrowser(this.platformId)
    // if (isPlatformBrowser(this.platformId)) {
    //   this.initSocket();
    //   this.initWebRTC();
    // } else {
    //   console.warn(
    //     "This code is running on the server, WebRTC features are not supported."
    //   );
    // }
  }
  

  // Resolution select function
  selectResolution(op: any, resolution: string) {
    console.log('Selected resolution:', resolution);
    op.hide();  // Close the overlay panel after selection
  }



  // live streaming API call 

  startLiveStreaming(values:any) {
    let valid;
    console.log(values)
    valid = values['form']['status']
    console.log(valid)
    this.formdata.instituteId = values["form"]["value"]["instituteId"]
    this.formdata.streamTitle = values["form"]["value"]["streamTitle"]
    this.formdata.startTime = values["form"]["value"]["startTime"]
    
    console.log("start streamming ",this.formdata)

    // let obj={
    //   "instituteId": "66a4dd2110fd3e344773cd3b",
    //   "streamTitle": "Physics - Kinematics",
    //   "startTime": "2024-09-25T14:30:00Z"
    // }


    this.isselect=true
    if (valid=="VALID")
        this.socketService.livestreamstart(this.formdata).subscribe(
          (res: any) => { 
              console.log("API res- ------>",res);
              if (res['message'] == "Streaming session started") {
                // this.initSocket();
                // this.initWebRTC();
                // this.startRecordingAndSending();
                // this.stopRecordingAndSending();

                if (isPlatformBrowser(this.platformId)) {
                  this.initSocket();
                  this.initWebRTC();
                } else {
                  console.warn(
                    "This code is running on the server, WebRTC features are not supported."
                  );
                }

                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Streaming session started' });
              } else {
                  this.messageService.add({ severity: 'error', summary: 'Error', detail: res });
              }
          },
          (error: any) => {
              console.error("HTTP request error:", error);
              const errorMessage = error?.error?.error || "An unexpected error occurred";
              this.messageService.add({ severity: 'error', summary: 'Error', detail: errorMessage });
          }
      );
    
    else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'All fields are required' })
    }

  }



  initSocket() {
    this.socketService.connect();

    this.socketService.listen("connect").subscribe(() => {
      this.socketId = this.socketService.socket?.id || null;
      this.socketService.emit("join-room", this.roomId);
    });

    this.socketService.listen("user-joined").subscribe((id: string) => {
      this.remoteSocketId = id;
      this.createOffer();
    });

    this.socketService.listen("signal").subscribe(async ({ from, signal }: any) => {
      if (!this.peerConnection) {
        console.warn("PeerConnection is not initialized.");
        return;
      }

      if (signal.type === "offer") {
        await this.peerConnection.setRemoteDescription(new RTCSessionDescription(signal));
        const answer = await this.peerConnection.createAnswer();
        await this.peerConnection.setLocalDescription(answer);
        this.socketService.emit("signal", {
          to: from,
          from: this.socketId,
          signal: answer,
        });
      } else if (signal.type === "answer") {
        await this.peerConnection.setRemoteDescription(new RTCSessionDescription(signal));
      } else if (signal.candidate) {
        await this.peerConnection.addIceCandidate(new RTCIceCandidate(signal.candidate));
      }
    });
  }

  async initWebRTC() {
    try {
      console.log("video resolutions size ------->",mediaConstraints)
      // this.localStream = await navigator.mediaDevices.getUserMedia({video: true,audio: true});
      this.localStream = await navigator.mediaDevices.getUserMedia(mediaConstraints);
      this.localVideo.nativeElement.srcObject = this.localStream;

      this.peerConnection = new RTCPeerConnection(this.servers);
      this.localStream.getTracks().forEach((track) =>
        this.peerConnection?.addTrack(track, this.localStream!)
      );

      this.peerConnection.onicecandidate = (event) => {
        if (event.candidate) {
          this.socketService.emit("signal", {
            to: this.remoteSocketId,
            from: this.socketId,
            signal: event.candidate,
          });
        }
      };

      this.peerConnection.ontrack = (event) => {
        if (event.streams && event.streams[0]) {
          this.remoteStream = event.streams[0];
          this.remoteVideo.nativeElement.srcObject = this.remoteStream;
        }
      };
    } catch (error) {
      console.error("Error accessing media devices.", error);
    }
  }

  async createOffer() {
    if (!this.peerConnection) {
      console.warn("Cannot create offer, peerConnection is not initialized.");
      return;
    }

    const offer = await this.peerConnection.createOffer();
    await this.peerConnection.setLocalDescription(offer);
    this.socketService.emit("signal", {
      to: this.remoteSocketId,
      from: this.socketId,
      signal: offer,
    });
  }

  startRecordingAndSending() {
    // this.isStarted = true; 
    console.log("startRecordingAndSending")
    if (this.localStream) {
      const streamKey = "s6o014b5h0g";
      this.startEventMeet(streamKey);

      this.mediaRecorder = new MediaRecorder(this.localStream, {
        mimeType: "video/webm",
      });

      this.mediaRecorder.ondataavailable = (event: BlobEvent) => {
        if (event.data.size > 0) {
          this.sendMediaChunk(event.data);
        }
      };

      this.mediaRecorder.start(1000);
      this.isRecording = true;
    }
  }

  stopRecordingAndSending() {
    // this.isStarted = false;
    if (this.mediaRecorder && this.isRecording) {
      this.mediaRecorder.stop();
      this.isRecording = false;
    }

  }

  startEventMeet(streamKey: string) {
    console.log("Event meet started with stream key:", streamKey);
    this.socketService.emit("start-event", { streamKey });
  }

  sendMediaChunk(chunk: Blob) {
    const reader = new FileReader();
    reader.onload = () => {
      const arrayBuffer = reader.result as ArrayBuffer;
      this.socketService.emit("video_data", arrayBuffer);
    };
    reader.readAsArrayBuffer(chunk);
  }

  toggleVideo() {
    this.isVideoOff = !this.isVideoOff;
    if (this.localStream) {
      this.videoEnabled = !this.videoEnabled;
      this.localStream.getVideoTracks().forEach((track) => (track.enabled = this.videoEnabled));
    }
  }

  toggleAudio() {
    this.isMuted = !this.isMuted;
    if (this.localStream) {
      this.audioEnabled = !this.audioEnabled;
      this.localStream.getAudioTracks().forEach((track) => (track.enabled = this.audioEnabled));
    }
  }

 

  toggleMenu() {
    this.menuOpen = !this.menuOpen; // Toggle the menu state
  }

  // --------------------------chat section ----------------------------------

  sendMessage() {
    if (this.message && this.roomId) {
      const messageData = {
        id: Math.random().toString(36).substring(2, 15),
        text: this.message,
        // sender: "Karan", // You can replace with the actual username
        // timestamp: new Date().toISOString(),
      };

      // Push the message to the local messages array
      this.messages.push(messageData);

      // Emit the message to the server
      this.socketService.emit("sendMessage", {
        roomId: this.roomId,
        message: messageData,
      });

      // Clear the input field
      this.message = "";
    }
  }

  // Listen for incoming chat messages
  listenForMessages() {
    this.socketService.listen("receiveMessage").subscribe((data: any) => {
      this.messages.push(data.message);
    });
  }

  getButtonStyle(index: number) {
    const angle = (index + 1) * (Math.PI / (this.buttons.length + 1)); // Divide the 180 degrees into equal parts
    const radius = 100; // Distance from the center (adjust based on needs)
  
    const x = radius * Math.cos(angle); // X position
    const y = radius * Math.sin(angle); // Y position
  
    return {
      bottom: `${y}px`,
      left: `${50 - x}px`, // Offset the left position for horizontal centering
    };
  }


  toggleChat() {
    this.isChatOpen = !this.isChatOpen; // Toggle chat visibility
  }

  // --------------------screeen shere -------------------

  toggleScreenShare() {
    
    if (this.isScreenSharing) {
      this.stopScreenShare();
    } else {
      this.startScreenShare();
    }
  }

  async startScreenShare() {
    try {
      this.screenStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true,
      });

      this.screenStream.getTracks().forEach((track) => {
        this.peerConnection?.addTrack(track, this.screenStream!);
      });

      // Update the local video element to show the shared screen
      this.localVideo.nativeElement.srcObject = this.screenStream;

      this.isScreenSharing = true;
    } catch (error) {
      console.error("Error sharing screen:", error);
    }
  }

  stopScreenShare() {
    if (this.screenStream) {
      this.screenStream.getTracks().forEach((track) => track.stop());
      this.isScreenSharing = false;

      // Reset local video to show the webcam stream
      this.localVideo.nativeElement.srcObject = this.localStream;
    }
  }
  


  endCall(): void {
    console.log('Ending call');
  
    // Notify the server that the call is ending (optional, depends on your socket implementation)
    if (this.socketService && this.socketId) {
      this.socketService.emit("end-call", { roomId: this.roomId, socketId: this.socketId });
    }
  
    // Stop media tracks (audio and video)
    if (this.localStream) {
      this.localStream.getTracks().forEach(track => track.stop());
      this.localStream = null;
    }
  
    if (this.screenStream) {
      this.screenStream.getTracks().forEach(track => track.stop());
      this.screenStream = null;
    }
  
    if (this.remoteStream) {
      this.remoteStream.getTracks().forEach(track => track.stop());
      this.remoteStream = null;
    }
  
    // Close the peer connection
    if (this.peerConnection) {
      console.log('--> Closing the peer connection');
      
      this.peerConnection.ontrack = null;
      this.peerConnection.onicecandidate = null;
      this.peerConnection.oniceconnectionstatechange = null;
      this.peerConnection.onsignalingstatechange = null;
  
      this.peerConnection.getTransceivers().forEach(transceiver => {
        transceiver.stop();
      });
  
      this.peerConnection.close();
      this.peerConnection = null;
    }
  
    // Reset the inCall state
    this.inCall = false;
    this.isScreenSharing = false;
    this.isVideoOff = true;
    this.isMuted = true;
  
    // Clear the local and remote video elements
    if (this.localVideo.nativeElement) {
      this.localVideo.nativeElement.srcObject = null;
    }
    if (this.remoteVideo.nativeElement) {
      this.remoteVideo.nativeElement.srcObject = null;
    }
  
    console.log('Call ended');
  }
  


  // selectbtn(op:any){
  //   console.log("select")
  //   op.hide();
  // }

  // private closeVideoCall(): void {
  //   console.log('Closing call');

  //   if (this.peerConnection) {
  //     console.log('--> Closing the peer connection');

  //     this.peerConnection.ontrack = null;
  //     this.peerConnection.onicecandidate = null;
  //     this.peerConnection.oniceconnectionstatechange = null;
  //     this.peerConnection.onsignalingstatechange = null;

  //     // Stop all transceivers on the connection
  //     this.peerConnection.getTransceivers().forEach(transceiver => {
  //       transceiver.stop();
  //     });

  //     // Close the peer connection
  //     this.peerConnection.close();
  //     this.peerConnection = null;

  //     this.inCall = false;
  //   }
  // }


  
  // hangUp(): void {
  //   this.socketService.sendMessage({type: 'hangup', data: ''});
  //   this.closeVideoCall();
  // }

  
}



