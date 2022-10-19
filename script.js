AFRAME.registerComponent('mylistener',{
    init:function(){
        this.el.addEventListener('mouseenter', function(evt){
            this.setAttribute('material','color','navy');
        });
        this.el.addEventListener('mouseleave', function(evt){
            this.setAttribute('material','color','white');
        });
        this.el.addEventListener('click', function(evt){
            window.location ="index.html";
        });
    }
});

AFRAME.registerComponent('night',{
    init:function(){
      this.el.addEventListener('mouseenter', function(evt){
        this.setAttribute('material','color','navy');
    });
    this.el.addEventListener('mouseleave', function(evt){
        this.setAttribute('material','color','white');
    });
    this.el.addEventListener('click', function(evt){
        window.location ="sky.html";
    });

    }
});

AFRAME.registerComponent('skies',{
  init:function(){
    this.el.addEventListener('mouseenter', function(evt){
      this.setAttribute('material','color','navy');
  });
  this.el.addEventListener('mouseleave', function(evt){
      this.setAttribute('material','color','white');
  });
  this.el.addEventListener('click', function(evt){
      window.location ="VRweb.html";
  });

  }
});

AFRAME.registerComponent("name-on-hover", {
    schema: {
      target: {
        type: "selector",
        default: ""
      }
    },
    init: function() {
      var target = this.data.target;
      var el = this.el;
      this.setupNamePos();
      el.addEventListener("mouseenter", function() {
        target.emit("in"); // animate in
      });
      el.addEventListener("mouseleave", function() {
        target.emit("out"); // animate out
      });
    },
    setupNamePos: function() {
      var name = this.data.target; // get name element
      var elPos = this.el.getAttribute("position"); // get the pos of hovered element
      name.setAttribute("position", {
        //set name position relevant to hovered element
        x: elPos.x,
        y: elPos.y +2,
        z: elPos.z 
      });
    }
  });

  
AFRAME.registerComponent('play',{
  init:function(){
    var myEl =document.querySelector('#yellow');
    this.el.addEventListener('click', function(){
      myEl.componenets.Sound.playSound();
    });
  }
});
AFRAME.registerComponent('stop',{
  init:function(){
    var myEl =document.querySelector('#yellow');
    this.el.addEventListener('click', function(){
      myEl.componenets.Sound.stopSound();
    });
  }
});

AFRAME.registerComponent('play-pause',{
  init:function(){
    var myVid =document.querySelector('#narutoShort');
    var videoControl=document.querySelector('#videoControls');
      this.el.addEventListener('click', function(){
       if(myVid.paused){
         myVid.play();
         videoControl.setAttribute('src','#pause');
       }else{
         myVid.pause();
         videoControl.setAttribute('src','#play' );
       }
    });
  }
});

AFRAME.registerComponent('push', {
  init: function() {
        var el = this.el;
        el.addEventListener("collidestart", function () {
          const impulse = new Ammo.btVector3(1.4, 1, 0);
          const pos = new Ammo.btVector3(0, 0, 0);
          el.body.applyImpulse(impulse, pos);
          Ammo.destroy(impulse);
          Ammo.destroy(pos);
    });
  }
});


  