<template>
    <body class="is-mobile has-navbar-fixed-top">
        <h1 class="title is-2 has-text-centered">Projects</h1>
        <div v-for="repo in this.non_forked_repos" :key="repo.id" class="block box">
            <a :href=repo.html_url target="_blank">
            <span class="button is-link">{{repo['full_name'].split('/')[1]}}
                <figure class="image is-24x24">
                    <i class="fa-solid fa-link"></i>
                </figure>
            </span>
            </a>
        </div>
    </body>
</template>

<script>
export default {
    name: 'ProjectPage',
    components: {

    },
    data() {
        return {
            all_repos: [],
            non_forked_repos: [],
        }
    },
    mounted() {

        fetch(`https://api.github.com/users/young-min-choo/repos`, {})
        .then(response => response.json())
        .then(data => {
			this.all_repos = data
            // console.log(this.repos)
            for (let index = 0; index < this.all_repos.length; index++) {
                const repo = this.all_repos[index];
                if (!repo['fork']){
                    this.non_forked_repos.push(repo)
                }
            }
            console.log(this.non_forked_repos)
            })
        .catch(error => console.log('error', error));
    },

}
</script>