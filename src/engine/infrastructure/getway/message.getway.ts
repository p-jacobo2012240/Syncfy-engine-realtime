import { 
    OnGatewayConnection,  
    WebSocketServer , 
    OnGatewayDisconnect,
    OnGatewayInit, 
    WebSocketGateway 
} from "@nestjs/websockets";
import { 
    Socket, 
    Server 
} from 'socket.io'

@WebSocketGateway(3022, { 
    cors: { 
        origin: '*' 
    } 
})
export class MessageGetway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    
    @WebSocketServer() server: Server;

    handleConnection(client: any, ...args: any[]) {
        throw new Error("Method not implemented.");
    }
    
    handleDisconnect(client: any) {
        throw new Error("Method not implemented.");
    }
    
    afterInit(server: any) {
        throw new Error("Method not implemented.");
    }
}