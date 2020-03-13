<template>
  <div oncontextmenu="return false;" class="homepage-hero-module">
    <div class="video-container">
		<div class="mytop" >
			<p class="myhed">
				<img v-if="meinfo.headimg" :src="meinfo.headimg"/>
				<img v-else  src="../assets/jz.gif"/>
			</p>
			<ul>
				<div class="hr"></div>
				<div class="gaodu">
					<li class="name">梓贱</li>
					<li class="title">欢迎来到梓贱的个人主页</li>
				</div>
				<div class="hr"></div>
			</ul>
			<ul class="myul">
				<li><a class="choice" href="tencent://message/?uin=1044177062&Site=梓贱个人主页&Menu=yes">作者QQ</a></li>
				<li><a class="choice" href="https://space.bilibili.com/8456806?from=search&seid=6304833652226798730">B站空间</a></li>
				<li><a class="choice" href="http://video.zijian666.top/">梓贱视频</a></li>
				<li><a class="choice" href="http://pan.zijian666.top/">梓贱云盘</a></li>
				<li><a class="choice" href="http://www.zijian666.top/mikutap/">MikuTap</a></li>
				<li><a class="choice" href="#">等待添加</a></li>
			</ul>
		</div>
      <div class="poster hidden">
        <img oncontextmenu="return false;" draggable="false" :style="fixStyle" src="../assets/mybg.jpg" alt="">
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
		meinfo:[]
      }
    },
    methods: {
	  gethed(){
		this.$axios.get('https://www.x6d.com/plus/comment_ajax.php?action=getQQInfo&qq=1044177062')
		.then(res=>{
			this.meinfo=res.data.data
			if(!this.meinfo){
				console.log('未获取到再次执行')
				this.gethed()
			}
			console.log(this.meinfo)
		}).catch(res=>{
			this.gethed()
		})
	  }
    },
	created(){
		this.gethed()
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
        } else {
          videoHeight = windowHeight
          videoWidth = videoHeight / 0.5625
          this.fixStyle = {
            height: windowHeight + 'px',
            width: windowHeight / 0.5625 + 'px',
            'margin-left': (windowWidth - videoWidth) / 2 + 'px',
            'margin-bottom': 'initial'
          }
        }
      }
      window.onresize()
    }
  }
</script>

<style scoped>
	
	a{
		color: white;
		text-decoration: none;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	
	
	@media all and (min-width: 450px){	
		.mytop{
			transition: all 0.5s ease;
			width: 100%;
			position: absolute;
			top: 20%;
			bottom: 30%;
			z-index: 5;
			text-align: center;
			color: white;
			font-weight: 100;
		}
		
		.hr{
			transition: all 0.5s ease;
			display: inline-block;
			width: 250px;
			border-bottom:1px solid white;
			height: 1px;
			margin:20px 0;
		}
		
		.myul{
			text-align: center;
		}
		
		.myul li:nth-child(1){
			border-left:1px solid white ;
			border-radius:10px  0 0 10px ;
		}
		
		.myul li:last-child{
			border-radius:0 10px  10px  0;
		}
		
		.myul li{
			display: inline-block;
			width: 10%;
			border: 1px solid white;
			border-left: 0;
			height: 20px;
		}
		
		.choice{
			display: inline-block;
			font-size: 8px;
			width: 100%;
			line-height: 20px;
			height: 20px;
		}
		
		.myul li:hover{
			transition: all 0.5s ease-out;
			opacity: 0.9;
			background: white;
			color: #000000;
		}
		
		.myul li:hover a{
			color: #000000;
		}
		
		
		.title{
			font-size: 10px;
			margin-top: 10px;
			transition: all 0.5s ease;
		}
		
		.name{
			font-size: 20px;
			letter-spacing:10px;
			font-weight:bold;
			transition: all 0.5s ease;
		}
		
		.myhed img{
			transition: all 0.5s ease;
			width: 50px;
			height: 50px;
			border-radius: 50%;
			border: 1px solid white;
		}
	}
	
	@media all and (max-width: 450px){
		
		
		.title{
			font-size: 30px;
			margin-top: 10px;
			transition: all 0.5s ease;
		}
		
		.name{
			font-size: 50px;
			letter-spacing:10px;
			font-weight:bold;
			transition: all 0.5s ease;
		}
		
		.myhed img{
			transition: all 0.5s ease;
			width: 170px;
			height: 170px;
			border-radius: 50%;
			border: 1px solid white;
		}
		
	
		.myul li{
			width: 100%;
			height:90px;
		}
		
		.myul li .choice{
			display: inline-block;
			border: 1px solid white;
			border-bottom: 0;
			height: 90px;
			font-size: 10px;
			width: 50%;
			line-height: 85px;
		}
		
		.myul li:last-child .choice{
			border-bottom: 1px solid white;
			border-radius: 0  0 10px 10px ;
		}
		
		.myul li:nth-child(1) .choice{
			border-radius:10px 10px  0  0 ;
		}
		
		.mytop{
			transition: all 0.5s ease;
			top: 10%;
			width: 100%;
			position: absolute;
			z-index: 5;
			text-align: center;
			color: white;
			font-weight: 100;
		}
		
		.hr{
			transition: all 0.5s ease;
			display: inline-block;
			width: 400px;
			border-bottom:1px solid white;
			height: 1px;
			margin:10px 0;
		}
		
	}
	
	

	
	
	
  .homepage-hero-module,
  .video-container {
    position: relative;
    height: 100vh;
    overflow: hidden;
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
  
  @keyframes mymove{
  	from{ opacity:1;}
  	to{ opacity:0.4;}
  }
  

  
  

  .video-container .poster img{
    z-index: 0;
    position: absolute;
  }


</style>
