<template>
	<view class="classLayout pageBg">
		<view class="classify">
			<common-theme v-for="item in 12"></common-theme>
		</view>
		
	</view>
</template>

<script setup>
	
</script>

<style>
	.classify{
		padding: 30rpx;
		display: grid;
		grid-template-columns: repeat(3,1fr);
		gap: 15rpx;
	}    
</style>
