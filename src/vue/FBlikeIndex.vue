<style lang="stylus">
    #worid{
        width: 100%;
        height: 100%;
        position: relative;
    }
</style>

<template>
    <div id="worid">
        <button @click='gotolive'>開始直撥</button>
        <button v-if='!connected' @click='fblogin'>fb Connect</button>
        <button @click='startFB'>fb like number</button>
        <canv ref='canv'></canv>
    </div>
</template>

<script>    
    module.exports = {
        el: '#App',
        data(){
            return {
                appId:942280062555688,
                appIdtest:142280062555688,
                connected: false,
                liveid:'',
            };
        },
        mounted(){
		    FB.init({
		      appId      : this.appId,
		      xfbml      : true,
		      version    : 'v2.8',
		      status: true
		    });
            FB.getLoginStatus(this.loginStatus);
        },
        components:{
            canv: require('canv')
        },
        computed:{
            
        },
        methods:{
            gotolive(){
                FB.ui({display: 'popup',method: 'live_broadcast',phase: 'create',}, this.live_broadcast);
            },
            live_broadcast(response){
                console.log("response.id : ",response.id);
                this.liveid = response.id;
                this.publish(response);
                if (!response.id) {
                    alert('dialog canceled');
                    return;
                }
            },
            publish(response){
                FB.ui({
                    display: 'popup',
                    method: 'live_broadcast',
                    phase: 'publish',
                    broadcast_data: response,
                }, function(responses) {
                    console.log("video status: \n" + responses.status);
                });
            },
            loginStatus(response){
                this.connected = response.status==="connected"
            },
            fblogin(){
                FB.login(this.loginStatus,{scope:'user_posts'});
            },
            startFB(){
                this.stopFB();
                this.fbTimer = setInterval(this.fblike, 1000);
                this.fblike();
            },
            stopFB(){
                clearInterval(this.fbTimer);
            },
            fblike(){ 
                FB.api(this.liveid,{fields:[
                    'reactions.type(LIKE).summary(total_count).limit(0).as(like)',
                    'reactions.type(LOVE).summary(total_count).limit(0).as(love)',
                    'reactions.type(WOW).summary(total_count).limit(0).as(wow)',
                    'reactions.type(HAHA).summary(total_count).limit(0).as(haha)',
                    'reactions.type(SAD).summary(total_count).limit(0).as(sad)',
                    'reactions.type(ANGRY).summary(total_count).limit(0).as(angry)',
                ]}, this.fblikeGet);
            },
            fblikeGet(e){
                // console.log("like:",e.like.summary.total_count);
                // console.log("love:",e.love.summary.total_count);
                // console.log("haha:",e.haha.summary.total_count);
                // console.log("wow:",e.wow.summary.total_count);
                // console.log("sad:",e.sad.summary.total_count);
                // console.log("angry:",e.angry.summary.total_count);
                this.$refs.canv.setData({
                    like:   e.like.summary.total_count,
                    love:   e.love.summary.total_count,
                    haha:   e.haha.summary.total_count,
                    wow :   e.wow.summary.total_count,
                    sad :   e.sad.summary.total_count,
                    angry : e.angry.summary.total_count
                });
            }            
        },
        watch:{
            
        }
    }
</script>