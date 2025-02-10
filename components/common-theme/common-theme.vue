<template>
	<view class="themeItem">
		<navigator class="box" url="/pages/classiftList/classiftList" v-if="!isMore">
			<image class="pic" src="../../common/images/wallpaper/classify1.jpg" mode="aspectFill"></image>
			<view class="mark">美女明星</view>
			<view class="tab">3天前更新</view>
		</navigator>
		<navigator class="box more" url="/pages/classify/classify" open-type="switchTab" v-if="isMore">
			<image class="pic" src="../../common/images/wallpaper/more.jpg" mode="aspectFill"></image>
			<view class="mark">
				<uni-icons type="more-filled" size="32" color="white"></uni-icons>
				<view class="text">
					更多
				</view>
			</view>
		</navigator>
	

	</view>
</template>

<script setup>
	const props = defineProps({
		isMore:{
			type:Boolean,
			default:false
		}
	})
</script>

<style lang="scss">
	.themeItem{
		.box{
			height: 340rpx;
			overflow: hidden;
			border-radius: 10rpx;
			position: relative;
			.pic{
				width: 100%;
				height: 100%;
			}
			.mark{
				width: 100%;
				height: 80rpx;
				position: absolute;
				bottom: 0;
				left: 0;
				background-color: rgba(0, 0, 0, 0.2);
				color: #f8f1f5;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 28rpx;
				font-weight: 600;
				backdrop-filter: blur(20px);
			}
			.tab{
				position: absolute;
				top: 0;
				left: 0;
				font-size: 22rpx;
				background-color: rgba(242, 152, 125, 0.8);
				backdrop-filter: blur(20px);
				padding: 6rpx 14rpx;
				color: white;
				border-radius: 0 0 20rpx 0;
				transform: scale(0.8);
				transform-origin: left top;
				
			}
		}
		.box.more{
			.mark{
				height: 100%;
				width: 100%;
				display: flex;
				flex-direction: column;
				.text{
					color: white;
					font-size: 26rpx;
				}
			}
		}
		
	}

</style>