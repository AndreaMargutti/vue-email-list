const { createApp } = Vue

createApp({
    data() {
        return {
            //creo variabile con link ad API
            apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
            //creo variabile in cui andrà inserita l'email
            emails: [],
        }
    },

    methods: {
        //funzione per chiamare l'API tramite axios
        getRandomEmail() {
            axios.get(this.apiUrl)
                .then((response) => {
                    console.log(response.data.response);
                    this.emails.push(response.data.response);
                });
        }
    },

    mounted() {
        //ciclo per chiamare 10 volte la funzione con all'interno l'API
        for (i = 0; i < 10; i++) {
            this.getRandomEmail();
        }
    }
}).mount('#app')
