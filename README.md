
# أسبوعي - Expo Version

ده مشروع Expo يحل مشكلة الشاشة البيضا بتاعة Natively

## طريقة التشغيل والتثبيت من الـ Terminal

1. فك الضغط
2. افتح الـ terminal في الفولدر:
   cd Osboey_Expo

3. نزل الـ dependencies:
   npm install
   أو
   yarn install

4. شغل على الموبايل مباشرة (لازم USB Debugging):
   npx expo run:android

5. أو اعمل APK جاهز بدون Natively (عن طريق EAS):
   npm install -g eas-cli
   eas login
   eas build -p android --profile preview

هينتج APK ويبعتلك لينك تحميله

لو عايز تغير يرجع يحمل من Netlify بدل الملف المحلي:
افتح App.js وغير السطر:
source={require('./assets/index.html')}
ل:
source={{ uri: 'https://teal-starship-e15898.netlify.app' }}

