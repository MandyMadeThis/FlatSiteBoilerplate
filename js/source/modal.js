// var modal = {
  
//   init: function() {
//     // Variables for use in modal js object
//     // modalBG: $('.modal-bg'),
//     video: $('video.video-trailer'),
//     formWrap: $('.form-wrapper'),
//     innerWrap: formWrap.find('.inner-wrapper'),
//     formHeight:  innerWrap.height() + 50,
//     maxHeight: $(window).height() - 90,
//     formConf: $('.confirmation'),

//     modal.launch();
//   },

//   launch: function() {
      
//       // click on watch buttons to launch the videos
//       $('.what').on('click touchstart', 'a.launch-video', function(e) {
//           e.preventDefault();

//           var thisVideo = $(this).parent().find('.video-trailer');

//           modal.modalBG.removeClass('hide').addClass('active');
//           modal.scrollLock();
//           // lockScroll();
//           thisVideo.addClass('active');
//           thisVideo.get(0).play();
//       });

//       // click on show-form button to launch the form modal
//       $('.show-form').on('click touchstart', function(e) {
//           e.preventDefault();
//           // lockScroll();
//           modal.scrollLock();
//           modal.modalBG.removeClass('hide').addClass('active');
//           modal.formWrap.css('height', modal.formHeight);
//           modal.formWrap.css('max-height', modal.maxHeight);
//           modal.formWrap.addClass('active');
//       });

//       // function lockScroll(){
//       //     $('body').addClass('scroll-lock');
//       // }

//       // Remove the active class from everything and pause the videos
//       function closeAllTheThings() {
//           modal.modalBG.removeClass('active');
//           modal.formWrap.removeClass('active');
//           modal.formConf.removeClass('active');
//           // $('body').removeClass('scroll-lock');
//           modal.scrollUnLock();

//           modal.video.removeClass('active');
          
//           modal.video.each(function() {
//               $(this).get(0).pause();
//           });
//       }


//       // close the video when the close x button is clicked
//       $('.close').on('click touchstart', function(e) {
//           e.preventDefault();
//           closeAllTheThings();
//       });

//       // close the modal when the wrapper is touched or clicked.
//       modal.modalBG.on('click touchstart', function(e) {
//           closeAllTheThings();
//       })
      
//       //close the video if the escape key is pressed
//       $(document).on('keyup', function(e) {
//           if (e.which == 27) {
//               closeAllTheThings();
//           }
//       });
//   },

//   scrollLock: function(){
//       modal.scrolledToValue = $(window).scrollTop();
//       var scrollConts = $('<div>',{'class':'scrollConts'});
//       $('body').wrapInner(scrollConts);

//       //$('body').addClass('locked'); // overflow: hidden; height:100vh; max-height:100vh;
//       $('body')
//           .css('height','100vh')
//           .css('max-height','100vh')
//           .css('overflow','hidden');

//       $('.scrollConts')
//           .css('overflow','hidden')
//           .css('position','relative')
//           .css('top','-'+modal.scrolledToValue+'px');

//       $(window).scrollTop(0);
//   },

//   scrollUnLock: function(){
//       $('.scrollConts').contents().unwrap();
      
//       $('body')
//           .css('height','auto')
//           .css('max-height','auto')
//           .css('overflow','auto');
//       $(window).scrollTop(modal.scrolledToValue);
//   }

// };