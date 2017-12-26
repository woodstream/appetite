import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Events, Content, TextInput } from 'ionic-angular';
import { ChatProvider, ChatMessage, UserInfo } from '../../../providers/chat/chat';
import { FileProvider } from '../../../providers/common/file';

@Component({
    selector: 'page-chat',
    templateUrl: 'chat.html',
})
export class ChatPage {

    @ViewChild(Content) content: Content;
    @ViewChild('chat_input') messageInput: TextInput;
    msgList: ChatMessage[] = [];
    user: UserInfo;
    toUser: UserInfo;
    editorMsg = '';
    showEmojiPicker = false;

    constructor(public navParams: NavParams,
        public chatProvider: ChatProvider,
        public events: Events, private fileProvider: FileProvider) {


        // Get the navParams toUserId parameter
        this.toUser = {
            id: navParams.get('friendId'),
            name: navParams.get('friendName')
        };
    }

    ionViewDidLeave() {
        // unsubscribe
        this.events.unsubscribe('chat:received');
    }

    ionViewDidEnter() {
        // Subscribe to received  new message events
        this.events.subscribe('chat:received', msg => {
            this.pushNewMsg(msg);
        })
    }

    ionViewDidLoad() {
        // Get mock user information
        this.chatProvider.getUserInfo()
            .then((res) => {
                this.user = res;
                //get message list
                this.getMsg()
                    .then(() => {
                        this.scrollToBottom();
                    });
            });
    }

    photoBrowser($event) {

    }

    onFocus() {
        this.showEmojiPicker = false;
        this.content.resize();
        this.scrollToBottom();
    }

    switchEmojiPicker() {
        this.showEmojiPicker = !this.showEmojiPicker;
        if (!this.showEmojiPicker) {
            this.messageInput.setFocus();
        }
        this.content.resize();
        this.scrollToBottom();
    }

    /**
     * @name getMsg
     * @returns {Promise<ChatMessage[]>}
     */
    getMsg() {
        // Get mock message list
        return this.chatProvider
            .getMsgList()
            .then((res: any) => {
                this.msgList = res.result;
            })
            .catch(err => {
                console.log(err)
            })
    }

    /**
     * @name sendMsg
     */
    sendMsg(newMsg?: ChatMessage) {
        if (!this.editorMsg.trim()) return;

        // Mock message
        const id = Date.now().toString();
        if (!newMsg) {
            newMsg = {
                messageId: Date.now().toString(),
                userId: this.user.id,
                userName: this.user.name,
                userAvatar: this.user.avatar,
                toUserId: this.toUser.id,
                time: Date.now(),
                message: this.editorMsg,
                status: 'pending',
                photo: ''
            };
        }
        this.pushNewMsg(newMsg);
        this.editorMsg = '';

        if (!this.showEmojiPicker) {
            this.messageInput.setFocus();
        }

        this.chatProvider.sendMsg(newMsg)
            .then(() => {
                let index = this.getMsgIndexById(id);
                if (index !== -1) {
                    this.msgList[index].status = 'success';
                }
            })
    }

    /**
     * @name pushNewMsg
     * @param msg
     */
    pushNewMsg(msg: ChatMessage) {
        const userId = this.user.id,
            toUserId = this.toUser.id;
        // Verify user relationships
        if ((msg.userId === userId && msg.toUserId === toUserId) || (msg.toUserId === userId && msg.userId === toUserId)) {
            this.msgList.push(msg);
        }
        this.scrollToBottom();
    }

    getMsgIndexById(id: string) {
        return this.msgList.findIndex(e => e.messageId === id)
    }

    scrollToBottom() {
        setTimeout(() => {
            if (this.content) {
                this.content.scrollToBottom();
            }
        }, 400)
    }

    sendImage() {
        this.fileProvider.mutiImagePick(results => {
            if (Array.isArray(results)) {
                results.forEach(item => {
                    let msg: ChatMessage = new ChatMessage();
                    msg.photo = item;
                    this.sendMsg(msg);
                });
            }
        }, err => {
            //
        });
    }
}
