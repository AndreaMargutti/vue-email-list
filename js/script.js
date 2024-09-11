const { createApp } = Vue

createApp({
    data() {
        return {
            apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
            email: '',
        }
    },

    methods: {
        getRandomEmail() {
            axios.get(this.apiUrl)
                .then((response) => {
                    console.log(response.data.response);
                    this.email = response.data.response;
                });
        }
    },

    mounted() {
        this.getRandomEmail();
    }
}).mount('#app')
