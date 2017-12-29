import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { HttpProvider } from '../common/http';
declare let socket: any;


export class ChatMessage {
    messageId: string;      //消息ID
    userId: string;         //用户ID
    userName: string;       //用户名
    userAvatar: string;     //用户头像
    toUserId: string;       //对方ID
    time: number | string;  //消息时间
    message: string;        //消息内容
    status: string;         //状态
    photo: string;          //发送图像
}

export class UserInfo {
    id: string;
    name?: string;
    avatar?: string;
}
/*
  Generated class for the ChatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChatProvider {

    username:string = null;
    userid:string = null;
    socket:any = null;
    constructor(private events: Events, private httpProvider: HttpProvider) {
        console.log('Hello ChatProvider Provider');
    }

    mockNewMsg(msg) {
        const mockMsg: ChatMessage = {
            messageId: Date.now().toString(),
            userId: '210000198410281948',
            userName: 'Hancock',
            userAvatar: 'assets/imgs/to-user.jpg',
            toUserId: '140000198202211138',
            time: Date.now(),
            message: msg.message,
            status: 'success',
            photo: null
        };

        setTimeout(() => {
            this.events.publish('chat:received', mockMsg, Date.now())
        }, Math.random() * 1800)
    }

    getExplainList(){
        const url = 'assets/data/explain-list.json';
        return this.httpProvider.get(url, false);
    }

    getContactList(){
        const url = 'assets/data/contact-list.json';
        return this.httpProvider.get(url, false);
    }

    getMsgList() {
        const msgListUrl = 'assets/data/msg-list.json';
        return this.httpProvider.get(msgListUrl, false);
    }

    sendMsg(msg: ChatMessage) {
        return Promise.resolve(this.mockNewMsg(msg));
    }

    getUserInfo(): Promise<UserInfo> {
        const userInfo: UserInfo = {
            id: '140000198202211138',
            name: 'Luff',
            avatar: 'assets/imgs/user.jpg'
        };
        return Promise.resolve(userInfo);
    }
    //
    //让浏览器滚动条保持在最低部
    scrollToBottom(){
        
    }

    //退出，本例只是一个简单的刷新
    logout(){
        //this.socket.disconnect();      
    }

    //提交聊天消息内容
    submit(content){
        if(content != ''){
            var obj = {
                userid: this.userid,
                username: this.username,
                content: content
            };
            this.socket.emit('message', obj);
        }
        return false;
    }

    genUid(){
        return new Date().getTime() + "" + Math.floor(Math.random()*899+100);
    }

    //更新系统消息，本例中在用户加入、退出的时候调用
    updateSysMsg(o: any, action: any){
        //当前在线用户列表
        var onlineUsers = o.onlineUsers;
        //当前在线人数
        var onlineCount = o.onlineCount;
        //新加入用户的信息
        var user = o.user;

        //更新在线人数
        var userhtml = '';
    }

    //第一个界面用户提交用户名
    usernameSubmit(userID: string){
        return false;
    }

    init(userName: string){
        //客户端根据时间和随机数生成uid,这样使得聊天室用户名称可以重复。实际项目中，如果是需要用户登录，那么直接采用用户的uid来做标识就可以
        this.userid = this.genUid();
        this.username = userName;

        //连接websocket后端服务器
        this.socket.connect('ws://localhost:3000');

        //告诉服务器端有用户登录
        this.socket.emit('login', {userid:this.userid, username:this.username});

        //监听新用户登录
        this.socket.on('login', (o: any) => {
            this.updateSysMsg(o, 'login');    
        });

        //监听用户退出
        this.socket.on('logout', (o: any) => {
            this.updateSysMsg(o, 'logout');
        });

        //监听消息发送
        this.socket.on('message', (obj: any) => {
            var isme = (obj.userid == this.userid) ? true : false;  
        });

    }

}
