const { createApp } = Vue

createApp({
    data() {
        return {
            //creo variabile con link ad API
            apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
            //creo variabile in cui andrà inserita l'email
            email: '',
        }
    },

    methods: {
        //funzione per recuperare 
        getRandomEmail() {
            axios.get(this.apiUrl)
                .then((response) => {
                    console.log(response.data.response);
                    this.email = response.data.response;
                });
        }
    },

    mounted() {
        for (i = 0; i < 10; i++) {
            this.getRandomEmail();
        }
    }
}).mount('#app')
