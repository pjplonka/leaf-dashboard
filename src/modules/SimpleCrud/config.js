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
                props: {id: 'name', label: 'Resource name'}
            }
        ]
    },
    edit: {
        form: [
            {
                component: 'TextInput',
                props: {id: 'name', label: 'Name'}
            }
        ]
    }
};
