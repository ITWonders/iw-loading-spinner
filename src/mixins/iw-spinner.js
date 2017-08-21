import iwSpinner from "../components/iw-spinner.vue";

export default {
    props: {},
    components: {
        iwSpinner
    },
    mixins: [],
    data: function () {
        return {
            isLoading: false,
        };
    },
    watch: {},
    computed: {},
    methods: {
        setLoadingOn: function () {
            this.isLoading = true
        },
        setLoadingOff: function () {
            this.isLoading = false
        },
    },
    mounted: function () {},
}
