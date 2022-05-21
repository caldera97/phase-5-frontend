function PostForm() {
    return <div className="login-page">
        <form>
            <p>image url</p>
            <input placeholder="image url" />
            <p>text content</p>
            <input placeholder="text" />
            <p>tag</p>
            <input placeholder="tags for post"/>
            <button>submit</button>
        </form>
    </div>
}

export default PostForm
//ideally can be used to create and edit posts
//maybe have "create post" and "edit post" in state and choose action based on that
//content, image, tag