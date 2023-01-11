console.log('Vue OK', Vue);

const app = Vue.createApp({
    data() {
        return {
            newTask: '',
            searchTerm: '',
            tasks: [
                'fare la spesa',
                'lavare i capelli',
                'comprare una marca da bollo',
                'aggiornare il pc'
            ],
        }
        
    },

    computed: {
        filterTasks() {
            return this.tasks.filter(task => task.includes(this.searchTerm));
        }
    },
    methods: {
        addTask() {
            if(this.newTask) {
                this.tasks.push(this.newTask);
                this.clearInput();
                this.$refs.input.focus();
            }
        },
        deleteTask(index){
            this.task.splice(index, 1);
        },
        clearInput() {
            this.newTask = '';
        }
    }

});

app.mount('#root');