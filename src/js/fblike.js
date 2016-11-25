module.exports = function (lib, img, cjs, ss) {

	var p; 
	lib.properties = {
		width: 1200,
		height: 800,
		fps: 30,
		color: "#FFFFFF",
		opacity: 1.00,
		manifest: [
			{src:require("../images/fbLike_atlas_.png"), id:"fbLike_atlas_"}
		]
	};


	lib.ssMetadata = [
			{name:"fbLike_atlas_", frames: [[0,358,346,62],[265,183,58,75],[331,0,136,180],[0,0,167,208],[169,183,94,134],[169,0,160,181],[331,182,136,174]]}
	];


	// symbols:



	(lib._61046300_03 = function() {
		this.spriteSheet = ss["fbLike_atlas_"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();



	(lib.Image = function() {
		this.spriteSheet = ss["fbLike_atlas_"];
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();



	(lib.Image_0 = function() {
		this.spriteSheet = ss["fbLike_atlas_"];
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();



	(lib.Image_1 = function() {
		this.spriteSheet = ss["fbLike_atlas_"];
		this.gotoAndStop(3);
	}).prototype = p = new cjs.Sprite();



	(lib.Image_2 = function() {
		this.spriteSheet = ss["fbLike_atlas_"];
		this.gotoAndStop(4);
	}).prototype = p = new cjs.Sprite();



	(lib.Image_3 = function() {
		this.spriteSheet = ss["fbLike_atlas_"];
		this.gotoAndStop(5);
	}).prototype = p = new cjs.Sprite();



	(lib.Image_4 = function() {
		this.spriteSheet = ss["fbLike_atlas_"];
		this.gotoAndStop(6);
	}).prototype = p = new cjs.Sprite();



	(lib.floor = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 圖層 1
		this.instance = new lib._61046300_03();
		this.instance.parent = this;
		this.instance.setTransform(0,-31);

		this.instance_1 = new lib._61046300_03();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-346,-31);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-346,-31,692,62);


	(lib.bg = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 圖層 1
		this.shape = new cjs.Shape();
		this.shape.graphics.lf(["#F4FBFE","#EFF8FC","#E2EEF5","#CBDFE9","#ABC9D9","#83AEC5","#558EAD"],[0,0.141,0.302,0.471,0.647,0.827,1],0,204,0,-215.3).s().p("Egx/AlfMAAAhK+MBj+AAAMAAABK+g");

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-320,-240,640,480);


	(lib.a6h = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 圖層 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#34474B").s().p("AgTB9IgZj5IBZABIgFD4g");
		this.shape.setTransform(12,0.1);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#34474B").s().p("AgaB9IgUj5IBdAAIgPD5g");
		this.shape_1.setTransform(-11.9,0);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-16.6,-12.5,33.3,25.2);


	(lib.a6c = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 圖層 1
		this.instance = new lib.Image_0();
		this.instance.parent = this;
		this.instance.setTransform(30,-83.9,0.386,0.386,0,0,180);

		this.shape = new cjs.Shape();
		this.shape.graphics.f("#34474B").s().p("AgJAKQgGgEAAgGQAAgFAGgFQAEgEAFgBQAHABAEAEQAEAFABAFQgBAGgEAEQgFAFgGABQgFgBgEgFg");
		this.shape.setTransform(0,44);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#34474B").s().p("AgJALQgGgFAAgGQAAgFAGgFQAEgEAFAAQAHAAAEAEQAEAFABAFQgBAGgEAFQgEAFgHAAQgFAAgEgFg");
		this.shape_1.setTransform(0,36.4);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#53656A").s().p("AAnjtIABAAQANACAoAMIAaCDIhXgEIAxAuIjHEgg");
		this.shape_2.setTransform(10.5,6.6);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#34474B").s().p("ABciLIAKAJIjLEOg");
		this.shape_3.setTransform(8.8,16.4);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#34474B").s().p("AgYAGIgRgOIBTAEIAAANg");
		this.shape_4.setTransform(18,-2.2);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#53656A").s().p("AhJgbIAxguIhXAEIAYiCQAngMAQgDIABAAICPGtg");
		this.shape_5.setTransform(-11.2,4.3);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#34474B").s().p("AgpgEIBSgEIgQAOIhCADg");
		this.shape_6.setTransform(-17.9,-2.2);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#34474B").s().p("AhehrIALgJICyDpg");
		this.shape_7.setTransform(-9.5,14.1);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#444343").s().p("AgkgHIBIAAIABAPg");
		this.shape_8.setTransform(-0.1,-4.4);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#535454").s().p("AgzCIIAOjmIgiggIAahYIBbAAIAaBWIgkAiIAODnIgyBOg");
		this.shape_9.setTransform(0,4.3);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#D7D7D7").s().p("Agwg6IAmBaIA6haIg8B1g");
		this.shape_10.setTransform(9.6,-11.2);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#D7D7D7").s().p("Agwg6IA7BaIAlhaIgjB1g");
		this.shape_11.setTransform(-9.5,-11.2);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#3F5358").s().p("Ai4FNIhVp3QAigSAtgJQAbgGATgBIABAAICPGsICQmsIACAAQAWADAhAIQAvALAWAMIhVJ3g");
		this.shape_12.setTransform(0,16.2);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#E9E9E9").s().p("AiRE2Ig2gOIA5ooIAAgBIA7hDIAmBEIBbAAIAmhEIA8BEIAAAAIA4IoQgUAIgiAGQhGAPhMAAQhMAAhFgPg");
		this.shape_13.setTransform(0,8.6);

		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#3F5358").s().p("AgaEYQAKg5gChOQgDiZg5hsQgLgUAKg/QAGguAPg0QAaALATAUQAPASAPAeQAtBiAPBwQAUCTgkCfg");
		this.shape_14.setTransform(31.6,15.4);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#E5C6AF").s().p("AAMBEQgMgBAAgcIAAgbIgEAaQgHAZgKgCQgOgCACgbIAFgbIgJAHQgNAIgIgKQgFgGAFgIIAFgJIAVgVIAGgiIBYATIgEAVIADAvQAAAxgPgBQgKgBgEgZIgBgYIgDAbQgGAZgJAAIgBgBg");
		this.shape_15.setTransform(31.5,50.4);

		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#3F5358").s().p("AhMgIQAPhwAthiQAOgdASgUQAVgWAXgIQAOA0AHAuQAJA/gLAUQg5BsgDCZQgCBOAKA5IhXASQgkigAUiSg");
		this.shape_16.setTransform(-31.6,15.4);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#E5C6AF").s().p("AgaAsIgEgbIgBAYQgEAZgKABQgPABAAgxIAEgvIgFgVIBYgTIAGAiQAUASACADQAMANgIAKQgFAGgIgBIgIgDIgJgHIAGAbQACAbgPACQgKACgGgZIgFgaIAAAbQgBAcgLABIgCABQgJAAgEgZg");
		this.shape_17.setTransform(-31.5,50.4);

		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#34474B").s().p("ABICsIgajlIhTABIgiDbIgBAIIhfgBIgBgHIgQlPIFxAAIgVFZg");
		this.shape_18.setTransform(0,66.7);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-40,-83.9,80.1,167.9);


	(lib.a5h = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 圖層 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#5F4C3F").s().p("AgmCTIgDklIBTABIgWEkg");
		this.shape.setTransform(11.4,0.1);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#5F4C3F").s().p("AgSCUIgXkmIBTAAIgCEmg");
		this.shape_1.setTransform(-11.3,0);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-15.6,-14.8,31.2,29.6);


	(lib.a5c = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 圖層 1
		this.instance = new lib.Image_2();
		this.instance.parent = this;
		this.instance.setTransform(-29.6,-78.5,0.549,0.549);

		this.shape = new cjs.Shape();
		this.shape.graphics.f("#444343").s().p("AgkgGIBIgBIABAPg");
		this.shape.setTransform(-0.1,-4.7);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#535454").s().p("Ag9DyIAZmPIgigfIAahXIBaAAIAZBVIgkAhIAZGNIg8Akg");
		this.shape_1.setTransform(0,10.3);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#E3E0DA").s().p("Agvg5IAlBZIA6hZIg8B0g");
		this.shape_2.setTransform(9.5,-11.4);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#E3E0DA").s().p("Agvg5IA6BZIAlhZIgjB0g");
		this.shape_3.setTransform(-9.4,-11.4);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#F2F2F2").s().p("Ai2FsIhUpxQAjgTAugJQAdgGAPAAIA7hDIAlBDIBbAAIAmhDIA6BDQALAAApAJQAzAMAWANIhUJxg");
		this.shape_4.setTransform(0,12.3);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#F2F2F2").s().p("AgaEVQAKg3gBhOQgDiYg5hrQgKgUAJg+QAGgtAOg1QAbAMATAUQAPASAOAdQAtBhAPBvQAUCRgkCeg");
		this.shape_5.setTransform(31.2,14.9);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#E5C6AF").s().p("AAMBEQgMgCAAgbIAAgbIgEAZQgHAZgKgBQgOgCACgbIAFgbIgJAHQgMAIgIgKQgFgGAEgIIAFgIIAVgVIAGgiIBXASIgEAVIADAvQAAAxgOgCQgLgBgDgYIgCgYIgDAaQgFAZgJAAIgBAAg");
		this.shape_6.setTransform(31.2,49.5);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#F2F2F2").s().p("AhLgIQAOhvAthhQAcg8AvgTQAOA0AHAuQAJA+gLAUQg4BrgDCYQgCBOAKA3IhXASQgjieAUiRg");
		this.shape_7.setTransform(-31.2,14.9);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#E5C6AF").s().p("AgaArIgEgaIgBAYQgDAYgLABQgOACAAgxIADgvIgEgVIBWgSIAHAiQATARACAEQAMAMgIAKQgFAGgIgBIgHgDIgJgHIAFAbQACAbgOACQgLABgGgZIgEgZIAAAbQgBAbgLACIgBAAQgJAAgFgZg");
		this.shape_8.setTransform(-31.2,49.5);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#5F4C3F").s().p("ABGCVIgCi4IiHAAIgDC3IhVgBIgbknIFtAAIgcEpg");
		this.shape_9.setTransform(0,63.5);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-39.6,-78.5,79.3,157.1);


	(lib.a4h = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 圖層 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#1A161F").s().p("AgqCGIAJkLIBMABIgeEKg");
		this.shape.setTransform(11,0.1);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#1A161F").s().p("AgkCDIgCkFIBNAAIgTEFg");
		this.shape_1.setTransform(-11.5,0,1,1.03);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-15.4,-13.6,30.9,27.2);


	(lib.a4c = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 圖層 1
		this.instance = new lib.Image();
		this.instance.parent = this;
		this.instance.setTransform(-26.2,-81.9,0.885,0.885);

		this.shape = new cjs.Shape();
		this.shape.graphics.f("#1A161F").s().p("AhakeQATgRgKg3IgOg0QAZALAjAMIBwAPQAWBwgDAJQgiCXgFAOQgEAJgEDxIgDDxIh8AGg");
		this.shape.setTransform(17.5,19.2);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#1A161F").s().p("AgtGWIgDjyQgEjxgEgJQgDgIgRhNIgThRQgCgFAKg6IAKg5IBwgPIAVgHQAZgJAPgHIgOA0QgLA3AUASIgMK4g");
		this.shape_1.setTransform(-17.6,19.7);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#1A161F").s().p("Ag6DpIAXmAIgggeIAZhUIBWAAIAYBSIgiAgIAYF+Ig6Ajg");
		this.shape_2.setTransform(0.3,11.4);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#DBDCDC").s().p("AivFiIhRpZQA2gcBCgEIA5hBIAkBBIBXAAIAbhKIAJARIA5A5QANABAlAIQAwALAWAMIhRJZg");
		this.shape_3.setTransform(0.3,12.9);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#1A161F").s().p("AhIgMQARhwAthiIANgpQAGgRAVgJIAkBZQAXA6gJASQg2BnACCWQABBMAMA3IhmAeQgiiWAXiYg");
		this.shape_4.setTransform(-28.4,11.4);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#E5C6AF").s().p("AgZAqIgDgZIgCAXQgDAXgKABQgOABAAgvIADgtIgEgUIBTgRIAHAgQASARACADIAFAIQADAIgEAFQgIAKgMgIIgIgHIAFAaQACAagOACQgKACgGgYIgEgYIAAAaQgBAagLABIgBAAQgIAAgFgXg");
		this.shape_5.setTransform(-27.8,43.3);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#1A161F").s().p("AgoEEQAMg3ABhMQACiWg2hnQgJgSAXg6IAkhZQAVAJAHARIAMApQAtBiARBwQAYCYgiCWg");
		this.shape_6.setTransform(28.4,10.8);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#E5C6AF").s().p("AALBBQgLgBAAgaIAAgaIgEAYQgHAYgJgCQgOgCACgaIAFgaIgJAHQgMAIgHgKQgFgFAEgIIAFgIIADgDQAFgGAMgLIAGggIBTARIgEAUIADAtQABAvgOgBQgKgBgDgXIgCgXIgDAZQgFAXgIAAIgCAAg");
		this.shape_7.setTransform(27.8,42.7);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#1A161F").s().p("ABECoIgDjjIiBAAIgSDiIhOAAIgPlPIFfAAIgeFRg");
		this.shape_8.setTransform(0.3,65);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#A6886E").s().p("Ag0AtIgigdIABgwIB8gYIAkAeIAMBHIg2AMg");
		this.shape_9.setTransform(0.8,-18.1);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-36.7,-81.9,73.4,163.9);


	(lib.a3h = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 圖層 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#5F4C3F").s().p("AgmCTIgDklIBTABIgWEkg");
		this.shape.setTransform(11.4,0.1);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#5F4C3F").s().p("AgSCTIgXkmIBTABIgCElg");
		this.shape_1.setTransform(-11.3,0);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-15.6,-14.8,31.2,29.6);


	(lib.a3c = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 圖層 1
		this.instance = new lib.Image_1();
		this.instance.parent = this;
		this.instance.setTransform(-27.8,-76.9,0.314,0.314);

		this.shape = new cjs.Shape();
		this.shape.graphics.f("#444343").s().p("AgkgGIBIAAIABANg");
		this.shape.setTransform(-0.1,-6.4);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#535454").s().p("Ag8DyIAYmPIgigfIAahXIBaAAIAZBVIgjAhIAYGNIg8Akg");
		this.shape_1.setTransform(0,8.7);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#E3E0DA").s().p("Agvg6IAlBaIA6haIg8B1g");
		this.shape_2.setTransform(9.5,-13.1);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#E3E0DA").s().p("Agvg6IA6BaIAlhaIgjB1g");
		this.shape_3.setTransform(-9.4,-13.1);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#F2F2F2").s().p("Ai2FrIhUpwQAjgSAugKQAYgFATgBIA8hEIAlBEIBaAAIAnhEIA6BEQAPAAAlAJQAzAMAWANIhUJwg");
		this.shape_4.setTransform(0,10.7);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#F2F2F2").s().p("AgaEVQAKg3gBhOQgDiYg5hrQgKgUAJg+QAGguAOgzQAxAUAaA6QAtBgAPBwQAUCRgkCfg");
		this.shape_5.setTransform(31.2,13.3);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#E5C6AF").s().p("AAMBEQgMgCAAgbIAAgbIgEAZQgHAZgKgBQgOgCACgcIAFgbIgJAHQgMAIgIgJQgFgGAEgIIAFgJQACgDATgRIAGgiIBXASIgEAVIADAvQAAAxgOgCQgLgBgDgYIgCgYIgDAaQgFAZgJAAIgBAAg");
		this.shape_6.setTransform(31.2,47.9);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#F2F2F2").s().p("AhLgIQAOhvAthhQAcg8AvgSQAOAyAHAvQAJA9gLAVQg4BrgDCYQgCBOAKA3IhXATQgjifAUiRg");
		this.shape_7.setTransform(-31.2,13.3);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#E5C6AF").s().p("AgaArIgDgaIgCAYQgDAYgKABQgPACAAgxIADgvIgEgVIBXgSIAGAiQAUARABADIAFAJQAEAIgEAGQgIAJgNgIIgJgHIAFAbQADAcgPACQgKABgGgZIgFgZIAAAbQgBAbgLACIgBAAQgJAAgFgZg");
		this.shape_8.setTransform(-31.2,47.9);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#5F4C3F").s().p("ABGCVIgCi4IiHAAIgDC3IhVgBIgbkoIFtAAIgcEqg");
		this.shape_9.setTransform(0,61.9);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-39.6,-76.9,79.3,153.8);


	(lib.a2h = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 圖層 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#34474B").s().p("AgSB8Igaj4IBZABIgFD3g");
		this.shape.setTransform(12,0.1);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#34474B").s().p("AgbB9IgTj5IBdAAIgPD5g");
		this.shape_1.setTransform(-11.9,0);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-16.6,-12.5,33.3,25.2);


	(lib.a2c = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 圖層 1
		this.instance = new lib.Image_4();
		this.instance.parent = this;
		this.instance.setTransform(-30,-82,0.385,0.385);

		this.shape = new cjs.Shape();
		this.shape.graphics.f("#34474B").s().p("AgKALQgEgEAAgHQAAgFAEgFQAFgEAFAAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAQgFAAgFgEg");
		this.shape.setTransform(-0.1,42);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#34474B").s().p("AgKALQgEgFAAgGQAAgFAEgFQAFgEAFAAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAQgFAAgFgEg");
		this.shape_1.setTransform(-0.1,34.4);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#53656A").s().p("AAnjtIAAAAQAKAAArAOIAbCDIhXgEIAxAuIjHEgg");
		this.shape_2.setTransform(10.5,4.7);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#34474B").s().p("ABciLIAKAJIjLEOg");
		this.shape_3.setTransform(8.8,14.5);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#34474B").s().p("AgYAGIgRgOIBSAEIAAANg");
		this.shape_4.setTransform(17.9,-4.1);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#53656A").s().p("AhJgbIAxguIhXAEIAYiCQAvgPAJAAIAAAAICPGtg");
		this.shape_5.setTransform(-11.2,2.4);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#34474B").s().p("AgogEIBRgEIgQAOIhBADg");
		this.shape_6.setTransform(-17.9,-4.1);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#34474B").s().p("AhehrIALgJICyDpg");
		this.shape_7.setTransform(-9.5,12.1);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#444343").s().p("AgkgGIBJgBIAAAPg");
		this.shape_8.setTransform(-0.1,-6.4);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#535454").s().p("AgzCIIAOjmIgigfIAahZIBbAAIAaBWIgkAhIAODnIgxBPg");
		this.shape_9.setTransform(-0.1,2.4);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#D7D7D7").s().p("Agwg6IAmBaIA7haIg9B1g");
		this.shape_10.setTransform(9.5,-13.2);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#D7D7D7").s().p("Agvg6IA6BaIAlhaIgjB1g");
		this.shape_11.setTransform(-9.6,-13.2);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#3F5358").s().p("Ai4FNIhVp3QAzgaBKgIIABAAIAAAAICPGtICQmtIACAAQAXADAgAIQAvALAWAMIhVJ3g");
		this.shape_12.setTransform(0,14.2);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#E9E9E9").s().p("AiRE3Ig2gPIA4ooIABgBIA7hDIAmBEIBbAAIAmhEIA8BEIAAAAIA4IoQgTAHgjAIQhGAOhMAAQhMAAhFgOg");
		this.shape_13.setTransform(0,6.6);

		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#3F5358").s().p("AgbEYQAKg4gBhPQgDiZg5hsQgLgVAJg+QAHgvAOgzQAxAUAbA6QAtBiAPBwQAUCTgkCgg");
		this.shape_14.setTransform(31.6,13.5);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#E5C6AF").s().p("AAMBEQgMgCAAgbIAAgbIgFAaQgGAZgKgCQgPgCACgcIAGgbIgJAHQgNAIgIgKQgFgGAEgHIAFgJQACgDAUgSIAGgiIBYATIgFAUIAEAwQAAAxgPgBQgKgBgEgZIgBgYIgDAbQgGAZgJAAIgBgBg");
		this.shape_15.setTransform(31.5,48.4);

		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#3F5358").s().p("AhMgIQAPhwAthjQAcg7AvgUQAPA1AGAuQAKA+gLAVQg5BsgDCaQgCBOAKA4IhXATQgkigAUiTg");
		this.shape_16.setTransform(-31.6,13.4);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#E5C6AF").s().p("AgaAsIgEgbIgBAYQgEAZgKABQgPABAAgxIADgwIgEgUIBYgTIAGAiQAUASABADIAGAJQAEAHgFAGQgIAKgNgIIgJgHIAFAbQACAcgOACQgKACgHgZIgEgaIAAAbQgBAbgLACIgBABQgJAAgFgZg");
		this.shape_17.setTransform(-31.5,48.4);

		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#34474B").s().p("ABICsIgajlIhTAAIgiDcIgBAIIhfAAIgRlXIFxAAIgVFZg");
		this.shape_18.setTransform(0,64.7);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-40,-82,80.1,164.1);


	(lib.a1h = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 圖層 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#1A161F").s().p("AgqCGIAJkLIBNAAIgfELg");
		this.shape.setTransform(11,0.1);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#1A161F").s().p("AgkCDIgCkFIBNAAIgTEFg");
		this.shape_1.setTransform(-11.5,-0.3,1,1.061);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-15.4,-14.3,30.9,28);


	(lib.a1c = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 圖層 1
		this.instance = new lib.Image_3();
		this.instance.parent = this;
		this.instance.setTransform(-33.9,-83.3,0.393,0.393);

		this.shape = new cjs.Shape();
		this.shape.graphics.f("#1A161F").s().p("AhZkdQATgRgLg4IgOg0QAZAMAkALIBwAPQAVBwgDAJIgSBQQgRBNgEAIQgDAJgFDxIgDDyIh7AFg");
		this.shape.setTransform(17.5,20.5);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#1A161F").s().p("AgtGVIgDjyQgEjwgEgKQgDgIgShMIgShRQgDgIAVhxIBwgOIAVgIQAZgIAPgHIgOA0QgLA3AUARIgMK5g");
		this.shape_1.setTransform(-17.5,21);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#1A161F").s().p("Ag6DpIAXmAIgggeIAZhUIBWAAIAYBSIgiAgIAYF+Ig6Ajg");
		this.shape_2.setTransform(0.3,12.7);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#DBDCDC").s().p("AivFiIhRpZQAigRArgJQAdgGAOAAIA5hBIAkBBIBXAAIAbhKIAJARIA5A5QAKAAAoAJQAwALAWANIhRJYg");
		this.shape_3.setTransform(0.4,14.2);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#1A161F").s().p("AhIgLQARhxAthhIAMgqQAHgRAVgJIAkBaQAYA6gKARQg2BnACCWQABBMAMA3IhnAeQgiiWAYiXg");
		this.shape_4.setTransform(-28.4,12.7);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#E5C6AF").s().p("AgZAqIgDgaIgBAXQgEAYgKABQgOABABgvIADgtIgEgUIBTgRIAGAgQATARABADIAFAIQAEAHgFAGQgHAKgMgIIgJgHIAFAaQACAagOACQgJACgHgYIgEgYIAAAZQgBAagKACIgCAAQgIAAgFgXg");
		this.shape_5.setTransform(-27.8,44.6);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#1A161F").s().p("AgoEEQAMg3ABhMQACiWg2hnQgJgRAXg6IAkhaQAVAJAHARIAMAqQAtBhARBxQAXCXgiCWg");
		this.shape_6.setTransform(28.4,12.1);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#E5C6AF").s().p("AAMBBQgMgCAAgaIAAgZIgEAYQgGAYgKgCQgOgCACgaIAFgaIgIAHQgMAIgIgKQgEgGADgHIAFgIQACgDASgRIAHggIBTARIgEAUIADAtQAAAvgOgBQgKgBgDgYIgCgXIgDAaQgFAXgIAAIgBAAg");
		this.shape_7.setTransform(27.8,44.1);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#1A161F").s().p("ABECoIgDjjIiBAAIgSDiIhOAAIgPlPIFfAAIgeFRg");
		this.shape_8.setTransform(0.4,66.4);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-36.7,-83.3,73.4,166.6);


	(lib.a6 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// timeline functions:
		this.frame_0 = function() {
			this.stop();
		}

		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(50));

		// 圖層 2
		this.instance = new lib.a6c();
		this.instance.parent = this;
		this.instance.setTransform(0,-16.1);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-569},49).wait(1));

		// 圖層 3
		this.instance_1 = new lib.a6h();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-0.3,92.7,1,1,0,0,0,-0.1,12.6);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:23.61,y:92.8},49).wait(1));

		// 圖層 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#3E2A1F").s().p("AhFAhQgKgGgDgNIgBgMQAFgnAzgBQAZAAAWAHIAAgDIA8AAIAEAdIgjAMIgCgHQg9AnghAAQgNAAgJgGg");
		this.shape.setTransform(-17,96.2);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#3E2A1F").s().p("AguAAIgBAHIgkgMIAEgdIA8AAIAAADIAwgHQAyABAFAnQACAVgQAKQgJAGgNAAQghAAg9gng");
		this.shape_1.setTransform(17.8,96.2);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(50));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-40,-100.1,80.1,200.2);


	(lib.a5 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// timeline functions:
		this.frame_0 = function() {
			this.stop();
		}

		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(50));

		// 圖層 2
		this.instance = new lib.a5c();
		this.instance.parent = this;
		this.instance.setTransform(0,-18);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-582.2},49).wait(1));

		// 圖層 3
		this.instance_1 = new lib.a5h();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-0.1,89.2,1,1,0,0,0,0,14.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:20.31,y:92.8},48).to({regY:13.8,scaleY:20.72,y:68.5},1).wait(1));

		// 圖層 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#5F4C3F").s().p("AhEAhQgKgGgDgNIgBgMQAFgmAygBQAYgBAWAIIAAgDIA8AAIAEAcIgjAMIgCgHQg8AnghAAQgNAAgIgGg");
		this.shape.setTransform(-15.4,92.6);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#5F4C3F").s().p("AgtAAIgCAHIgjgMIAEgcIA8AAIAAADIAugHQAyABAFAmQACAVgQAKQgIAFgNAAQghAAg8gmg");
		this.shape_1.setTransform(15.2,92.6);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(50));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-39.6,-96.5,79.3,193.1);


	(lib.a4 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// timeline functions:
		this.frame_0 = function() {
			this.stop();
		}

		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(50));

		// 圖層 2
		this.instance = new lib.a4c();
		this.instance.parent = this;
		this.instance.setTransform(0,-17);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-573.1},49).wait(1));

		// 圖層 3
		this.instance_1 = new lib.a4h();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-0.6,91.9,1,1,0,0,0,-0.1,13.6);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:21.98,y:93},49).wait(1));

		// 圖層 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#1A161F").s().p("AhBAgQgKgHgDgMIgBgLQAFglAwgBQAYgBAVAIIAAgDIA5AAIAEAbIgiALIgBgGQg6AlggAAQgMAAgIgFg");
		this.shape.setTransform(-17.7,94.5);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#1A161F").s().p("AgrAAIgCAGIgigLIAEgbIA5AAIAAADIAtgHQAwABAFAlIgBALQgDAMgJAHQgIAFgNAAQggAAg5glg");
		this.shape_1.setTransform(13.8,95.2);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(50));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-36.7,-98.9,73.4,197.9);


	(lib.a3 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// timeline functions:
		this.frame_0 = function() {
			this.stop();
		}

		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(50));

		// 圖層 2
		this.instance = new lib.a3c();
		this.instance.parent = this;
		this.instance.setTransform(0,-18.3);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-580.9},49).wait(1));

		// 圖層 3
		this.instance_1 = new lib.a3h();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-0.1,87.9,1,1,0,0,0,0,14.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:20.54,y:89},49).wait(1));

		// 圖層 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#5F4C3F").s().p("AhEAhQgKgHgDgNIgBgLQAFgnAygBQAYAAAWAIIAAgDIA8AAIAEAcIgjALIgCgGQg7AngiAAQgNAAgIgGg");
		this.shape.setTransform(-15.4,91.4);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#5F4C3F").s().p("AgtAAIgCAGIgjgLIAEgcIA8AAIAAADIAugIQAyABAFAnIgBALQgDANgKAHQgIAGgNAAQgiAAg7gng");
		this.shape_1.setTransform(15.2,91.4);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(50));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-39.6,-95.2,79.3,190.5);


	(lib.a2 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// timeline functions:
		this.frame_0 = function() {
			this.stop();
		}

		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(50));

		// 圖層 2
		this.instance = new lib.a2c();
		this.instance.parent = this;
		this.instance.setTransform(0,-16.1);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-567.4},49).wait(1));

		// 圖層 3
		this.instance_1 = new lib.a2h();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-0.4,90.8,1,1,0,0,0,-0.1,12.6);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:22.72,y:90.7},48).to({regY:11.5,scaleY:23.18,y:65.3},1).wait(1));

		// 圖層 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#3E2A1F").s().p("AhFAhQgJgGgEgNIgBgMQAFgnAzgBQAZAAAWAHIAAgDIA8AAIAEAdIgjALIgCgGQg9AnghAAQgNAAgJgGg");
		this.shape.setTransform(-17,94.3);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#3E2A1F").s().p("AguAAIgCAGIgjgLIAEgdIA8AAIAAADIAwgHQAyABAFAnIgBAMQgDANgKAGQgJAGgNAAQghAAg9gng");
		this.shape_1.setTransform(17.8,94.3);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(50));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-40,-98.2,80.1,196.4);


	(lib.a1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// timeline functions:
		this.frame_0 = function() {
			this.stop();
		}

		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(50));

		// 圖層 7
		this.instance = new lib.a1c();
		this.instance.parent = this;
		this.instance.setTransform(0,-16.9);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-560.1},49).wait(1));

		// 圖層 1
		this.instance_1 = new lib.a1h();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-0.5,94.5,1,1.427,0,0,0,-0.1,13.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:21.41,y:92.4},49).wait(1));

		// 圖層 8
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#1A161F").s().p("AhCAgQgJgHgDgMIgBgLQAFglAwgBQAYAAAVAHIAAgDIA5AAIAEAcIgiAKIgCgGQg5AlggAAQgMAAgJgFg");
		this.shape.setTransform(-17.6,95.8);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#1A161F").s().p("AgsAAIgBAGIgigKIAEgcIA5AAIAAADIAtgHQAwABAFAlQABAUgOAKQgJAFgMAAQggAAg6glg");
		this.shape_1.setTransform(13.8,96.5);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(50));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-36.7,-100.2,73.4,200.5);


	// stage content:



	(lib.fbLike = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// a6
		this.a6 = new lib.a6();
		this.a6.parent = this;
		this.a6.setTransform(1043.8,682.9,1.008,1.008,0,0,0,0.1,0.2);

		this.timeline.addTween(cjs.Tween.get(this.a6).wait(1));

		// a5
		this.a5 = new lib.a5();
		this.a5.parent = this;
		this.a5.setTransform(867.9,686.9,1.008,1.008,0,0,0,0.2,0.2);

		this.timeline.addTween(cjs.Tween.get(this.a5).wait(1));

		// a4
		this.a4 = new lib.a4();
		this.a4.parent = this;
		this.a4.setTransform(691.9,683.6,1.008,1.008,0,0,0,0.1,0.2);

		this.timeline.addTween(cjs.Tween.get(this.a4).wait(1));

		// a3
		this.a3 = new lib.a3();
		this.a3.parent = this;
		this.a3.setTransform(516,690.3,1.008,1.008,0,0,0,0.2,0.3);

		this.timeline.addTween(cjs.Tween.get(this.a3).wait(1));

		// a2
		this.a2 = new lib.a2();
		this.a2.parent = this;
		this.a2.setTransform(340.1,684.8,1.008,1.008,0,0,0,0.2,0.1);

		this.timeline.addTween(cjs.Tween.get(this.a2).wait(1));

		// a1
		this.a1 = new lib.a1();
		this.a1.parent = this;
		this.a1.setTransform(164,681,1.008,1.008,0,0,0,0.1,0.1);

		this.timeline.addTween(cjs.Tween.get(this.a1).wait(1));

		// bg
		this.instance = new lib.floor();
		this.instance.parent = this;
		this.instance.setTransform(594.8,803.5,1.809,0.817);

		this.instance_1 = new lib.bg();
		this.instance_1.parent = this;
		this.instance_1.setTransform(601,402.2,1.878,1.675,0,0,0,0,0.1);
		this.instance_1.alpha = 0.59;

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(569.1,399.9,1251.5,829);


}