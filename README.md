# easylearning
===================
easy learning proeject for kids using  react native technology.

Windows Project setup for Android(needs to follow differenct instructions for IOS)

Softwares installation directory : D:\software\react
Softwares needs to be installed to run this project.
Android
Java
Microsoft VS Code -- editor
nodejs -- just to use for npm modules.
Android\Sdk   -- path : C:\Users\M1034465\AppData\Local

path variables needs to be set for react-native application:
ANDROID_AVD_HOME : C:\Users\M1034465\.android\avd
ANDROID_HOME : C:\Users\M1034465\AppData\Local\Android\Sdk
ANDROID_SDK_HOME : C:\Users\M1034465\AppData\Local\Android\Sdk
JAVA_HOME : D:\software\react\Java\jdk1.8.0_152

setting up react-native environment:
1. install native cli tool.
	D:\reactprojects>npm install -g react-native-cli
2. install yarn package manager
	D:\reactprojects>npm install -g yarn
create the project name and folder structure(project name as myapp).
D:\reactprojects>react-native init myapp

To run your app on iOS:
   cd D:\reactprojects\myapp
   react-native run-ios
   - or -
   Open ios\myapp.xcodeproj in Xcode
   Hit the Run button
To run your app on Android:
   cd D:\reactprojects\myapp
   Have an Android emulator running (quickest way to get started), or a device connected
   react-native run-android

Install new react native modules using below command. (example : raact-navigation)
goto project folder and run this command. D:\reactprojects\myapp>
npm install --save react-navigation
npm install   ---- only if you are getting any errors.
******************************************************
starting the react navtive project and start the server:

D:\reactprojects\myapp>react-native start

how to start the android virtual device.
1. start android studio.
2. start virtual device by navigate to (tools-> Android ->AVD Manager)

open different command prompt and starts the  project in emulator.
D:\reactprojects\myapp>react-native run-android

*****************************************************

project location in local system:
D:\reactprojects\myapp  -- myapp is the project name created from command prompt using : react-native-cli 

how to debug the recat class file :

in Visula Studio code editor.
1. open integrated terminal (from menu-> View->integrated terminal). command line will appear in visula studio code.
2. type at command line : react-native  log-android
it will display console.log() statements to the console.


