<template>
	<view class="homeLayout">
		<view class="banner">
			<swiper >
				<swiper-item v-for="item in 3">
					<image src="/common/images/wallpaper/banner1.jpg" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>

	</view>
</template>

<script setup>

</script>

<style>
	.homeLayout{
		.banner{
			width: 750rpx;
			margin: 30rpx 0;
			
			
		}
	}
	
</style>
