<template>

    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <h4>Posts</h4>

                <table class="table table-hover table-bordered table-striped">
                    <thead class="thead-dark">
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(post, index) in posts" :key="index">
                            <td>{{ post.id }}</td>
                            <td>{{ post.title }} </td>
                            <td>{{ post.body }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 mx-auto">
                <Pagination v-if="pagination.last_page > 1" :pagination="pagination" :offset="10" @paginate="getPosts()"></Pagination>
            </div>
        </div>
    </div>

</template>

<script>
import { mapActions, mapState } from 'vuex';
import Pagination from '../pagination/Pagination'

export default {
    components: {
        Pagination
    },

    mounted() {
        this.getPosts();
    },

    computed: {
        ...mapState("post", {
            posts: "posts",
            loading: "posts_loading",
            pagination: "pagination"
        })
    },

    methods: {
        ...mapActions("post", ["getPosts"]),
    }
}

// import axios from 'axios'
// import Pagination from '../pagination/Pagination'

// export default {
//     components: {
//         Pagination
//     },

//     data() {
//         return {
//             posts: {},
//             pagination: {
//                 'current_page': 1
//             }
//         }
//     },

//     methods: {
//         fetchPosts() {
//             axios.get('http://127.0.0.1:8000/posts?page=' + this.pagination.current_page)
//                 .then(response => {
//                     this.posts = response.data.data.data;
//                     this.pagination = response.data.pagination;
//                 })
//                 .catch(error => {
//                     console.log(error.response.data);
//                 });
//         }
//     },

//     mounted() {
//         this.fetchPosts();
//     }
// }

</script>