Vue.component('counter-button', {
    props: ['theme', 'offset'],
    data: function() {
        return {
            count: 0
        };
    },
    methods: {
        Increase() {
            this.count++;
        }
    },
    computed: {
        bindedClasses() {
            let classes = ['btn'];

            if (this.theme) {
                classes.push('btn-' + this.theme);
            }

            return classes;
        },
        countPlusOffset() {
            return this.count + +this.offset;
        }
    },
    template:
        '<button ' +
        ':class="bindedClasses" ' +
        '@click="Increase()">' +
        'Számláló: {{ countPlusOffset }}</button>'
});
