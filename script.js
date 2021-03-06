var app = angular.module("reddit", []);

app.controller("controller", function($scope){

  $scope.posts = [];
  $scope.showPostForm = false;


  $scope.AddPost = function(){
   $scope.showPostForm = true;
 };

  $scope.CancelPost = function(){
   $scope.showPostForm = false;
   $scope.title = null;
   $scope.author = null;
   $scope.imgUrl = null;
   $scope.description = null;
 };

  $scope.getPost = function() {
    var post = {};
    post.title = $scope.title;
    post.author = $scope.author;
    post.imgUrl = $scope.imgUrl;
    post.description = $scope.description;
    post.showCommentForm = false;
    post.AddComment = function() {
      post.showCommentForm = true;
    };
    post.CancelComment = function() {
      post.showCommentForm = false;
      post.commentUsername = null;
      post.commentDescription = null;
    };
    post.comments = [];
    post.GetComment = function() {
      var comment = {};
      comment.commentUsername = post.commentUsername;
      comment.commentDescription = post.commentDescription;
      post.comments.push(comment);
      console.log("Getting Comment");
      console.log(comment);
      console.log(post.comments);
      post.showCommentForm = false;

      post.commentUsername = null;
      post.commentDescription = null;
      if (post.comments.length === 1) {
        post.lengthWord = "Comment"
        console.log("working");
      };
      if (post.comments.length !== 1){
        post.lengthWord = "Comments"
        console.log("nodeal");
      };
    };
    $scope.posts.push(post);
    $scope.showPostForm = false;

    $scope.title = null;
    $scope.author = null;
    $scope.imgUrl = null;
    $scope.description = null;
    // console.log($scope.posts);

  };


});
