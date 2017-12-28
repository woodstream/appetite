import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, Config } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
//native
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
import { Camera } from '@ionic-native/camera';
import { ImagePicker} from '@ionic-native/image-picker';
//pages
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { PersonPage } from '../pages/person/person';
import { TabsPage } from '../pages/tabs/tabs';
import { ChatPage} from '../pages/contact/chat/chat';
import { LoginPage } from '../pages/login/login';
//components
import { SideMenuComponent } from './../components/side-menu/side-menu';
import { MySwiperComponent } from './../components/my-swiper/my-swiper';
import { EmojiPickerComponent } from './../components/emoji-picker/emoji-picker';
import { PopupMenuComponent } from './../components/popup-menu/popup-menu';
//providers
import { HomeProvider } from '../providers/home/home';
import { AboutProvider } from '../providers/about/about';
import { FileProvider } from '../providers/common/file';
import { UtilProvider } from '../providers/common/util';
import { WechatProvider } from '../providers/common/wechat';
import { CacheProvider } from '../providers/common/cache';
import { ChatProvider } from '../providers/chat/chat';
import { HttpProvider } from '../providers/common/http';
import { EmojiProvider } from '../providers/common/emoji';
import { AuthProvider } from '../providers/common/auth';
//
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';
//others
import { KeyboardAttachDirective } from '../directives/keyboard-attach/keyboard-attach';
import { FirstFramePipe } from '../pipes/first-frame/first-frame';
import { RelativeTimePipe } from '../pipes/relative-time/relative-time';
import { BackgroundPipe } from '../pipes/background/background';
import { MyModeDirective } from '../directives/my-mode/my-mode';
import { ModalFromLeftEnter, ModalFromLeftLeave, ModalFromTopEnter, ModalFromTopLeave, ModalFromRightEnter, ModalFromRightLeave, ModalScaleEnter, ModalScaleLeave } from './modal-transitions';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    PersonPage,
    TabsPage,
    ChatPage,
    FirstFramePipe,
    RelativeTimePipe,
    KeyboardAttachDirective,
    LoginPage,
    BackgroundPipe,
    MyModeDirective,
    PopupMenuComponent,
    MySwiperComponent,
    EmojiPickerComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      tabsHideOnSubPages: true,
      scrollAssist: true,
      autoFocusAssist: 'delay'
    }),
    IonicStorageModule.forRoot(),
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    PersonPage,
    TabsPage,
    ChatPage,
    LoginPage,
    PopupMenuComponent,
    MySwiperComponent,
    EmojiPickerComponent,
    SideMenuComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    Camera,
    ImagePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CacheProvider,
    HttpProvider,
    ChatProvider,
    FirstFramePipe,
    HomeProvider,
    EmojiProvider,
    AboutProvider,
    FileProvider,
    WechatProvider,
    UtilProvider,
    AuthProvider
  ]
})
export class AppModule {
  constructor(public config: Config) {
    this.setCustomTransitions();
  }

  private setCustomTransitions() {
    this.config.setTransition('modal-from-top-enter', ModalFromTopEnter);
    this.config.setTransition('modal-from-top-leave', ModalFromTopLeave);
    this.config.setTransition('modal-from-left-enter', ModalFromLeftEnter);
    this.config.setTransition('modal-from-left-leave', ModalFromLeftLeave);
    this.config.setTransition('modal-from-right-enter', ModalFromRightEnter);
    this.config.setTransition('modal-from-right-leave', ModalFromRightLeave);
    this.config.setTransition('modal-scale-enter', ModalScaleEnter);
    this.config.setTransition('modal-scale-leave', ModalScaleLeave);    
  }
}
