export default {
    methods: {
        toast(message, variant = 'success') {
            let title = 'Success!'
            if (variant === 'danger') {
                title = 'Problem!'
            }

            this.$root.$bvToast.toast(message, {
                title: title,
                autoHideDelay: 5000,
                variant: variant,
                static: true,
            })
        }
    }
};
