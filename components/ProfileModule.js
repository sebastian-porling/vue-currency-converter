

Vue.component('profile-module', {
    template: 
`
<div id="profile-module" class="card testimonial-card mt-5">
	<div class="avatar mx-auto white p-5">
		<a href="https://github.com/sebastian-porling">
			<img id="profile-pic" src="./images/sebastian.png" alt="avatar mx-auto white"
			class="rounded-circle img-fluid z-depth-2">
		</a>
    </div>
	<div class="card-body">
		<h4 class="card-title text-center">
			<a href="https://github.com/sebastian-porling">Sebastian Porling</a>
		</h4>
		<hr>
		<p class="text-center">	<i class="fas fa-quote-left"></i> 
			Hallo! Bitteschön, ein in Vue.js geschriebener Währungsumrechner!
			 <i class="fas fa-quote-right"></i>
		</p>
	</div>
</div>
`,
	mounted() {
		flipAnimation('#profile-module');
		rotateAnimation("#profile-pic");
	},
});