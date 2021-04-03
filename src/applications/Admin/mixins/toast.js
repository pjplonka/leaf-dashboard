export default {
    methods: {
        toast(message, variant = 'success') {
            let title = this.$t('toast_success')
            if (variant === 'danger') {
                title = this.$t('toast_problem')
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
