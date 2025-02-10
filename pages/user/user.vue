<template>
	<view class="userLatouy pageBg">
		<view class="userInfo">
			<view class="tx">
				<image src="../../common/images/xxmLogo.png" mode="aspectFill"></image>
			</view>
			<view class="ip">192.168.0.1</view>
			<view class="addrees">来自: 湖北</view>
		</view>
		<view class="section">
			<view class="list">
				<view class="row" >
					<view class="left">
						<uni-icons type="cloud-download-filled" size="22" color="#2cb28b"></uni-icons>
						<view class="context">我的下载</view>
					</view>
					<view class="right">
						<view class="downNum">0</view>
						<uni-icons type="right" size="22" color="#a7a7a7"></uni-icons>
					</view>
				</view>
				<view class="row" >
					<view class="left">
						<uni-icons type="star-filled" size="22" color="#2cb28b"></uni-icons>
						<view class="context">我的评分</view>
					</view>
					<view class="right">
						<view class="downNum">0</view>
						<uni-icons type="right" size="22" color="#a7a7a7"></uni-icons>
					</view>
				</view>
				<view class="row" >
					<view class="left">
						<uni-icons type="chatboxes-filled" size="22" color="#2cb28b"></uni-icons>
						<view class="context">联系客服</view>
						<!-- #ifdef MP -->
						<view>
							<button open-type="contact">联系客服</button>
						</view>
						<!-- #endif -->
						<!-- #ifndef MP -->
						<view>
							<button open-type="contact" @click="callPhone">拨打电话</button>
						</view>
						<!-- #endif -->
					</view>
					<view class="right">
						<uni-icons type="right" size="22" color="#a7a7a7"></uni-icons>
					</view>
					
					
				</view>
			</view>
			
		</view>
		
		<view class="section">
			<view class="list">
				<view class="row">
					<view class="left">
						<uni-icons type="paperplane-filled" size="22" color="#2cb28b"></uni-icons>
						<view class="context">订阅问题</view>
					</view>
					<view class="right">
						<uni-icons type="right" size="22" color="#a7a7a7"></uni-icons>
					</view>
				</view>
				<view class="row">
					<view class="left">
						<uni-icons type="flag-filled" size="22" color="#2cb28b"></uni-icons>
						<view class="context">常见问题</view>
					</view>
					<view class="right">
						<uni-icons type="right" size="22" color="#a7a7a7"></uni-icons>
					</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script setup>
const callPhone = ()=>{
	uni.makePhoneCall({
		phoneNumber:"13217484415"
	})
}
</script>

<style lang="scss"  scoped>
	.userInfo{
		// width: 680rpx;
		margin: 0 auto 100rpx;
		padding-top:50rpx ;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		.tx{
			width: 160rpx;
			height: 160rpx;
			border-radius: 50%;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.ip{
			font-size: 45rpx;
			color: black;
			margin-top: 15rpx ;
		}
		.addrees{
			color: #b6b6b6;
			margin-top: 10rpx;
		}
	}
	.section{
		width: 690rpx;
		border-radius: 10rpx;
		border: 1px solid #eee;
		box-shadow: 0 0 30rpx rgba(0, 0,0, 0.02);
		margin: 50rpx auto;
		color: #535353;
		margin-bottom: 35rpx;
		.row{
			padding:0  28rpx;
			display: flex;
			justify-content: space-between;
			border-bottom: 1px solid #f1f1f1;
			position: relative;
			.left{
				display: flex;
				align-items: center;
				justify-content: center;
				padding: 28rpx 0;
				font-size: 30rpx;
				.context{
					padding-left: 20rpx;
				}
			}
			.right{
				display: flex;
				align-items: center;
				justify-content: center;
				color: #a5a5a5;
				font-size: 28rpx;
			}
			button{
				height: 100rpx;
				width: 100%;
				position: absolute;
				left: 0;
				top: 0;
				opacity: 0;
			}
		}
		.row:last-child{border: none;}
		
	}
	
	
</style>
