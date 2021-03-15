export default {
    url: '/resources',
    list: {
        fields: [
            {'key': 'id', 'label': 'ID'},
            {'key': 'name', 'label': 'Name'},
            {'key': 'actions', 'label': 'Actions'}
        ]
    },
    create: {
        form: [
            {
                component: 'TextInput',
                props: {id: 'name', label: 'Resource name', rules: {required: true, min: 3}}
            }
        ]
    },
    edit: {
        form: [
            {
                component: 'TextInput',
                props: {id: 'name', label: 'Name', rules: {required: true, min: 3}}
            }
        ]
    }
};
