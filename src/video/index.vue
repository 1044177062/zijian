<template>
  <div oncontextmenu="return false;" class="homepage-hero-module">
	<div class="mytop">
	  <div class="videobox">
		 <iframe  allowfullscreen  class="myvideo" :src="videourl"></iframe>
	  </div>
	  <div  class="myinput">
		  <input type="text" placeholder="此网站为个人制作个人使用,不服务于他人,第一次请输入密码,如有侵权请联系1044177062@qq.com" v-model="newvideourl" class="inputvalue" />
		  <div class="select" @click="setnewvideourl">搜索</div>
	  </div>
	</div>
    <div class="video-container">
      <div class="poster hidden">
        <img oncontextmenu="return false;" draggable="false" :style="fixStyle" src="https://s2.ax1x.com/2020/03/08/3z4E34.jpg" alt="">
      </div>
	  <div class="back"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        fixStyle: '',
		videourl:"http://api.69ne.com/?url=",
		newvideourl:""
      }
    },
    methods: {
     setnewvideourl(){
		  if(this.passwordistrue==false||this.passwordistrue==""){
			  if(this.newvideourl=="594666"){
				   this.passwordistrue=true
				   localStorage.setItem('passwordistrue',true)
				   alert('密码正确')
			  }else{
				   alert('密码错误，其他人员请不要使用')
			  }
			  this.newvideourl=""
		  }else{
			  this.videourl="http://api.69ne.com/?url="+this.newvideourl
			  this.newvideourl=""
			  this.isShow=true
		  }	  
     }
    },
	created(){
		  let getpasswrodtrue=localStorage.getItem('passwordistrue')||''
		  this.passwordistrue=getpasswrodtrue
	},
    mounted: function() {
      window.onresize = () => {
        const windowWidth = document.body.clientWidth
        const windowHeight = document.body.clientHeight
        const windowAspectRatio = windowHeight / windowWidth
        let videoWidth
        let videoHeight
        if (windowAspectRatio < 0.5625) {
          videoWidth = windowWidth
          videoHeight = videoWidth * 0.5625
          this.fixStyle = {
            height: windowWidth * 0.5625 + 'px',
            width: windowWidth + 'px',
            'margin-bottom': (windowHeight - videoHeight) / 2 + 'px',
            'margin-left': 'initial'
          }
		  this.gaodu=videoHeight/2+'px'
		  this.gaodu2=videoHeight/2+80+'px'
        } else {
          videoHeight = windowHeight
          videoWidth = videoHeight / 0.5625
          this.fixStyle = {
            height: windowHeight + 'px',
            width: windowHeight / 0.5625 + 'px',
            'margin-left': (windowWidth - videoWidth) / 2 + 'px',
            'margin-bottom': 'initial'
          }
		  this.gaodu=videoHeight/2+'px'
		 this.gaodu2=videoHeight/2+80+'px'
		  
        }
      }
      window.onresize()
    }
  }
</script>

<style scoped="scoped">
	
	@media all and (max-width: 450px){
		.myvideo{
			margin: 10px;
			width: 90%;
			border: 1px solid white;
			padding: 5px;
			height: 550px;
			transition: all 0.5s ease;
		}
		
		.myinput{
			position: absolute;
			top: 600px;
			transition: all 0.5s ease;
			margin:0 4%;
			width: 92%;
			border: 1px solid white;
			display: flex;
			height: 48px;
		}
		
		.select{
			font-size: 10px;
			width: 10%;
			height: 48px;
			line-height:48px;
			background: white;
			color: black;
			transition: all 0.5s ease;
			cursor: pointer;
		}
		
		.inputvalue{
			padding: 5px;
			width: 90%;
			height: 38px;
			border: 0;
			font-size: 10px;
			outline: none;
			color: white;
			background: transparent;
		}
	}
	
	@media all and (min-width: 450px){
		.myvideo{
			margin: 10px;
			width: 90%;
			border: 1px solid white;
			padding: 5px;
			height: 250px;
			transition: all 0.5s ease;
		}
		
		.myinput{
			position: absolute;
			top: 300px;
			transition: all 0.5s ease;
			margin:0 4%;
			width: 92%;
			border: 1px solid white;
			display: flex;
			height: 28px;
		}
		
		.select{
			font-size: 10px;
			width: 10%;
			height: 28px;
			line-height:28px;
			background: white;
			color: black;
			transition: all 0.5s ease;
			cursor: pointer;
		}
		
		.inputvalue{
			padding: 5px;
			width: 90%;
			height: 18px;
			border: 0;
			font-size: 10px;
			outline: none;
			color: white;
			background: transparent;
		}
		
	}
	
	
	
	
	.select:active{
		opacity: 0.4;
	}

	
	
	.videobox{
		width: 100%;
		height: 280px;
	}
	
	.hr{
		transition: all 0.5s ease;
		display: inline-block;
		width: 22px;
		border-bottom:1px solid white;
		height: 1px;
	}
	
	.mytop{
		transition: all 0.5s ease;
		width: 100%;
		position: absolute;
		z-index: 5;
		text-align: center;
		color: white;
		font-weight: 100;
	}
	
	.back{
		  z-index: 0;
		  height: 100vh;
		  width: 100%;
		  opacity: 0.4;
		  background: black;
		  position: absolute;
		  animation:mymove 3s ease;
	}
	
	.homepage-hero-module,
	.video-container {
	  position: relative;
	  height: 100vh;
	  overflow: hidden;
	}
	
	.video-container .poster img{
	  z-index: 0;
	  position: absolute;
	}
</style>
