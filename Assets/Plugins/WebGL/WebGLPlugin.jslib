mergeInto(LibraryManager.library, {
   // Function example
   CallFunction: function () {
      // Show a message as an alert
      window.showAdv();
   },
   // Function Share (add ksimaster)
   ShareFunction: function () {
      // Show a message as an alert
      window.showShare();
   },
      // Function SetLeder(add ksimaster)
      /*
   SetLeder: function (value) {
      setLederboard(value);
   }, */
   // Function GetAuth(add ksimaster)
   /*
   GetAuth: function () {
      //var player;
      var isAuthorzation = "no";
        if (!(player.getMode() === 'lite')) 
        {
          console.log('Player autorization: YES!!!' );
          isAuthorzation = "yes";
         }
     
      var bufferSize = lengthBytesUTF8(isAuthorzation) + 1;
      var buffer = _malloc(bufferSize);
      stringToUTF8(isAuthorzation, buffer, bufferSize);
      return buffer;
   },
   // Function SetAuth(add ksimaster)
   SetAuth: function () {
      setAuth();
   }, */
   // Function GetAuth(add ksimaster)
   GetAdsOpen: function () {
      //var player;
      var isAd = "no";
        if ( isAds === 'on') 
        {
          console.log('Ad Interstitial is ON!' );
          isAd = "yes";
         }
     
      var bufferSizeAd = lengthBytesUTF8(isAd) + 1;
      var bufferAd = _malloc(bufferSizeAd);
      stringToUTF8(isAd, bufferAd, bufferSizeAd);
      return bufferAd;
   },
   // Function InterstitialFunction (add ksimaster)
   InterstitialFunction: function () {
      // Show a message as an alert
      window.showAdInterstitial();
   },
   // Function RewardFunction (add ksimaster)
   RewardFunction: function () {
      // Show a message as an alert
      window.showAdReward();
   },
   // Function autorization (add ksimaster)
   Hello: function () {
      window.alert("Hello!");
      console.log("Hello!");
   },
   // Function with the text param
   PassTextParam: function (text) {
      // Convert bytes to the text
      var convertedText = Pointer_stringify(text);
      // Show a message as an alert
      window.alert("You've passed the text: " + convertedText);
   },
   // Function with the number param
   PassNumberParam: function (number) {
      // Show a message as an alert
      window.alert("The number is: " + number);
   },
   // Function returning text value
   GetTextValue: function () {
      // Define text value
      var textToPass = "You got this text from the plugin";
      // Create a buffer to convert text to bytes
      var bufferSize = lengthBytesUTF8(textToPass) + 1;
      var buffer = _malloc(bufferSize);
      // Convert text
      stringToUTF8(textToPass, buffer, bufferSize);
      // Return text value
      return buffer;
   },
   // Function returning number value
   GetNumberValue: function () {
      // Return number value
      return 2020;
   }
});