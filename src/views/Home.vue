<template>
    <body class="is-mobile has-navbar-fixed-top">
        <div class="homepage">
            <div class="hero is-halfheight">
                <div class="hero-body">
                    <div class="container has-text-centered">
                        <p>Hi! My name is Young Min Choo, and I'm a software developer.</p>
                        <p>I've had {{ this.yearsOfExperience }} of experience and love to take on new challenges and learn new things. </p>
                        <p>Feel free to take a look at some of the projects I've worked on!</p>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
// import storeComputed from '@/mixins/storeComputed.js'

export default {
    name: 'HomePage',
    components: {

    },
    // mixins: [storeComputed],
    data() {
        return {
            yearsOfExperience: "",
            data: {},
        }
    },
    mounted() {
        // var myHeaders = new Headers();

        // var requestOptions = {
        // method: 'GET',
        // headers: myHeaders,
        // redirect: 'follow'
        // };

        // fetch(`${this.baseUrl}/home/`, requestOptions)
        // .then(response => response.json())
        // .then(result => {
        //     if(result.status === true){
        //         console.log(result.data);
        //         this.data = result.data;
        //         this.yearsOfExperience = this.data['years_of_experience']
        //     }else {
        //         alert(result.message);
        //     }
        //     })
        // .catch(error => console.log('error', error));
        this.yearsOfExperience = this.yearsCalc()
    },
    methods: {
        yearsCalc: function(){
            let today = new Date()
            let work_start = new Date(2023,3,1)
            let append_str = ""
            console.log(today, work_start)
            let time_difference_years = Math.round((today.getTime() - work_start.getTime()) / (1000 * 60 * 60 * 24 * 365))
            if (time_difference_years > 1) {
                append_str = " years"
            } else {
                append_str = " year"
            }
            return time_difference_years.toString() + append_str

        }
    },
}
</script>
<style scoped>
    .homepage {
        min-height: 100vh;
    }
    .container {
        width: fit-content;
    }
    p {
        font-weight: bold;
    }
</style>