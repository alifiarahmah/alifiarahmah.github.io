<template>
	<section class="min-h-screen w-screen bg-alipblue">
		
		<Navbar/>

		<div class="p-8 flex flex-col justify-center">
			<h1 class="text-alipwhite text-center text-5xl font-medium mb-10">Projects</h1>
			
			<div class="flex flex-col justify-center">
				<div v-for="project in projectList" :key="project.name">
					
					<div class="mx-auto flex flex-col border-2 m-3 p-5 w-5/6 sm:w-4/6">
						<h2 class="text-alipwhite text-center sm:text-left text-3xl font-medium">
							{{ project.name }}
						</h2>
						<!--p class="text-gray-300 mt-5">Tags</p-->
						<p class="text-alipwhite max-w-full overflow-wrap my-5">{{ project.desc }}</p>
						<div class="w-full flex flex-col sm:flex-row justify-end">
							<a v-if="project.github!=null" :href="project.github" class="block px-3 p-2 mt-2 mx-2 border-2 rounded-full text-alipwhite text-center font-bold hover:bg-alipwhite hover:text-alipblue" target="_blank">
								GitHub
							</a>
							<a v-if="project.link!=null" :href="project.link" class="block px-3 p-2 mt-2 mx-2 border-2 rounded-full text-alipwhite text-center font-bold hover:bg-alipwhite hover:text-alipblue" target="_blank">
								View
							</a>
							<a v-if="project.download!=null" href="" class="block px-3 p-2 mt-2 mx-2 border-2 rounded-full text-alipwhite text-center font-bold hover:bg-alipwhite hover:text-alipblue">
								Download
							</a>
						</div>
					</div>
					
				</div>
			</div>

		</div>

	</section>
</template>

<script>
export default {
	data(){
		return {
			projectList: [
				{
					name: 'Call-A-Borators',
					tags: ['flutter', 'dart', 'competition'],
					desc: 'A collaborating tool dedicated for searching partners to build a dream team for various projects. Was made for Mile Zero Project Competition Final Round: 10-Days Project Sprint.',
					github: 'https://github.com/alifiarahmah/callaborators',
					link: 'https://wonderful-smoke-08182120f.azurestaticapps.net/',
					download: 'https://github.com/alifiarahmah/callaborators/raw/main/build/app/outputs/flutter-apk/app-release.apk'
				},
				{
					name: 'EduFun',
					tags: ['Flutter', 'Dart', 'Competition'],
					desc: 'An educational game for HackBiz 2021 Final Round.',
					github: 'https://github.com/alifiarahmah/edufun',
					link: 'https://calm-tree-0d7e21900.azurestaticapps.net/#/',
					download: 'https://github.com/alifiarahmah/edufun/raw/master/build/app/outputs/flutter-apk/app-release.apk'
				},
				{
					name: 'Get To Know Me',
					tags: ['React', 'Bootstrap', 'Misc'],
					desc: 'Mini project for IEEE ITB SB IT Division Open Recruitment.',
					github: 'https://github.com/alifiarahmah/Get-to-Know-Me',
					link: 'https://agreeable-rock-0211aaf10.azurestaticapps.net/'
				},
				{
					name: 'Board of Feedback',
					tags: ['Flask', 'Python','Materialize.css', 'Misc'],
					desc: 'A feedback board platform with admin page',
					github: 'https://github.com/alifiarahmah/board-of-feedback'
				},
				{
					name: 'Mencongak Kuy!',
					tags: ['PHP', 'Misc'],
					desc: 'LINE Bot for playing a simple math game made using PHP',
					github: 'https://github.com/alifiarahmah/mencongak-kuy-bot',
					link: 'line.me/r/ti/p/~@671yphtz'
				}
			]
		}
	}
}
</script>

<style>
::-webkit-scrollbar {
	display: none;
}
</style>