(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"HTML5 Canvas_atlas_1", frames: [[0,1052,163,92],[0,791,328,259],[330,1043,342,228],[1652,810,316,247],[1578,0,335,281],[1652,529,313,279],[330,791,321,250],[791,787,859,349],[1578,283,371,244],[791,0,785,785],[0,0,789,789]]}
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



(lib.CachedBmp_96 = function() {
	this.initialize(img.CachedBmp_96);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2663,693);


(lib.CachedBmp_95 = function() {
	this.initialize(img.CachedBmp_95);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2666,696);


(lib.CachedBmp_100 = function() {
	this.initialize(img.CachedBmp_100);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2655,682);


(lib.CachedBmp_99 = function() {
	this.initialize(img.CachedBmp_99);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2655,685);


(lib.CachedBmp_98 = function() {
	this.initialize(img.CachedBmp_98);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2658,688);


(lib.CachedBmp_92 = function() {
	this.initialize(img.CachedBmp_92);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2675,708);


(lib.CachedBmp_101 = function() {
	this.initialize(img.CachedBmp_101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2655,680);


(lib.CachedBmp_97 = function() {
	this.initialize(img.CachedBmp_97);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2661,690);


(lib.CachedBmp_103 = function() {
	this.initialize(img.CachedBmp_103);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2647,665);


(lib.CachedBmp_93 = function() {
	this.initialize(img.CachedBmp_93);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2672,705);


(lib.CachedBmp_94 = function() {
	this.initialize(img.CachedBmp_94);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2669,701);


(lib.CachedBmp_88 = function() {
	this.initialize(img.CachedBmp_88);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2689,723);


(lib.CachedBmp_91 = function() {
	this.initialize(img.CachedBmp_91);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2679,711);


(lib.CachedBmp_90 = function() {
	this.initialize(img.CachedBmp_90);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2682,715);


(lib.CachedBmp_89 = function() {
	this.initialize(img.CachedBmp_89);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2685,719);


(lib.CachedBmp_87 = function() {
	this.initialize(img.CachedBmp_87);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2692,727);


(lib.CachedBmp_85 = function() {
	this.initialize(img.CachedBmp_85);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2698,733);


(lib.CachedBmp_86 = function() {
	this.initialize(img.CachedBmp_86);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2695,730);


(lib.CachedBmp_83 = function() {
	this.initialize(img.CachedBmp_83);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2704,740);


(lib.CachedBmp_84 = function() {
	this.initialize(img.CachedBmp_84);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2701,736);


(lib.CachedBmp_82 = function() {
	this.initialize(img.CachedBmp_82);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2707,743);


(lib.CachedBmp_81 = function() {
	this.initialize(img.CachedBmp_81);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2710,746);


(lib.CachedBmp_78 = function() {
	this.initialize(img.CachedBmp_78);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2718,753);


(lib.CachedBmp_77 = function() {
	this.initialize(img.CachedBmp_77);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2722,756);


(lib.CachedBmp_80 = function() {
	this.initialize(img.CachedBmp_80);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2713,748);


(lib.CachedBmp_76 = function() {
	this.initialize(img.CachedBmp_76);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2725,759);


(lib.CachedBmp_72 = function() {
	this.initialize(img.CachedBmp_72);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2737,770);


(lib.CachedBmp_75 = function() {
	this.initialize(img.CachedBmp_75);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2727,762);


(lib.CachedBmp_74 = function() {
	this.initialize(img.CachedBmp_74);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2731,764);


(lib.CachedBmp_73 = function() {
	this.initialize(img.CachedBmp_73);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2734,767);


(lib.CachedBmp_70 = function() {
	this.initialize(img.CachedBmp_70);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2743,776);


(lib.CachedBmp_71 = function() {
	this.initialize(img.CachedBmp_71);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2740,773);


(lib.CachedBmp_69 = function() {
	this.initialize(img.CachedBmp_69);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2746,779);


(lib.CachedBmp_68 = function() {
	this.initialize(img.CachedBmp_68);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2749,782);


(lib.CachedBmp_66 = function() {
	this.initialize(img.CachedBmp_66);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2755,788);


(lib.CachedBmp_67 = function() {
	this.initialize(img.CachedBmp_67);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2752,785);


(lib.CachedBmp_65 = function() {
	this.initialize(img.CachedBmp_65);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2758,791);


(lib.CachedBmp_64 = function() {
	this.initialize(img.CachedBmp_64);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2760,793);


(lib.CachedBmp_62 = function() {
	this.initialize(img.CachedBmp_62);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2766,799);


(lib.CachedBmp_61 = function() {
	this.initialize(img.CachedBmp_61);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2769,802);


(lib.CachedBmp_60 = function() {
	this.initialize(img.CachedBmp_60);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2772,805);


(lib.CachedBmp_63 = function() {
	this.initialize(img.CachedBmp_63);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2763,796);


(lib.CachedBmp_59 = function() {
	this.initialize(img.CachedBmp_59);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2774,808);


(lib.CachedBmp_58 = function() {
	this.initialize(img.CachedBmp_58);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2777,811);


(lib.CachedBmp_55 = function() {
	this.initialize(img.CachedBmp_55);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2780,814);


(lib.CachedBmp_57 = function() {
	this.initialize(img.CachedBmp_57);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2780,814);


(lib.CachedBmp_56 = function() {
	this.initialize(img.CachedBmp_56);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2783,817);


(lib.CachedBmp_54 = function() {
	this.initialize(img.CachedBmp_54);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2777,810);


(lib.CachedBmp_53 = function() {
	this.initialize(img.CachedBmp_53);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2774,807);


(lib.CachedBmp_50 = function() {
	this.initialize(img.CachedBmp_50);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2765,798);


(lib.CachedBmp_48 = function() {
	this.initialize(img.CachedBmp_48);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2759,792);


(lib.CachedBmp_51 = function() {
	this.initialize(img.CachedBmp_51);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2768,801);


(lib.CachedBmp_52 = function() {
	this.initialize(img.CachedBmp_52);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2771,804);


(lib.CachedBmp_49 = function() {
	this.initialize(img.CachedBmp_49);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2762,795);


(lib.CachedBmp_47 = function() {
	this.initialize(img.CachedBmp_47);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2756,789);


(lib.CachedBmp_45 = function() {
	this.initialize(img.CachedBmp_45);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2750,783);


(lib.CachedBmp_46 = function() {
	this.initialize(img.CachedBmp_46);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2753,786);


(lib.CachedBmp_44 = function() {
	this.initialize(img.CachedBmp_44);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2747,780);


(lib.CachedBmp_42 = function() {
	this.initialize(img.CachedBmp_42);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2741,774);


(lib.CachedBmp_43 = function() {
	this.initialize(img.CachedBmp_43);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2744,777);


(lib.CachedBmp_41 = function() {
	this.initialize(img.CachedBmp_41);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2738,771);


(lib.CachedBmp_37 = function() {
	this.initialize(img.CachedBmp_37);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2725,759);


(lib.CachedBmp_38 = function() {
	this.initialize(img.CachedBmp_38);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2728,762);


(lib.CachedBmp_40 = function() {
	this.initialize(img.CachedBmp_40);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2734,768);


(lib.CachedBmp_39 = function() {
	this.initialize(img.CachedBmp_39);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2731,765);


(lib.CachedBmp_36 = function() {
	this.initialize(img.CachedBmp_36);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2722,756);


(lib.CachedBmp_35 = function() {
	this.initialize(img.CachedBmp_35);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2719,753);


(lib.CachedBmp_79 = function() {
	this.initialize(img.CachedBmp_79);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2716,751);


(lib.CachedBmp_33 = function() {
	this.initialize(img.CachedBmp_33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2712,748);


(lib.CachedBmp_32 = function() {
	this.initialize(img.CachedBmp_32);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2709,745);


(lib.CachedBmp_29 = function() {
	this.initialize(img.CachedBmp_29);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2700,736);


(lib.CachedBmp_30 = function() {
	this.initialize(img.CachedBmp_30);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2703,739);


(lib.CachedBmp_31 = function() {
	this.initialize(img.CachedBmp_31);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2706,742);


(lib.CachedBmp_27 = function() {
	this.initialize(img.CachedBmp_27);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2694,729);


(lib.CachedBmp_28 = function() {
	this.initialize(img.CachedBmp_28);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2697,732);


(lib.CachedBmp_25 = function() {
	this.initialize(img.CachedBmp_25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2687,721);


(lib.CachedBmp_26 = function() {
	this.initialize(img.CachedBmp_26);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2691,725);


(lib.CachedBmp_23 = function() {
	this.initialize(img.CachedBmp_23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2680,713);


(lib.CachedBmp_24 = function() {
	this.initialize(img.CachedBmp_24);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2684,717);


(lib.CachedBmp_22 = function() {
	this.initialize(img.CachedBmp_22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2677,710);


(lib.CachedBmp_21 = function() {
	this.initialize(img.CachedBmp_21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2674,706);


(lib.CachedBmp_20 = function() {
	this.initialize(img.CachedBmp_20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2670,702);


(lib.CachedBmp_111 = function() {
	this.initialize(ss["HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(img.CachedBmp_18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2664,693);


(lib.CachedBmp_19 = function() {
	this.initialize(img.CachedBmp_19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2667,697);


(lib.CachedBmp_16 = function() {
	this.initialize(img.CachedBmp_16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2659,688);


(lib.CachedBmp_17 = function() {
	this.initialize(img.CachedBmp_17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2661,691);


(lib.CachedBmp_15 = function() {
	this.initialize(img.CachedBmp_15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2655,685);


(lib.CachedBmp_14 = function() {
	this.initialize(img.CachedBmp_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2655,683);


(lib.CachedBmp_110 = function() {
	this.initialize(ss["HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_108 = function() {
	this.initialize(ss["HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_109 = function() {
	this.initialize(ss["HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_106 = function() {
	this.initialize(ss["HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_107 = function() {
	this.initialize(ss["HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_105 = function() {
	this.initialize(ss["HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_104 = function() {
	this.initialize(ss["HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(img.CachedBmp_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2655,680);


(lib.CachedBmp_102 = function() {
	this.initialize(img.CachedBmp_102);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2655,677);


(lib.CachedBmp_2 = function() {
	this.initialize(img.CachedBmp_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2572,1450);


(lib.WarpedAsset_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_103();
	this.instance.setTransform(-661.8,-166.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-661.8,-166.2,1323.5,332.5);


(lib.btn_play = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(33.3,-169.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(33.3,-169.9,392.5,392.5);


(lib.btn_pause = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(-329.05,-167.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({x:-332.15,y:-186.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-332.1,-186.5,397.6,413.1);


(lib.Монтажный_кадр_1_sun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sun
	this.instance = new lib.CachedBmp_104();
	this.instance.setTransform(944.7,16.9,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_105();
	this.instance_1.setTransform(965.95,18.95,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_106();
	this.instance_2.setTransform(961.15,10.3,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_107();
	this.instance_3.setTransform(961.75,11.15,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_108();
	this.instance_4.setTransform(952.25,24.75,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_109();
	this.instance_5.setTransform(955.55,10.95,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_110();
	this.instance_6.setTransform(957.45,17.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},15).to({state:[{t:this.instance_2}]},15).to({state:[{t:this.instance_3}]},15).to({state:[{t:this.instance_4}]},15).to({state:[{t:this.instance_5}]},15).to({state:[{t:this.instance_6}]},15).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// background
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-3.6,-0.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(91));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Анимация6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_111();
	this.instance.setTransform(-40.65,-22.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.6,-22.8,81.5,46);


(lib.Анимация5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-214.65,-87.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-214.6,-87.2,429.5,174.5);


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


(lib.PuppetShape_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.WarpedAsset_2("synched",0);

	this.instance_1 = new lib.CachedBmp_102();
	this.instance_1.setTransform(-664.4,-170.65,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_13();
	this.instance_2.setTransform(-664.65,-172.2,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_14();
	this.instance_3.setTransform(-664.65,-173.75,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_15();
	this.instance_4.setTransform(-664.75,-175.3,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_16();
	this.instance_5.setTransform(-666.65,-176.85,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_17();
	this.instance_6.setTransform(-667.9,-178.35,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_18();
	this.instance_7.setTransform(-669.05,-179.85,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_19();
	this.instance_8.setTransform(-670.1,-181.4,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_20();
	this.instance_9.setTransform(-671.2,-183.35,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_21();
	this.instance_10.setTransform(-672.2,-184.95,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_22();
	this.instance_11.setTransform(-673.25,-186.55,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_23();
	this.instance_12.setTransform(-674.3,-188.2,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_24();
	this.instance_13.setTransform(-675.3,-189.8,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_25();
	this.instance_14.setTransform(-676.35,-191.45,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_26();
	this.instance_15.setTransform(-677.45,-193.5,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_27();
	this.instance_16.setTransform(-678.4,-195.1,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_28();
	this.instance_17.setTransform(-679.4,-196.7,0.5,0.5);

	this.instance_18 = new lib.CachedBmp_29();
	this.instance_18.setTransform(-680.4,-198.3,0.5,0.5);

	this.instance_19 = new lib.CachedBmp_30();
	this.instance_19.setTransform(-681.4,-199.9,0.5,0.5);

	this.instance_20 = new lib.CachedBmp_31();
	this.instance_20.setTransform(-682.4,-201.5,0.5,0.5);

	this.instance_21 = new lib.CachedBmp_32();
	this.instance_21.setTransform(-683.4,-202.95,0.5,0.5);

	this.instance_22 = new lib.CachedBmp_33();
	this.instance_22.setTransform(-684.35,-204.45,0.5,0.5);

	this.instance_23 = new lib.CachedBmp_79();
	this.instance_23.setTransform(-685.35,-205.85,0.5,0.5);

	this.instance_24 = new lib.CachedBmp_35();
	this.instance_24.setTransform(-686.3,-207.35,0.5,0.5);

	this.instance_25 = new lib.CachedBmp_36();
	this.instance_25.setTransform(-687.25,-208.85,0.5,0.5);

	this.instance_26 = new lib.CachedBmp_37();
	this.instance_26.setTransform(-688.2,-210.35,0.5,0.5);

	this.instance_27 = new lib.CachedBmp_38();
	this.instance_27.setTransform(-689.2,-211.9,0.5,0.5);

	this.instance_28 = new lib.CachedBmp_39();
	this.instance_28.setTransform(-690.15,-213.45,0.5,0.5);

	this.instance_29 = new lib.CachedBmp_40();
	this.instance_29.setTransform(-691.1,-215,0.5,0.5);

	this.instance_30 = new lib.CachedBmp_41();
	this.instance_30.setTransform(-692.05,-216.55,0.5,0.5);

	this.instance_31 = new lib.CachedBmp_42();
	this.instance_31.setTransform(-693,-218.15,0.5,0.5);

	this.instance_32 = new lib.CachedBmp_43();
	this.instance_32.setTransform(-693.95,-219.75,0.5,0.5);

	this.instance_33 = new lib.CachedBmp_44();
	this.instance_33.setTransform(-694.9,-221.4,0.5,0.5);

	this.instance_34 = new lib.CachedBmp_45();
	this.instance_34.setTransform(-695.85,-223,0.5,0.5);

	this.instance_35 = new lib.CachedBmp_46();
	this.instance_35.setTransform(-696.85,-224.65,0.5,0.5);

	this.instance_36 = new lib.CachedBmp_47();
	this.instance_36.setTransform(-697.8,-226.3,0.5,0.5);

	this.instance_37 = new lib.CachedBmp_48();
	this.instance_37.setTransform(-698.75,-227.9,0.5,0.5);

	this.instance_38 = new lib.CachedBmp_49();
	this.instance_38.setTransform(-699.75,-229.55,0.5,0.5);

	this.instance_39 = new lib.CachedBmp_50();
	this.instance_39.setTransform(-700.7,-231.15,0.5,0.5);

	this.instance_40 = new lib.CachedBmp_51();
	this.instance_40.setTransform(-701.65,-232.75,0.5,0.5);

	this.instance_41 = new lib.CachedBmp_52();
	this.instance_41.setTransform(-702.6,-234.35,0.5,0.5);

	this.instance_42 = new lib.CachedBmp_53();
	this.instance_42.setTransform(-703.55,-235.95,0.5,0.5);

	this.instance_43 = new lib.CachedBmp_54();
	this.instance_43.setTransform(-704.5,-237.55,0.5,0.5);

	this.instance_44 = new lib.CachedBmp_55();
	this.instance_44.setTransform(-705.4,-239.2,0.5,0.5);

	this.instance_45 = new lib.CachedBmp_56();
	this.instance_45.setTransform(-706.35,-240.8,0.5,0.5);

	this.instance_46 = new lib.CachedBmp_57();
	this.instance_46.setTransform(-705.45,-239.25,0.5,0.5);

	this.instance_47 = new lib.CachedBmp_58();
	this.instance_47.setTransform(-704.55,-237.7,0.5,0.5);

	this.instance_48 = new lib.CachedBmp_59();
	this.instance_48.setTransform(-703.7,-236.2,0.5,0.5);

	this.instance_49 = new lib.CachedBmp_60();
	this.instance_49.setTransform(-702.8,-234.65,0.5,0.5);

	this.instance_50 = new lib.CachedBmp_61();
	this.instance_50.setTransform(-701.9,-233.1,0.5,0.5);

	this.instance_51 = new lib.CachedBmp_62();
	this.instance_51.setTransform(-700.95,-231.6,0.5,0.5);

	this.instance_52 = new lib.CachedBmp_63();
	this.instance_52.setTransform(-700.05,-230,0.5,0.5);

	this.instance_53 = new lib.CachedBmp_64();
	this.instance_53.setTransform(-699.1,-228.5,0.5,0.5);

	this.instance_54 = new lib.CachedBmp_65();
	this.instance_54.setTransform(-698.2,-226.95,0.5,0.5);

	this.instance_55 = new lib.CachedBmp_66();
	this.instance_55.setTransform(-697.25,-225.4,0.5,0.5);

	this.instance_56 = new lib.CachedBmp_67();
	this.instance_56.setTransform(-696.35,-223.8,0.5,0.5);

	this.instance_57 = new lib.CachedBmp_68();
	this.instance_57.setTransform(-695.4,-222.2,0.5,0.5);

	this.instance_58 = new lib.CachedBmp_69();
	this.instance_58.setTransform(-694.45,-220.7,0.5,0.5);

	this.instance_59 = new lib.CachedBmp_70();
	this.instance_59.setTransform(-693.55,-219.1,0.5,0.5);

	this.instance_60 = new lib.CachedBmp_71();
	this.instance_60.setTransform(-692.65,-217.6,0.5,0.5);

	this.instance_61 = new lib.CachedBmp_72();
	this.instance_61.setTransform(-691.75,-216.1,0.5,0.5);

	this.instance_62 = new lib.CachedBmp_73();
	this.instance_62.setTransform(-690.85,-214.6,0.5,0.5);

	this.instance_63 = new lib.CachedBmp_74();
	this.instance_63.setTransform(-689.95,-213.1,0.5,0.5);

	this.instance_64 = new lib.CachedBmp_75();
	this.instance_64.setTransform(-689,-211.6,0.5,0.5);

	this.instance_65 = new lib.CachedBmp_76();
	this.instance_65.setTransform(-688.1,-210.15,0.5,0.5);

	this.instance_66 = new lib.CachedBmp_77();
	this.instance_66.setTransform(-687.2,-208.7,0.5,0.5);

	this.instance_67 = new lib.CachedBmp_78();
	this.instance_67.setTransform(-686.25,-207.3,0.5,0.5);

	this.instance_68 = new lib.CachedBmp_80();
	this.instance_68.setTransform(-684.4,-204.5,0.5,0.5);

	this.instance_69 = new lib.CachedBmp_81();
	this.instance_69.setTransform(-683.5,-203.1,0.5,0.5);

	this.instance_70 = new lib.CachedBmp_82();
	this.instance_70.setTransform(-682.55,-201.65,0.5,0.5);

	this.instance_71 = new lib.CachedBmp_83();
	this.instance_71.setTransform(-681.6,-200.2,0.5,0.5);

	this.instance_72 = new lib.CachedBmp_84();
	this.instance_72.setTransform(-680.65,-198.65,0.5,0.5);

	this.instance_73 = new lib.CachedBmp_85();
	this.instance_73.setTransform(-679.7,-197.1,0.5,0.5);

	this.instance_74 = new lib.CachedBmp_86();
	this.instance_74.setTransform(-678.7,-195.55,0.5,0.5);

	this.instance_75 = new lib.CachedBmp_87();
	this.instance_75.setTransform(-677.8,-194.05,0.5,0.5);

	this.instance_76 = new lib.CachedBmp_88();
	this.instance_76.setTransform(-676.85,-192.6,0.5,0.5);

	this.instance_77 = new lib.CachedBmp_89();
	this.instance_77.setTransform(-675.8,-190.5,0.5,0.5);

	this.instance_78 = new lib.CachedBmp_90();
	this.instance_78.setTransform(-674.8,-188.95,0.5,0.5);

	this.instance_79 = new lib.CachedBmp_91();
	this.instance_79.setTransform(-673.75,-187.4,0.5,0.5);

	this.instance_80 = new lib.CachedBmp_92();
	this.instance_80.setTransform(-672.75,-185.85,0.5,0.5);

	this.instance_81 = new lib.CachedBmp_93();
	this.instance_81.setTransform(-671.8,-184.35,0.5,0.5);

	this.instance_82 = new lib.CachedBmp_94();
	this.instance_82.setTransform(-670.85,-182.7,0.5,0.5);

	this.instance_83 = new lib.CachedBmp_95();
	this.instance_83.setTransform(-669.75,-180.95,0.5,0.5);

	this.instance_84 = new lib.CachedBmp_96();
	this.instance_84.setTransform(-668.75,-179.45,0.5,0.5);

	this.instance_85 = new lib.CachedBmp_97();
	this.instance_85.setTransform(-667.65,-178,0.5,0.5);

	this.instance_86 = new lib.CachedBmp_98();
	this.instance_86.setTransform(-666.35,-176.55,0.5,0.5);

	this.instance_87 = new lib.CachedBmp_99();
	this.instance_87.setTransform(-664.6,-175.05,0.5,0.5);

	this.instance_88 = new lib.CachedBmp_100();
	this.instance_88.setTransform(-664.65,-173.65,0.5,0.5);

	this.instance_89 = new lib.CachedBmp_101();
	this.instance_89.setTransform(-664.65,-172.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_83}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_85}]},1).to({state:[{t:this.instance_86}]},1).to({state:[{t:this.instance_87}]},1).to({state:[{t:this.instance_88}]},1).to({state:[{t:this.instance_89}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-706.3,-240.8,1391.5,410.70000000000005);


(lib.Монтажный_кадр_1_waves = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// waves
	this.instance = new lib.PuppetShape_2("synched",1,false);
	this.instance.setTransform(636.3,639.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:45},44).to({startPosition:91},46).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_ship = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ship
	this.instance = new lib.Анимация5("synched",0);
	this.instance.setTransform(-227.8,450.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-4.1994,x:126.5,y:423.65},15).to({rotation:-5.6903,x:186.3,y:411.95},3).to({rotation:0,x:287.85,y:411.25},5).to({rotation:2.4714,x:368,y:415.9},4).to({rotation:2.741,x:519.3,y:420.15},8).to({rotation:-2.2151,x:724.65,y:435.4},11).to({rotation:-4.4878,x:937.2,y:416.55},9).to({regX:0.1,regY:0.1,rotation:-7.6581,x:1156.7,y:395.65},14).to({rotation:-10.1674,x:1272.35,y:381.1},6).to({regX:0,regY:0,rotation:0,x:1504.5,y:401.7},15).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_bird = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bird
	this.instance = new lib.Анимация6("synched",0);
	this.instance.setTransform(-123.95,206);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[-123.8,206,-122.5,207.2,-121.3,206.2,-120.8,206.2,-120.9,205.6,-121,205.1,-121.4,204.9,-122.7,204.7,-123.1,204.2,-123.6,203.6,-122.9,202.8,-122.3,202.1,-121.3,201.8,-104.5,196.2,-82.9,191.7,-69.7,189,-43.7,184.7,49.8,169.5,102.2,163.9,183.1,155.3,248.9,158.4,274.4,159.6,311.4,163.5,417.3,174.3,520.9,192.6,529.6,194.2,546.9,197.2,562.1,199.9,573,201.5,617.3,208.2,671.3,211,710.3,213,770.2,213.4,784,213.6,792.3,213.4,804.5,213.3,814.4,212.5,838.1,210.6,871.3,203,890.1,198.7,927.6,189.6,1010.6,171.5,1109,172.8,1122,172.9,1130.1,174,1137.9,175.1,1148.8,178.3,1154.9,180,1167.2,183.7,1194,190.9,1223.5,191.2,1251.4,191.4,1280.2,185.4,1299.4,181.3,1319.1,174.4]}},90).wait(1));

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

	// Кнопки_obj_
	this.Кнопки = new lib.Монтажный_кадр_1_Кнопки();
	this.Кнопки.name = "Кнопки";
	this.Кнопки.setTransform(1126.5,681.8,1,1,0,0,0,1126.5,681.8);
	this.Кнопки.depth = 0;
	this.Кнопки.isAttachedToCamera = 0
	this.Кнопки.isAttachedToMask = 0
	this.Кнопки.layerDepth = 0
	this.Кнопки.layerIndex = 0
	this.Кнопки.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Кнопки).wait(91));

	// sun_obj_
	this.sun = new lib.Монтажный_кадр_1_sun();
	this.sun.name = "sun";
	this.sun.setTransform(1037.5,77.9,1,1,0,0,0,1037.5,77.9);
	this.sun.depth = 0;
	this.sun.isAttachedToCamera = 0
	this.sun.isAttachedToMask = 0
	this.sun.layerDepth = 0
	this.sun.layerIndex = 1
	this.sun.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.sun).wait(91));

	// waves_obj_
	this.waves = new lib.Монтажный_кадр_1_waves();
	this.waves.name = "waves";
	this.waves.setTransform(635.6,638.1,1,1,0,0,0,635.6,638.1);
	this.waves.depth = 0;
	this.waves.isAttachedToCamera = 0
	this.waves.isAttachedToMask = 0
	this.waves.layerDepth = 0
	this.waves.layerIndex = 2
	this.waves.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.waves).wait(91));

	// ship_obj_
	this.ship = new lib.Монтажный_кадр_1_ship();
	this.ship.name = "ship";
	this.ship.setTransform(-227.7,450.6,1,1,0,0,0,-227.7,450.6);
	this.ship.depth = 0;
	this.ship.isAttachedToCamera = 0
	this.ship.isAttachedToMask = 0
	this.ship.layerDepth = 0
	this.ship.layerIndex = 3
	this.ship.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ship).wait(91));

	// bird_obj_
	this.bird = new lib.Монтажный_кадр_1_bird();
	this.bird.name = "bird";
	this.bird.setTransform(-123.9,206.2,1,1,0,0,0,-123.9,206.2);
	this.bird.depth = 0;
	this.bird.isAttachedToCamera = 0
	this.bird.isAttachedToMask = 0
	this.bird.layerDepth = 0
	this.bird.layerIndex = 4
	this.bird.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bird).wait(91));

	// background_obj_
	this.background = new lib.Монтажный_кадр_1_background();
	this.background.name = "background";
	this.background.setTransform(639.4,362.1,1,1,0,0,0,639.4,362.1);
	this.background.depth = 0;
	this.background.isAttachedToCamera = 0
	this.background.isAttachedToMask = 0
	this.background.layerDepth = 0
	this.background.layerIndex = 5
	this.background.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.background).wait(91));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(197.6,359,1521.8000000000002,450.4);
// library properties:
lib.properties = {
	id: 'DC2CCA65C9F76E48813AF56747A9F06D',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_96.png?1655914729933", id:"CachedBmp_96"},
		{src:"images/CachedBmp_95.png?1655914729933", id:"CachedBmp_95"},
		{src:"images/CachedBmp_100.png?1655914729933", id:"CachedBmp_100"},
		{src:"images/CachedBmp_99.png?1655914729933", id:"CachedBmp_99"},
		{src:"images/CachedBmp_98.png?1655914729933", id:"CachedBmp_98"},
		{src:"images/CachedBmp_92.png?1655914729933", id:"CachedBmp_92"},
		{src:"images/CachedBmp_101.png?1655914729933", id:"CachedBmp_101"},
		{src:"images/CachedBmp_97.png?1655914729933", id:"CachedBmp_97"},
		{src:"images/CachedBmp_103.png?1655914729933", id:"CachedBmp_103"},
		{src:"images/CachedBmp_93.png?1655914729934", id:"CachedBmp_93"},
		{src:"images/CachedBmp_94.png?1655914729934", id:"CachedBmp_94"},
		{src:"images/CachedBmp_88.png?1655914729934", id:"CachedBmp_88"},
		{src:"images/CachedBmp_91.png?1655914729934", id:"CachedBmp_91"},
		{src:"images/CachedBmp_90.png?1655914729934", id:"CachedBmp_90"},
		{src:"images/CachedBmp_89.png?1655914729934", id:"CachedBmp_89"},
		{src:"images/CachedBmp_87.png?1655914729934", id:"CachedBmp_87"},
		{src:"images/CachedBmp_85.png?1655914729934", id:"CachedBmp_85"},
		{src:"images/CachedBmp_86.png?1655914729934", id:"CachedBmp_86"},
		{src:"images/CachedBmp_83.png?1655914729934", id:"CachedBmp_83"},
		{src:"images/CachedBmp_84.png?1655914729934", id:"CachedBmp_84"},
		{src:"images/CachedBmp_82.png?1655914729934", id:"CachedBmp_82"},
		{src:"images/CachedBmp_81.png?1655914729934", id:"CachedBmp_81"},
		{src:"images/CachedBmp_78.png?1655914729934", id:"CachedBmp_78"},
		{src:"images/CachedBmp_77.png?1655914729934", id:"CachedBmp_77"},
		{src:"images/CachedBmp_80.png?1655914729934", id:"CachedBmp_80"},
		{src:"images/CachedBmp_76.png?1655914729934", id:"CachedBmp_76"},
		{src:"images/CachedBmp_72.png?1655914729934", id:"CachedBmp_72"},
		{src:"images/CachedBmp_75.png?1655914729934", id:"CachedBmp_75"},
		{src:"images/CachedBmp_74.png?1655914729934", id:"CachedBmp_74"},
		{src:"images/CachedBmp_73.png?1655914729934", id:"CachedBmp_73"},
		{src:"images/CachedBmp_70.png?1655914729934", id:"CachedBmp_70"},
		{src:"images/CachedBmp_71.png?1655914729934", id:"CachedBmp_71"},
		{src:"images/CachedBmp_69.png?1655914729934", id:"CachedBmp_69"},
		{src:"images/CachedBmp_68.png?1655914729934", id:"CachedBmp_68"},
		{src:"images/CachedBmp_66.png?1655914729934", id:"CachedBmp_66"},
		{src:"images/CachedBmp_67.png?1655914729934", id:"CachedBmp_67"},
		{src:"images/CachedBmp_65.png?1655914729934", id:"CachedBmp_65"},
		{src:"images/CachedBmp_64.png?1655914729934", id:"CachedBmp_64"},
		{src:"images/CachedBmp_62.png?1655914729934", id:"CachedBmp_62"},
		{src:"images/CachedBmp_61.png?1655914729934", id:"CachedBmp_61"},
		{src:"images/CachedBmp_60.png?1655914729934", id:"CachedBmp_60"},
		{src:"images/CachedBmp_63.png?1655914729934", id:"CachedBmp_63"},
		{src:"images/CachedBmp_59.png?1655914729934", id:"CachedBmp_59"},
		{src:"images/CachedBmp_58.png?1655914729934", id:"CachedBmp_58"},
		{src:"images/CachedBmp_55.png?1655914729934", id:"CachedBmp_55"},
		{src:"images/CachedBmp_57.png?1655914729934", id:"CachedBmp_57"},
		{src:"images/CachedBmp_56.png?1655914729934", id:"CachedBmp_56"},
		{src:"images/CachedBmp_54.png?1655914729934", id:"CachedBmp_54"},
		{src:"images/CachedBmp_53.png?1655914729934", id:"CachedBmp_53"},
		{src:"images/CachedBmp_50.png?1655914729934", id:"CachedBmp_50"},
		{src:"images/CachedBmp_48.png?1655914729934", id:"CachedBmp_48"},
		{src:"images/CachedBmp_51.png?1655914729934", id:"CachedBmp_51"},
		{src:"images/CachedBmp_52.png?1655914729934", id:"CachedBmp_52"},
		{src:"images/CachedBmp_49.png?1655914729934", id:"CachedBmp_49"},
		{src:"images/CachedBmp_47.png?1655914729934", id:"CachedBmp_47"},
		{src:"images/CachedBmp_45.png?1655914729934", id:"CachedBmp_45"},
		{src:"images/CachedBmp_46.png?1655914729934", id:"CachedBmp_46"},
		{src:"images/CachedBmp_44.png?1655914729934", id:"CachedBmp_44"},
		{src:"images/CachedBmp_42.png?1655914729934", id:"CachedBmp_42"},
		{src:"images/CachedBmp_43.png?1655914729934", id:"CachedBmp_43"},
		{src:"images/CachedBmp_41.png?1655914729934", id:"CachedBmp_41"},
		{src:"images/CachedBmp_37.png?1655914729934", id:"CachedBmp_37"},
		{src:"images/CachedBmp_38.png?1655914729934", id:"CachedBmp_38"},
		{src:"images/CachedBmp_40.png?1655914729934", id:"CachedBmp_40"},
		{src:"images/CachedBmp_39.png?1655914729934", id:"CachedBmp_39"},
		{src:"images/CachedBmp_36.png?1655914729934", id:"CachedBmp_36"},
		{src:"images/CachedBmp_35.png?1655914729934", id:"CachedBmp_35"},
		{src:"images/CachedBmp_79.png?1655914729934", id:"CachedBmp_79"},
		{src:"images/CachedBmp_33.png?1655914729934", id:"CachedBmp_33"},
		{src:"images/CachedBmp_32.png?1655914729934", id:"CachedBmp_32"},
		{src:"images/CachedBmp_29.png?1655914729934", id:"CachedBmp_29"},
		{src:"images/CachedBmp_30.png?1655914729934", id:"CachedBmp_30"},
		{src:"images/CachedBmp_31.png?1655914729934", id:"CachedBmp_31"},
		{src:"images/CachedBmp_27.png?1655914729934", id:"CachedBmp_27"},
		{src:"images/CachedBmp_28.png?1655914729934", id:"CachedBmp_28"},
		{src:"images/CachedBmp_25.png?1655914729934", id:"CachedBmp_25"},
		{src:"images/CachedBmp_26.png?1655914729934", id:"CachedBmp_26"},
		{src:"images/CachedBmp_23.png?1655914729934", id:"CachedBmp_23"},
		{src:"images/CachedBmp_24.png?1655914729934", id:"CachedBmp_24"},
		{src:"images/CachedBmp_22.png?1655914729934", id:"CachedBmp_22"},
		{src:"images/CachedBmp_21.png?1655914729934", id:"CachedBmp_21"},
		{src:"images/CachedBmp_20.png?1655914729934", id:"CachedBmp_20"},
		{src:"images/CachedBmp_18.png?1655914729934", id:"CachedBmp_18"},
		{src:"images/CachedBmp_19.png?1655914729934", id:"CachedBmp_19"},
		{src:"images/CachedBmp_16.png?1655914729934", id:"CachedBmp_16"},
		{src:"images/CachedBmp_17.png?1655914729934", id:"CachedBmp_17"},
		{src:"images/CachedBmp_15.png?1655914729934", id:"CachedBmp_15"},
		{src:"images/CachedBmp_14.png?1655914729934", id:"CachedBmp_14"},
		{src:"images/CachedBmp_13.png?1655914729934", id:"CachedBmp_13"},
		{src:"images/CachedBmp_102.png?1655914729934", id:"CachedBmp_102"},
		{src:"images/CachedBmp_2.png?1655914729934", id:"CachedBmp_2"},
		{src:"images/HTML5 Canvas_atlas_1.png?1655914729763", id:"HTML5 Canvas_atlas_1"}
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