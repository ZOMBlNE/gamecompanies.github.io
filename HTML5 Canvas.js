(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"HTML5 Canvas_atlas_1", frames: [[0,1578,484,416],[486,1578,143,143],[0,0,789,789],[0,791,785,785]]}
];


(lib.AnMovieClip = function(){
	this.currentSoundStreamInMovieclip;
	this.actionFrames = [];
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(positionOrLabel);
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		var keys = this.soundStreamDuration.keys();
		for(var i = 0;i<this.soundStreamDuration.size; i++){
			var key = keys.next().value;
			key.instance.stop();
		}
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var keys = this.soundStreamDuration.keys();
			for(var i = 0; i< this.soundStreamDuration.size ; i++){
				var key = keys.next().value; 
				var value = this.soundStreamDuration.get(key);
				if((value.end) == currentFrame){
					key.instance.stop();
					if(this.currentSoundStreamInMovieclip == key) { this.currentSoundStreamInMovieclip = undefined; }
					this.soundStreamDuration.delete(key);
				}
			}
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			if(this.soundStreamDuration.size > 0){
				var keys = this.soundStreamDuration.keys();
				var maxDuration = 0;
				for(var i=0;i<this.soundStreamDuration.size;i++){
					var key = keys.next().value;
					var value = this.soundStreamDuration.get(key);
					if(value.end > maxDuration){
						maxDuration = value.end;
						this.currentSoundStreamInMovieclip = key;
					}
				}
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_102 = function() {
	this.initialize(ss["HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_95 = function() {
	this.initialize(img.CachedBmp_95);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2570,444);


(lib.CachedBmp_98 = function() {
	this.initialize(img.CachedBmp_98);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2570,448);


(lib.CachedBmp_103 = function() {
	this.initialize(img.CachedBmp_103);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2570,450);


(lib.CachedBmp_100 = function() {
	this.initialize(img.CachedBmp_100);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2570,450);


(lib.CachedBmp_97 = function() {
	this.initialize(img.CachedBmp_97);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2570,447);


(lib.CachedBmp_93 = function() {
	this.initialize(img.CachedBmp_93);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2570,442);


(lib.CachedBmp_94 = function() {
	this.initialize(img.CachedBmp_94);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2570,443);


(lib.CachedBmp_99 = function() {
	this.initialize(img.CachedBmp_99);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2570,449);


(lib.CachedBmp_96 = function() {
	this.initialize(img.CachedBmp_96);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2570,445);


(lib.CachedBmp_92 = function() {
	this.initialize(img.CachedBmp_92);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2570,441);


(lib.CachedBmp_91 = function() {
	this.initialize(img.CachedBmp_91);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2570,440);


(lib.CachedBmp_90 = function() {
	this.initialize(img.CachedBmp_90);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2570,439);


(lib.CachedBmp_88 = function() {
	this.initialize(img.CachedBmp_88);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2570,437);


(lib.CachedBmp_89 = function() {
	this.initialize(img.CachedBmp_89);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2570,438);


(lib.CachedBmp_80 = function() {
	this.initialize(img.CachedBmp_80);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2569,436);


(lib.CachedBmp_85 = function() {
	this.initialize(img.CachedBmp_85);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2569,435);


(lib.CachedBmp_86 = function() {
	this.initialize(img.CachedBmp_86);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2569,435);


(lib.CachedBmp_87 = function() {
	this.initialize(img.CachedBmp_87);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2570,436);


(lib.CachedBmp_81 = function() {
	this.initialize(img.CachedBmp_81);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2569,436);


(lib.CachedBmp_83 = function() {
	this.initialize(img.CachedBmp_83);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2569,436);


(lib.CachedBmp_84 = function() {
	this.initialize(img.CachedBmp_84);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2569,435);


(lib.CachedBmp_82 = function() {
	this.initialize(img.CachedBmp_82);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2569,436);


(lib.CachedBmp_79 = function() {
	this.initialize(img.CachedBmp_79);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2569,436);


(lib.CachedBmp_78 = function() {
	this.initialize(img.CachedBmp_78);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2569,436);


(lib.CachedBmp_77 = function() {
	this.initialize(img.CachedBmp_77);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2569,435);


(lib.CachedBmp_76 = function() {
	this.initialize(img.CachedBmp_76);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2570,443);


(lib.CachedBmp_36 = function() {
	this.initialize(img.CachedBmp_36);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2570,453);


(lib.CachedBmp_40 = function() {
	this.initialize(img.CachedBmp_40);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2570,451);


(lib.CachedBmp_35 = function() {
	this.initialize(img.CachedBmp_35);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2570,453);


(lib.CachedBmp_39 = function() {
	this.initialize(img.CachedBmp_39);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2570,452);


(lib.Растровоеизображение1 = function() {
	this.initialize(img.Растровоеизображение1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4000,2667);


(lib.CachedBmp_38 = function() {
	this.initialize(img.CachedBmp_38);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2570,452);


(lib.CachedBmp_37 = function() {
	this.initialize(img.CachedBmp_37);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2570,453);


(lib.CachedBmp_34 = function() {
	this.initialize(img.CachedBmp_34);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2570,452);


(lib.CachedBmp_2 = function() {
	this.initialize(ss["HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(img.CachedBmp_33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2570,452);


(lib.CachedBmp_32 = function() {
	this.initialize(img.CachedBmp_32);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2570,451);


(lib.CachedBmp_31 = function() {
	this.initialize(img.CachedBmp_31);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2570,451);


(lib.CachedBmp_10 = function() {
	this.initialize(ss["HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_101 = function() {
	this.initialize(img.CachedBmp_101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2570,451);


(lib.WarpedAsset_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_103();
	this.instance.setTransform(-642.5,-112.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-642.5,-112.5,1285,225);


(lib.sun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_102();
	this.instance.setTransform(-9,-9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-9,242,208);


(lib.btn_play = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(33.3,-169.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(33.3,-169.9,392.5,392.5);


(lib.btn_pause = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(-329.05,-167.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({x:-332.15,y:-186.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-332.1,-186.5,397.6,413.1);


(lib.Монтажный_кадр_1_letters = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// letters
	this.text = new cjs.Text("RACING", "50px 'Impact'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 63;
	this.text.lineWidth = 169;
	this.text.parent = this;
	this.text.setTransform(84.55,98.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(4).to({x:137,y:85.95,lineWidth:270},0).wait(4).to({x:199.5,y:98.2,lineWidth:345},0).wait(4).to({x:246.5,y:85.95,lineWidth:373},0).wait(4).to({x:294,y:98.2,lineWidth:422},0).wait(4).to({x:408,y:85.95,lineWidth:254},0).wait(4).to({x:481.5,y:98.2,lineWidth:489},0).wait(4).to({x:520.5,y:85.95,lineWidth:411},0).wait(4).to({x:591.5,y:98.2,lineWidth:195},0).wait(4).to({x:549.5,y:85.95,lineWidth:353},0).wait(4).to({x:642.5,y:98.2,lineWidth:167},0).wait(4).to({x:716,y:85.95,lineWidth:314},0).wait(4).to({x:756,y:98.2,lineWidth:164},0).wait(4).to({x:718.5,y:85.95,lineWidth:319},0).wait(4).to({x:811.45,y:98.2,lineWidth:505},0).wait(4).to({x:883,y:85.95,lineWidth:242},0).wait(4).to({x:932.45,y:98.2,lineWidth:401},0).wait(4).to({x:1010.95,y:85.95,lineWidth:276},0).wait(4).to({x:1079.95,y:98.2,lineWidth:244},0).wait(4).to({x:1152.95,y:85.95,lineWidth:932},0).wait(4).to({x:1193.45,y:98.2,lineWidth:181},0).wait(4).to({x:1272.95,y:85.95,lineWidth:366},0).wait(6).to({x:1354.45,color:"#666666",lineWidth:627},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_fon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fon
	this.instance = new lib.Растровоеизображение1();
	this.instance.setTransform(0,0,0.32,0.27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(91));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-35.85,-35.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.8,-35.8,71.5,71.5);


(lib.___Camera___ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-641,-361,1282,722);


(lib.PuppetShape_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.instance_1 = new lib.CachedBmp_101();
	this.instance_1.setTransform(-642.1,-112.45,0.5,0.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.CachedBmp_31();
	this.instance_2.setTransform(-642.1,-112.45,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_32();
	this.instance_3.setTransform(-642.1,-112.45,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_33();
	this.instance_4.setTransform(-642.15,-112.45,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_34();
	this.instance_5.setTransform(-642.15,-112.45,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_35();
	this.instance_6.setTransform(-642.15,-112.45,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_36();
	this.instance_7.setTransform(-642.15,-112.45,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_37();
	this.instance_8.setTransform(-642.15,-112.45,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_38();
	this.instance_9.setTransform(-642.15,-112.45,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_39();
	this.instance_10.setTransform(-642.1,-112.45,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_40();
	this.instance_11.setTransform(-642.1,-112.45,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_76();
	this.instance_12.setTransform(-642.1,-108.4,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_77();
	this.instance_13.setTransform(-642.1,-104.35,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_78();
	this.instance_14.setTransform(-642.1,-104.35,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_79();
	this.instance_15.setTransform(-642.1,-104.35,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_80();
	this.instance_16.setTransform(-642.1,-104.35,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_81();
	this.instance_17.setTransform(-642.1,-104.35,0.5,0.5);

	this.instance_18 = new lib.CachedBmp_82();
	this.instance_18.setTransform(-642.1,-104.35,0.5,0.5);

	this.instance_19 = new lib.CachedBmp_83();
	this.instance_19.setTransform(-642.1,-104.35,0.5,0.5);

	this.instance_20 = new lib.CachedBmp_84();
	this.instance_20.setTransform(-642.1,-104.35,0.5,0.5);

	this.instance_21 = new lib.CachedBmp_85();
	this.instance_21.setTransform(-642.1,-104.35,0.5,0.5);

	this.instance_22 = new lib.CachedBmp_86();
	this.instance_22.setTransform(-642.1,-104.5,0.5,0.5);

	this.instance_23 = new lib.CachedBmp_87();
	this.instance_23.setTransform(-642.1,-105.05,0.5,0.5);

	this.instance_24 = new lib.CachedBmp_88();
	this.instance_24.setTransform(-642.1,-105.55,0.5,0.5);

	this.instance_25 = new lib.CachedBmp_89();
	this.instance_25.setTransform(-642.1,-106.1,0.5,0.5);

	this.instance_26 = new lib.CachedBmp_90();
	this.instance_26.setTransform(-642.1,-106.6,0.5,0.5);

	this.instance_27 = new lib.CachedBmp_91();
	this.instance_27.setTransform(-642.1,-107.15,0.5,0.5);

	this.instance_28 = new lib.CachedBmp_92();
	this.instance_28.setTransform(-642.1,-107.7,0.5,0.5);

	this.instance_29 = new lib.CachedBmp_93();
	this.instance_29.setTransform(-642.1,-108.2,0.5,0.5);

	this.instance_30 = new lib.CachedBmp_94();
	this.instance_30.setTransform(-642.1,-108.75,0.5,0.5);

	this.instance_31 = new lib.CachedBmp_95();
	this.instance_31.setTransform(-642.1,-109.25,0.5,0.5);

	this.instance_32 = new lib.CachedBmp_96();
	this.instance_32.setTransform(-642.1,-109.8,0.5,0.5);

	this.instance_33 = new lib.CachedBmp_97();
	this.instance_33.setTransform(-642.1,-110.35,0.5,0.5);

	this.instance_34 = new lib.CachedBmp_98();
	this.instance_34.setTransform(-642.1,-110.85,0.5,0.5);

	this.instance_35 = new lib.CachedBmp_99();
	this.instance_35.setTransform(-642.1,-111.4,0.5,0.5);

	this.instance_36 = new lib.CachedBmp_100();
	this.instance_36.setTransform(-642.1,-111.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(19).to({_off:true},1).wait(10).to({_off:false},0).wait(34).to({_off:true},1).wait(25).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-642.5,-112.5,1285.4,226.6);


(lib.Монтажный_кадр_1_deform = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// deform
	this.instance = new lib.sun();
	this.instance.setTransform(628.4,143.2,1,1,0,0,0,80.7,94.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:112,regY:95,rotation:360,x:659.7,y:143.8},90).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_car = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// car
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(80.3,627.05,1,1,-0.0542);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({regX:0.1,regY:0.1,rotation:-0.6575,x:209.55,y:584.65},7).to({regX:0,regY:0,rotation:-2.2317,x:232.5,y:576.85},2).to({regX:0.1,regY:0.1,rotation:-6.4818,x:384,y:496.55},7).to({regX:0.2,rotation:17.2103,x:642.2,y:417.9},28).to({scaleX:0.9999,scaleY:0.9999,rotation:44.0466,x:848.75,y:438.3},12).to({regX:0.3,scaleX:0.9998,scaleY:0.9998,rotation:50.5269,x:962.6,y:511.9},6).to({scaleX:0.9999,scaleY:0.9999,rotation:22.7474,x:1110.85,y:567.1},9).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:23.9524,x:1376.65,y:581.45},14).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_bridge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bridge
	this.instance = new lib.PuppetShape_1("synched",1,false);
	this.instance.setTransform(640,610);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:20},19).to({startPosition:26},6).to({startPosition:31},5).to({startPosition:65},34).to({startPosition:68},3).to({startPosition:91},23).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_Кнопки = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Кнопки
	this.btn_pause = new lib.btn_pause();
	this.btn_pause.name = "btn_pause";
	this.btn_pause.setTransform(1160.8,679.9,0.0962,0.0962,0,0,0,-23.4,0);
	new cjs.ButtonHelper(this.btn_pause, 0, 1, 2, false, new lib.btn_pause(), 3);

	this.btn_play = new lib.btn_play();
	this.btn_play.name = "btn_play";
	this.btn_play.setTransform(1104.2,679.35,0.0968,0.0968,0,0,0,244.8,9.8);
	new cjs.ButtonHelper(this.btn_play, 0, 1, 2, false, new lib.btn_play(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_play},{t:this.btn_pause}]}).to({state:[{t:this.btn_play},{t:this.btn_pause}]},90).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.HTML5Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.actionFrames = [0,90];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
		this.btn_play = this.Кнопки.btn_play;
		this.btn_pause = this.Кнопки.btn_pause;
		this.btn_play.addEventListener("click", func_play.bind(this));
		this.btn_pause.addEventListener("click", func_pause.bind(this));
		this.stop();
		function func_play(){
		this.play();
		}
		function func_pause(){
		this.stop();
		}
	}
	this.frame_90 = function() {
		this.btn_play = undefined;this.btn_pause = undefined;this.btn_play = this.Кнопки.btn_play;
		this.btn_pause = this.Кнопки.btn_pause;
		this.___loopingOver___ = true;
		this.gotoAndPlay(1)
		/* this.gotoAndPlay(1)*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(90).call(this.frame_90).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(640,360);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(91));

	// letters_obj_
	this.letters = new lib.Монтажный_кадр_1_letters();
	this.letters.name = "letters";
	this.letters.setTransform(84.5,128.7,1,1,0,0,0,84.5,128.7);
	this.letters.depth = 0;
	this.letters.isAttachedToCamera = 0
	this.letters.isAttachedToMask = 0
	this.letters.layerDepth = 0
	this.letters.layerIndex = 0
	this.letters.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.letters).wait(91));

	// deform_obj_
	this.deform = new lib.Монтажный_кадр_1_deform();
	this.deform.name = "deform";
	this.deform.setTransform(659.7,143.8,1,1,0,0,0,659.7,143.8);
	this.deform.depth = 0;
	this.deform.isAttachedToCamera = 0
	this.deform.isAttachedToMask = 0
	this.deform.layerDepth = 0
	this.deform.layerIndex = 1
	this.deform.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.deform).wait(91));

	// Кнопки_obj_
	this.Кнопки = new lib.Монтажный_кадр_1_Кнопки();
	this.Кнопки.name = "Кнопки";
	this.Кнопки.setTransform(1126.5,681.8,1,1,0,0,0,1126.5,681.8);
	this.Кнопки.depth = 0;
	this.Кнопки.isAttachedToCamera = 0
	this.Кнопки.isAttachedToMask = 0
	this.Кнопки.layerDepth = 0
	this.Кнопки.layerIndex = 2
	this.Кнопки.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Кнопки).wait(91));

	// car_obj_
	this.car = new lib.Монтажный_кадр_1_car();
	this.car.name = "car";
	this.car.depth = 0;
	this.car.isAttachedToCamera = 0
	this.car.isAttachedToMask = 0
	this.car.layerDepth = 0
	this.car.layerIndex = 3
	this.car.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.car).wait(91));

	// bridge_obj_
	this.bridge = new lib.Монтажный_кадр_1_bridge();
	this.bridge.name = "bridge";
	this.bridge.setTransform(640.4,610.3,1,1,0,0,0,640.4,610.3);
	this.bridge.depth = 0;
	this.bridge.isAttachedToCamera = 0
	this.bridge.isAttachedToMask = 0
	this.bridge.layerDepth = 0
	this.bridge.layerIndex = 4
	this.bridge.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bridge).wait(91));

	// fon_obj_
	this.fon = new lib.Монтажный_кадр_1_fon();
	this.fon.name = "fon";
	this.fon.setTransform(640,360.1,1,1,0,0,0,640,360.1);
	this.fon.depth = 0;
	this.fon.isAttachedToCamera = 0
	this.fon.isAttachedToMask = 0
	this.fon.layerDepth = 0
	this.fon.layerIndex = 5
	this.fon.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(91));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(637.9,318.8,1032.1,405.3);
// library properties:
lib.properties = {
	id: 'DC2CCA65C9F76E48813AF56747A9F06D',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_95.png?1653918296228", id:"CachedBmp_95"},
		{src:"images/CachedBmp_98.png?1653918296228", id:"CachedBmp_98"},
		{src:"images/CachedBmp_103.png?1653918296228", id:"CachedBmp_103"},
		{src:"images/CachedBmp_100.png?1653918296228", id:"CachedBmp_100"},
		{src:"images/CachedBmp_97.png?1653918296228", id:"CachedBmp_97"},
		{src:"images/CachedBmp_93.png?1653918296228", id:"CachedBmp_93"},
		{src:"images/CachedBmp_94.png?1653918296228", id:"CachedBmp_94"},
		{src:"images/CachedBmp_99.png?1653918296228", id:"CachedBmp_99"},
		{src:"images/CachedBmp_96.png?1653918296228", id:"CachedBmp_96"},
		{src:"images/CachedBmp_92.png?1653918296228", id:"CachedBmp_92"},
		{src:"images/CachedBmp_91.png?1653918296228", id:"CachedBmp_91"},
		{src:"images/CachedBmp_90.png?1653918296228", id:"CachedBmp_90"},
		{src:"images/CachedBmp_88.png?1653918296228", id:"CachedBmp_88"},
		{src:"images/CachedBmp_89.png?1653918296228", id:"CachedBmp_89"},
		{src:"images/CachedBmp_80.png?1653918296228", id:"CachedBmp_80"},
		{src:"images/CachedBmp_85.png?1653918296228", id:"CachedBmp_85"},
		{src:"images/CachedBmp_86.png?1653918296228", id:"CachedBmp_86"},
		{src:"images/CachedBmp_87.png?1653918296228", id:"CachedBmp_87"},
		{src:"images/CachedBmp_81.png?1653918296228", id:"CachedBmp_81"},
		{src:"images/CachedBmp_83.png?1653918296228", id:"CachedBmp_83"},
		{src:"images/CachedBmp_84.png?1653918296228", id:"CachedBmp_84"},
		{src:"images/CachedBmp_82.png?1653918296228", id:"CachedBmp_82"},
		{src:"images/CachedBmp_79.png?1653918296228", id:"CachedBmp_79"},
		{src:"images/CachedBmp_78.png?1653918296228", id:"CachedBmp_78"},
		{src:"images/CachedBmp_77.png?1653918296228", id:"CachedBmp_77"},
		{src:"images/CachedBmp_76.png?1653918296228", id:"CachedBmp_76"},
		{src:"images/CachedBmp_36.png?1653918296228", id:"CachedBmp_36"},
		{src:"images/CachedBmp_40.png?1653918296228", id:"CachedBmp_40"},
		{src:"images/CachedBmp_35.png?1653918296228", id:"CachedBmp_35"},
		{src:"images/CachedBmp_39.png?1653918296228", id:"CachedBmp_39"},
		{src:"images/Растровоеизображение1.png?1653918296228", id:"Растровоеизображение1"},
		{src:"images/CachedBmp_38.png?1653918296228", id:"CachedBmp_38"},
		{src:"images/CachedBmp_37.png?1653918296228", id:"CachedBmp_37"},
		{src:"images/CachedBmp_34.png?1653918296228", id:"CachedBmp_34"},
		{src:"images/CachedBmp_33.png?1653918296228", id:"CachedBmp_33"},
		{src:"images/CachedBmp_32.png?1653918296228", id:"CachedBmp_32"},
		{src:"images/CachedBmp_31.png?1653918296228", id:"CachedBmp_31"},
		{src:"images/CachedBmp_101.png?1653918296228", id:"CachedBmp_101"},
		{src:"images/HTML5 Canvas_atlas_1.png?1653918296132", id:"HTML5 Canvas_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['DC2CCA65C9F76E48813AF56747A9F06D'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;