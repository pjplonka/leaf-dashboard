export default {
    methods: {
        toast(message) {
            this.$root.$bvToast.toast(message, {
                title: 'Success!',
                autoHideDelay: 5000,
                variant: 'success',
                static: true,
            })
        }
    }
};
