<?php

namespace App\Http\Controllers;

use App\Post;

class PostController extends Controller
{

    // public function index()
    // {
    //     $posts = Post::paginate(10);
    //     $response = [
    //         'pagination' => [
    //             'total' => $posts->total(),
    //             'per_page' => $posts->perPage(),
    //             'current_page' => $posts->currentPage(),
    //             'last_page' => $posts->lastPage(),
    //             'from' => $posts->firstItem(),
    //             'to' => $posts->lastItem()
    //         ],
    //         'data' => $posts
    //     ];
    //     return response()->json($response);
    // }

    public function index()
    {
        $posts = Post::paginate(10);

        return response()->json($posts);
    }
}
