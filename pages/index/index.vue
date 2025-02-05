<template>
	<view class="homeLayout">
		<view class="banner">
			<swiper indicator-dots=true indicator-color="rgba(255, 255, 255, 0.7)" 
			indicator-active-color=#ffffff circular=true autoplay=true interval="2000">
				<swiper-item v-for="item in pics">
					<image :src="item" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>
		
		<view class="notice">
			<view class="left">
				<uni-icons type="sound-filled" size="28" color="#2aa47f"></uni-icons>
				<text>公告</text>
			</view>
			<view class="center">
				<swiper vertical autoplay circular interval="1500" duration="300" >
					<swiper-item v-for="item in 3">文字内容文字内容文字内容文字内容文字内容文字内容</swiper-item>
				</swiper>
			</view>
			<view class="right">
				<uni-icons type="right" size="25" color="#e4e4e4"></uni-icons>
			</view>
		</view>
		<view class="select">
			<common-title>
				<template  #name>今日推荐</template>
				<template #custom>
					<view class="date">
						<uni-icons type="calendar-filled" size="24" color="#28b389"></uni-icons>
						<view class="text">
							<uni-dateformat :date="Date.now()" format="dd日"></uni-dateformat>
						</view>
					</view>
				</template>
			</common-title>
			<view class="content">
				<scroll-view scroll-x="true">
					<view class="box" v-for="item in 8">
						<image src="../../common/images/wallpaper/preview1.jpg" mode="aspectFill"></image>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="theme">
			<common-title>
				<template #name>专题精选</template>
				<template #custom>
					<view class="more">
						More+
					</view>
				</template>
			</common-title>
		</view>

	</view>
</template>

<script setup>
	const pics = ref(["/common/images/wallpaper/banner1.jpg","/common/images/wallpaper/banner2.jpg","/common/images/wallpaper/banner3.jpg"])

</script>

<style lang="scss">
	.homeLayout{
		.banner{
			width: 750rpx;
			padding: 30rpx 0;
			swiper{
				width: 750rpx;
				height: 340rpx;
				padding: 0 30rpx;
				&-item{
					width: 100%;
					height: 100%;
					image{
						width: 100%;
						height: 100%;
						border-radius: 20rpx;
					}
				}
			}
		}
		
		.notice{
			width: 690rpx;
			height: 80rpx;
			margin: 0 auto;
			background-color: #f9f9f9;
			border-radius: 80rpx;
			display: flex;
			.left{
				width: 140rpx;
				font-size: 30rpx;
				color: #2aa47f;
				line-height: 80rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				.text{
					font-weight: 600;
					font-size: 28rpx;
				}
			}
			.center{
				flex: 1;
				height: 80rpx;
				swiper{
					height: 100%;
					line-height: 80rpx;
					&-item{
						height: 100%;
						line-height: 80rpx;
						font-size: 30rpx;
						color: #666;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}
				}
			}
			.right{
				width: 70rpx;
				height: 80rpx;
				line-height: 80rpx;
			}
		}
		
		.select{
			padding-top: 50rpx;
			.content{
				width: 720rpx;
				margin-left: 30rpx;
				margin-top: 30rpx;
				scroll-view{
					white-space: nowrap;
					.box{
						width: 200rpx;
						height: 430rpx;
						display: inline-block;
						margin-right: 15rpx;
						image{
							width: 100%;
							height: 100%;
							
						}
					}
					.box:last-child{
						margin-right: 30rpx;
					}
				}
				
			}
			.date{
				// font-size: 28rpx;
				color: #28b389;
				display: flex;
				align-items: center;
				.text{
					margin-left: 5rpx;
				}
			}
		}
		.theme{
			margin-top: 30rpx;
			font-size: 30rpx;
			.more{
				font-size: 27rpx;
				color: #888;
			}
			
		}
	}
	
</style>
