<template>
	<div id="wrapper">
		<nav class="navbar is-dark is-fixed-top">
			<div class="navbar-brand">
				<router-link to="/" class="navbar-item"><strong>YMPortfolio</strong></router-link>

				<a class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

			<div class="navbar-menu" id="navbar-menu">
				<div class="navbar-end">
					<a :href=html_url target="_blank" class="navbar-item"><i class="fa-brands fa-github"></i></a>
					<router-link to="/projects" class="navbar-item">Projects</router-link>
					<router-link to="/about" class="navbar-item">About</router-link>
				</div>
			</div>
		</nav>
		<section class="section">
			<router-view/>
		</section>

		<footer class="footer">
			<p class="has-text-centered">Copyright (c) 2024</p>
		</footer>
	</div>
</template>

<script>
export default {
	name: 'App',
	// provide: {
	// 	baseUrl: "http://127.0.0.1:8000/",
	// },
	components: {
	},
    data() {
        return {
            yearsOfExperience: 0,
            data: {},
			profile: "",
			html_url: "https://github.com/young-min-choo",
        }
    },
    mounted() {
    },
}
</script>

<style>
	@import '../node_modules/bulma';
	.section {
		min-height: 100vh;
	}
</style>
