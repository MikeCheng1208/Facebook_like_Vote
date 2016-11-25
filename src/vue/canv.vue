<style lang="stylus">
    .canvasBox{
        position: absolute;
        top: 50%;
        left: 50%;
        width: 1200px;
        height: 800px;
        margin-top: -(800px/2);
        margin-left: -(1200px/2);
        h1{
            position: absolute;
            top: -8%;
            left: 25%;
            font-size:50px;
        }
    }
    #canvas{
        display: block;
        width:100%;
        height: auto;
    }
    .FBicon{
        width: 100%;
        height: auto;
        overflow: hidden;
        position: absolute;
        bottom: -75px;
        left: 0;
        >ul{
            display:block;
            width: 100%;
            height: 72px;
            position: relative
            >li{
                display:block;
                width: 80px;
                height: 40px;
                position: absolute;
                top:0;
                left:0;
                img{
                    display: block;
                    width: 40px;
                    height: 40px;
                    float: left;
                }
                h3{
                    padding-top: 7px;
                    padding-left: 2px;
                    float: left;
                }
            }
        }
        .icon1{
            left: 100px;
        }
        .icon2{
            left: 280px;
        }
        .icon3{
            left: 450px;
        }
        .icon4{
            left: 630px;
        }
        .icon5{
            left: 800px;
        }
        .icon6{
            left: 980px;
        }
        
    }
</style>

<template>
    <div class="canvasBox">
        <h1>你的讚數決定我們的高度</h1>
        <div class="FBicon">
            <ul>
                <li class="icon1">
                    <img src="../images/fbicon/like.png" alt="">
                    <h3>{{like}}</h3>
                </li>
                <li class="icon2">
                    <img src="../images/fbicon/love.png" alt="">
                    <h3>{{love}}</h3>
                </li>
                <li class="icon3">
                    <img src="../images/fbicon/haha.png" alt="">
                    <h3>{{haha}}</h3>
                </li>
                <li class="icon4">
                    <img src="../images/fbicon/wow.png" alt="">
                    <h3>{{wow}}</h3>
                </li>
                <li class="icon5">
                    <img src="../images/fbicon/sad.png" alt="">
                    <h3>{{sad}}</h3>
                </li>
                <li class="icon6">
                    <img src="../images/fbicon/angry.png" alt="">
                    <h3>{{angry}}</h3>
                </li>
            </ul>
        </div>
	    <canvas id="canvas" width="1200" height="800" style="display: block; background-color:#fff"></canvas>
    </div>
</template>

<script>    
    module.exports = {
        data(){
            return {
                fblikes : require("fblike"),
                lib : window.lib,
                images : window.images,
                createjs : window.createjs,
                ss : window.ss,
                setlikeData:'',
                exportRoot:'',
                like:0,
                love:0,
                haha:0,
                wow:0,
                sad:0,
                angry:0
            };
        },
        mounted(){
            var thix = this;
            var lib, images, createjs, ss;
            this.fblikes(lib = this.lib||{}, images = this.images||{}, createjs = this.createjs||{}, ss = this.ss||{});

            var canvas, stage, exportRoot;
            canvas = document.getElementById("canvas");
            images = images||{};
            ss = ss||{};
            var loader = new createjs.LoadQueue(false);
            loader.addEventListener("fileload", handleFileLoad);
            loader.addEventListener("complete", handleComplete);
            loader.loadManifest(lib.properties.manifest);
            function handleFileLoad(evt) {	
                if (evt.item.type == "image") { images[evt.item.id] = evt.result; }	
            }
            function handleComplete(evt) {
                var queue = evt.target;
                var ssMetadata = lib.ssMetadata;
                for(var i=0; i<ssMetadata.length; i++) {
                    ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
                }
                exportRoot = new lib.fbLike();
                stage = new createjs.Stage(canvas);
                stage.addChild(exportRoot);	
                //****************************************  

                thix.exportRoot = exportRoot;
                console.log("exportRoot-x->",thix.exportRoot);
                
                //****************************************
                createjs.Ticker.setFPS(lib.properties.fps);
                createjs.Ticker.addEventListener("tick", stage);
            };
            
        },
        computed:{
            
        },
        methods:{
            setData(data){
                this.setlikeData = data;
                console.log("like:",data.like);
                console.log("love:",data.love);
                console.log("haha:",data.haha);
                console.log("wow:",data.wow);
                console.log("sad:",data.sad);
                console.log("angry:",data.angry);
                console.log("data:",data);
                console.log("exportRoot:",this.exportRoot);

                this.like = data.like
                this.love = data.love
                this.haha = data.haha
                this.wow = data.wow
                this.sad = data.sad
                this.angry = data.angry

                this.exportRoot.a1.gotoAndStop(Math.min(49,data.like));
                this.exportRoot.a2.gotoAndStop(Math.min(49,data.love));
                this.exportRoot.a3.gotoAndStop(Math.min(49,data.haha));
                this.exportRoot.a4.gotoAndStop(Math.min(49,data.wow));
                this.exportRoot.a5.gotoAndStop(Math.min(49,data.sad));
                this.exportRoot.a6.gotoAndStop(Math.min(49,data.angry));
            }
        }
    }
</script>