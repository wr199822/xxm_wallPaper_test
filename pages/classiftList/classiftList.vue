<template>
	<view class="classList">
		<view class="content">
			<view class="item" v-for="item in 10">
				<navigator url="" >
					<image src="../../common/images/wallpaper/preview2.jpg" mode="aspectFill"></image>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
	.classList{
		padding: 15rpx;
		.content{
			display: grid;
			grid-template-columns: repeat(3,1fr);
			gap: 15rpx;
			.item{
				height: 480rpx;
				navigator{
					height: 100%;
					image{
						width: 100%;
						height: 100%;
					}
					
				}
			}
		}
	}

	       
</style>
