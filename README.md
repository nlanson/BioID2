# BioID2 :iphone:
iOS Biometric Authentication Demo App 
<br>
Uses FaceID and TouchID to unlock app and then lock the app after 4seconds for module demo.
<br>
<br>
## Preview on Browser
Clone repo and install dependencies"
<br>
`npm install`
<br>
Use Ionic CLI to host on a local NodeJS server:
<br>
`ionic serve`
<br>
<br>
## Deploy to iOS
Clone and install dependencies:
<br>
`npm install`
<br>
Build .xcodeproj using Ionic CLI:
<br>
`ionic cordova build ios --prod`
<br>
Open the .xcodeproj file located in platforms/ios.
Connect your phone via USB and select it as run target.
Click on the Run button on Xcode and run the app on your device.

If Xcode throws a signing error, go to "Signing and Capabilities" tab, rename the "Bundle Identifier" and hit "Try Again"
Once resolved, click on the Run button on Xcode and run the app on your device.



