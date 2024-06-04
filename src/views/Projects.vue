<template>
    <body class="is-mobile has-navbar-fixed-top has-background-primary-10 px-5 pb-5">
        <h1 class="title is-2 has-text-centered">Projects</h1>
        <!-- cycle through projects -->
        <div v-for="repo in this.non_forked_repos" :key="repo.id" class="box has-background-primary-15">
            <!-- title button and link -->
            <div class="has-text-centered">
                <a :href=repo.html_url target="_blank">
                <span v-if="!repo['full_name'].includes('github.io')" class="button has-background-primary-dark has-text-primary-light is-size-4">{{repo['full_name'].split('/')[1]}}
                    <figure class="image is-24x24">
                        <i class="fa-solid fa-link"></i>
                    </figure>
                </span>
                <span v-else class="button has-background-primary-dark has-text-primary-light is-size-4">{{'This Portfolio Website!'}}
                    <figure class="image is-24x24">
                        <i class="fa-solid fa-link"></i>
                    </figure>
                </span>
                </a>
            </div>

            <!-- details -->
            <div class="columns">
                <div class="column content">
                        <h3>Description</h3>
                        <p v-if="repo['description']">
                            {{repo['description']}}
                        </p>
                        <p v-else>
                            Description Pending!
                        </p>
                </div>
                <div class="column">
                </div>
            </div>
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
            })
        .catch(error => console.log('error', error));
    },

}
</script>