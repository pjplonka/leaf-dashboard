export default {
    url: '/resources',
    list: {
        labels: {
            title: 'List of resources',
            new: 'Add new resource',
        },
        fields: [
            {'key': 'id', 'label': 'ID'},
            {'key': 'name', 'label': 'Name'},
            {'key': 'actions', 'label': 'Actions'}
        ]
    },
    create: {
        labels: {
            title: 'Create new resource',
        },
        form: [
            {component: 'TextInput', props: {id: 'name', label: 'Resource name'}},
        ]
    },
    edit: {
        labels: {
            title: 'Edit resource',
        },
        form: [
            {component: 'TextInput', props: {id: 'name', label: 'Resource name'}},
        ]
    }
};
