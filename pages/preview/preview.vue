<template>
	<view class="preview" >
		<swiper circular>
			<swiper-item v-for="item in 10">
				<image @click="maskChange" src="../../common/images/wallpaper/classify2.jpg" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<view class="mark" v-if="isShow">
			<view class="goBack"  >
				<uni-icons type="back" color="#fff" size="20"></uni-icons>
			</view>
			<view class="current">
				7 / 12
			</view>
			<view class="currentTime">
				<view class="time">
					<uni-dateformat :date="Date.now()" format="hh:mm"></uni-dateformat>
				</view>
				<view class="date">
					<uni-dateformat :date="Date.now()" format="MM月dd日"></uni-dateformat>
				</view>

			</view>
			<view class="creditBtm">
				<view class="info creditFlex">
					<uni-icons type="info" size="30"></uni-icons>
					<text>信息</text>
				</view>
				<view class="sc creditFlex">
					<uni-icons type="star" size="30"></uni-icons>
					<text>收藏</text>
				</view>
				<view class="download creditFlex">
					<uni-icons type="download" size="30"></uni-icons>
					<text>下载</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
 const isShow = ref(true);
 const maskChange = ()=>{
	 isShow.value = !isShow.value;
 }
</script>

<style lang="scss" scoped>
	.preview {
		width: 100%;
		height: 100vh;
		swiper {
			width: 100%;
			height: 100%;
			&-item {
				image {
					width: 100%;
					height: 100%;
				}
			}
		}

		.mark {
			&>view{
				position: absolute;
				left:0;	
				margin:auto;
				color:#fff;			
				right:0;
				width: fit-content;
			}
			.current {
				height: 40rpx;
				background-color: rgba(0, 0, 0, 0.4);
				top: 10vh;
				padding: 8rpx 28rpx;
				color: #fffefa;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 20rpx;
				font-size: 28rpx;
			}

			.currentTime {
				top: calc(10ch + 80rpx);
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				.time {
					font-size: 85rpx;
					color: #fffeff;
				}

				.date {
					color: #fdfefd;
				}

			}

			.creditBtm {
				width: 490rpx;
				height: 120rpx;
				background-color: #f1e4dc;
				bottom: 10vh;
				display: flex;
				justify-content: space-around;
				align-items: center;
				border-radius: 120rpx;
				backdrop-filter: blur(20rpx);
				color: $text-font-color-2;
				.creditFlex {
					display: flex;
					align-items: center;
					justify-content: center;
					flex-direction: column;
				}
			}
		}

	}
</style>